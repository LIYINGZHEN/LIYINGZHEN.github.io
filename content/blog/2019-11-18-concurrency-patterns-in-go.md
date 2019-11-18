---
title:       "Concurrency Patterns in Go"
date:        2019-11-18T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

Confinement is a simple yet powerful idea of ensuring information is only ever available from one concurrent process.

## Lexical confinement

```go
func main() {
	chanOwner := func() <-chan int { // 1
		results := make(chan int, 5) 
		go func() {
			defer close(results)
			for i := 0; i <= 5; i++ {
				results <- i
			}
		}()
		return results
	}

	consumer := func(results <-chan int) {
		for result := range results {
			fmt.Printf("Received: %d\n", result)
		}
		fmt.Println("Done receiving!")
	}

	results := chanOwner()
	consumer(results)
}
```

Here we instantiate the channel within the lexical scope of the `chanOwner` function. This limits the scope of the write aspect of the results channel to the closure defined below it. In other words, it confines the write aspect of this channel to prevent other goroutines from writing to it.

## Preventing Goroutine Leaks

If a goroutine is responsible for creating a goroutine, it is also responsible for ensuring it can stop the goroutine.

```go
func main() {
	chanOwner := func(done <-chan struct{}) chan<- int { // 1
		inputs := make(chan int, 5)
		go func() {
			defer close(inputs)
			for {
				select {
				case input := <-inputs:
					fmt.Printf("Received: %d\n", input)
				case <-done:
					return
				}
			}
		}()
		return inputs
	}

	producer := func(inputs chan<- int) {
		for i := 0; i < 11; i++ {
			inputs <- i
		}
	}

	done := make(chan struct{})
	inputs := chanOwner(done)
	producer(inputs)
	time.Sleep(1 * time.Second)
	close(done)
}
```

## Error Handling

Errors should be considered first-class citizens when constructing values to return from goroutines.

```go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	type Result struct {
		Error    error
		Response *http.Response
	}

	checkStatus := func(
        done <-chan interface{},
        urls ...string,
    ) <-chan Result {
		results := make(chan Result)
		go func() {
			defer close(results)
			for _, url := range urls {
				var result Result
				resp, err := http.Get(url)
				result = Result{Error: err, Response: resp}
				select {
				case <-done:
					return
				case results <- result:
				}
			}
		}()
		return results
	}

	done := make(chan interface{})
	defer close(done)

	urls := []string{"https://www.google.com", "https://badhost"}
	for result := range checkStatus(done, urls...) {
		if result.Error != nil {
			fmt.Printf("error: %v", result.Error)
			continue
		}
		fmt.Printf("Response: %v\n", result.Response.Status)
	}
}
```

## Some Handy Generators

```go
func main() {
    take := func(
        done <-chan interface{},
        valueStream <-chan interface{},
        num int,
    ) <-chan interface{} {
        takeStream := make(chan interface{})
        go func() {
            defer close(takeStream)
            for i := 0; i < num; i++ {
                select {
                case <-done:
                    return
                case takeStream <- <-valueStream:
                }
            }
        }()
        return takeStream
    }

    repeatFn := func(
        done <-chan struct{},
        fn func() interface{},
    ) <-chan interface{} {
        valueStream := make(chan interface{})
        go func() {
            defer close(valueStream)
            for {
                select {
                case <-done:
                    return
                case valueStream <- fn():
                }
            }
        }()
        return valueStream
    }
}
```

## Fan-Out, Fan-In

`Fan-out` is a term to describe the process of starting multiple goroutines to handle input from the pipeline, and `fan-in` is a term to describe the process of combining multiple results into one channel.

```go
func main() {
	fanIn := func(
		done <-chan interface{},
		channels ...<-chan interface{},
	) <-chan interface{} {
		var wg sync.WaitGroup
		multiplexedStream := make(chan interface{})

		multiplex := func(c <-chan interface{}) {
			defer wg.Done()
			for i := range c {
				select {
				case <-done:
					return
				case multiplexedStream <- i:
				}
			}
		}

		// Select from all the channels
		wg.Add(len(channels))
		for _, c := range channels {
			go multiplex(c)
		}

		// Wait for all the reads to complete
		go func() {
			wg.Wait()
			close(multiplexedStream)
		}()

		return multiplexedStream
    }
}
```

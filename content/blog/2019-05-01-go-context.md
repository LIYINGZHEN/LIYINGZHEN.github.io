---
title:       "Go Context"
date:        2019-05-01T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

There are two classical way to control concurrent, one is `WaitGroup` another way is `Context`. And today we are going to talk about `Context`.

## Using Channel

```go
package main

import (
	"fmt"
	"time"
)

func monitor(stop chan struct{}) <-chan string {
	ch := make(chan string)
	go func() {
		for {
			select {
			case <-stop:
				close(ch)
				return
			case <-time.Tick(1 * time.Second):
				ch <- "Status OK"
			}
		}
	}()
	return ch
}

func main() {
	stop := make(chan struct{})

	go func() {
		time.Sleep(6 * time.Second)
		stop <- struct{}{}
	}()

	for n := range monitor(stop) {
		fmt.Println(n)
	}

	fmt.Println("Finished. I'm going home")
}
```

## Using Context

```go
package main

import (
	"fmt"
	"time"
)

func monitor(ctx context.Context) <-chan string {
	ch := make(chan string)
	go func() {
		for {
			select {
			case <-ctx.Done():
				close(ch)
				return
			case <-time.Tick(1 * time.Second):
				ch <- "Status OK"
			}
		}
	}()
	return ch
}

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 6*time.Second)
	defer cancel()

	for n := range monitor(ctx) {
		fmt.Println(n)
	}

	fmt.Println("Finished. I'm going home")
}
```

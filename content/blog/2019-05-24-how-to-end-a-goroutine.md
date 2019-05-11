---
title:       "How to end a goroutine"
date:        2019-05-24T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go", "goroutine"]
---

## 1. Stop Channel

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan int)
	done := make(chan struct{})

	go func() {
		i := 0
		for {
			select {
			case ch <- i:
				i++
			case <-done:
				close(ch)
				return
			}
			time.Sleep(100 * time.Millisecond)
		}
	}()

	go func() {
		time.Sleep(3 * time.Second)
		done <- struct{}{}
	}()

	for i := range ch {
		fmt.Println("receive value: ", i)
	}

	fmt.Println("finish")
}
```

## 2. Signal Channel

```go
package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	ch := make(chan int)
	done := make(chan os.Signal, 2)
	signal.Notify(done, os.Interrupt, syscall.SIGTERM)

	go func() {
		i := 0
		for {
			select {
			case ch <- i:
				i++
			case <-done:
				close(ch)
				return
			}
			time.Sleep(100 * time.Millisecond)
		}
	}()

	for i := range ch {
		fmt.Println("receive value: ", i)
	}

	fmt.Println("finish")
}
```

## 3. Close the channel

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan int)

	go func() {
		i := 0
		for {
			select {
			case ch <- i:
				i++
			case <-ch:
				return
			}
			time.Sleep(100 * time.Millisecond)
		}
	}()

	go func() {
		time.Sleep(3 * time.Second)
		close(ch)
	}()

	for i := range ch {
		fmt.Println("receive value: ", i)
	}

	fmt.Println("finish")
}
```

## 4. Context

```go
package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ch := make(chan int)
	ctx, cancel := context.WithCancel(context.Background())

	go func(ctx context.Context) {
		i := 0
		for {
			select {
			case ch <- i:
				i++
			case <-ctx.Done():
				close(ch)
				return
			}
			time.Sleep(100 * time.Millisecond)
		}
	}(ctx)

	go func() {
		time.Sleep(3 * time.Second)
		cancel()
	}()

	for i := range ch {
		fmt.Println("receive value: ", i)
	}

	fmt.Println("finish")
}
```

## 5. Time.After

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan int)
	timeout := time.After(3 * time.Second)

	go func(t <-chan time.Time) {
		i := 0
		for {
			select {
			case ch <- i:
				i++
			case <-t:
				close(ch)
				return
			}
			time.Sleep(100 * time.Millisecond)
		}
	}(timeout)

	for i := range ch {
		fmt.Println("receive value: ", i)
	}

	fmt.Println("finish")
}
```

## 6. Atmoic

```go
package main

import (
	"fmt"
	"sync/atomic"
	"time"
)

func main() {
	ch := make(chan int)
	var v atomic.Value

	go func() {
		i := 0
		for {
			select {
			case ch <- i:
				if v.Load().(bool) {
					close(ch)
				} else {
					i++
				}
			}
			time.Sleep(100 * time.Millisecond)
		}
	}()

	go func() {
		v.Store(false)
		time.Sleep(3 * time.Second)
		v.Store(true)
	}()

	for i := range ch {
		fmt.Println("receive value: ", i)
	}

	fmt.Println("finish")
}
```

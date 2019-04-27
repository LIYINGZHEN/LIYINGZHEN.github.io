---
title:       "Context and Cancellation of goroutines"
date:        2019-05-01T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

For cancelation of the goroutine we can use the context package. We have to change the function to accept an argument of type context.Context, by convention it’s usuallly the first argument.

```go
package main

import (
	"context"
	"fmt"
	"sync"
	"time"
)

var (
	wg sync.WaitGroup
)

func gen(ctx context.Context) <-chan int {
	ch := make(chan int)
	go func() {
		var n int
		for {
			select {
			case <-ctx.Done():
				// Remember to close the channel otherwise we will introduce deadlock.
				close(ch)
				fmt.Println("Cancel the context ", n)
				return
			case <-time.After(1 * time.Second):
				ch <- n
				n++
			}
		}
	}()
	return ch
}

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 6*time.Second)
	defer cancel()

	fmt.Println("Hey, I'm going to do some work")

	for n := range gen(ctx) {
		fmt.Println(n)
	}

	fmt.Println("Finished. I'm going home")
}
```

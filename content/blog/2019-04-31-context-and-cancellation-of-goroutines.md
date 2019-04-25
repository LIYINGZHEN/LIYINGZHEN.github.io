---
title:       "Context and Cancellation of goroutines"
date:        2019-04-31T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

For cancelation of the goroutine we can use the context package. We have to change the function to accept an argument of type context.Context, by convention it’s usuallly the first argument.

```go
var (
    wg sync.WaitGroup
)

func work(ctx context.Context) error {
    defer wg.Done()

    for i := 0; i < 1000; i++ {
        select {
        case <-time.After(2 * time.Second):
            fmt.Println("Doing some work ", i)

        // we received the signal of cancelation in this channel
        case <-ctx.Done():
            fmt.Println("Cancel the context ", i)
            return ctx.Err()
        }
    }
    return nil
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), 6*time.Second)
    defer cancel()

    fmt.Println("Hey, I'm going to do some work")

    wg.Add(1)
    go work(ctx)
    wg.Wait()

    fmt.Println("Finished. I'm going home")
}
```

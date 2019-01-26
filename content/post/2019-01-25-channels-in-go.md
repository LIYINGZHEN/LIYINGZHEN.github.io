---
title:       "Channels in Go"
description: " "
date:        2019-01-25T21:39:00+01:00
author:      "Max"
published:   true
tags:        ["golang"]
categories:  [ Go ]
---

A channel is a communication mechanism that allows us to pass data between goroutines. It is an in-built data type in Go. Data can be passed using one of the primitive data types or we can create our own complex data type using structs.

# Writing to a channel

The code in this subsection will teach you how to write to a channel. Writing the x value to the c channel is as easy as writing c <- x.

# Reading from a channel

In this subsection, you will learn how to read from a channel. You can read a single value from a channel named c by executing <-c.

# Signal Channels

A signal channel is one that is used just for signaling. Put simply, you can use a signal channel when you want to inform somebody else about something.


# Types of channels

Go provides us with three major variations on channel types. They can be broadly classified into:

- Unbuffered
- Buffered
- Unidirectional (send-only and receive-only type channels)

# The buffered channel

![c3be325a-235f-4cb6-9c5e-61393adb9827](https://user-images.githubusercontent.com/11765228/51790011-fa023780-218f-11e9-81b8-bca55669ae74.png)

# The unidirectional buffer

Messages can be sent and received from a channel. However, when goroutines use channels for communication, they are generally going to be for a single purpose: either to send or receive from a channel. Go allows us to specify whether a channel being used by a goroutine is for sending or receiving messages. It accomplishes this with the help of unidirectional channels. Once a channel has been identified as being unidirectional, we cannot perform the other operation on them. This means that a unidirectional send channel cannot be used to receive messages, and a unidirectional receive channel cannot be used to send messages.

Here is an example of using unidirectional channels correctly:

```go
// unichans.go
package main

import (
    "fmt"
    "sync"
)

func recv(ch <-chan int, wg *sync.WaitGroup) {
    fmt.Println("Receiving", <-ch)
    wg.Done()
}

func send(ch chan<- int, wg *sync.WaitGroup) {
    fmt.Println("Sending...")
    ch <- 100
    fmt.Println("Sent")
    wg.Done()
}

func main() {
    var wg sync.WaitGroup
    wg.Add(2)

    ch := make(chan int)
    go recv(ch, &wg)
    go send(ch, &wg)

    wg.Wait()
}
```

The expected output would be as follows:

```bash
Sending...
Receiving 100     # (or) Sent
Sent              # (or) Receiving 100
```

# Closing channels

We close a channel when we no longer want to send any messages on the said channel. How a channel behaves after being closed is different for each type of channel. Let's dive into them:

- **Unbuffered closed channel**: Sending messages will cause panic and receiving on it will yield an immediate zero value of the channel's element type.

- **Buffered closed channel**: Sending messages will cause panic but receiving on it will first yield all the values in the channel's queue. Once the queue has been exhausted, then the channel will start yielding zero values of the channel's element type.

# Multiplexing channels

```go
for {
  select {
    case <- ch1:
      // Statements to execute if ch1 receives a message
    case val := <- ch2:
      // Save message received from ch2 into a variable and
      execute statements for ch2
    default:
      // Statements to execute if none of the channels has yet
      received a message.
  }
}
```

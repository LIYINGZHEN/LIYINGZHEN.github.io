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

# Channels as function parameters

send-only channel

receive-only channel

```go
func f1(out chan<- int64, in <-chan int64) {
}
```

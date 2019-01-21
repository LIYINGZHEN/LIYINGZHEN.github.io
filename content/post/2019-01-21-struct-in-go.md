---
title:       "Struct in Go"
subtitle:    ""
description: ""
date:        2019-01-21T17:18:00+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["golang", "fundamental"]
---

Struct types are a way of creating complex types that group fields of data together. They are a great way of organizing and sharing the different aspects of the data your program consumes.

A computer architecture’s potential performance is determined predominantly by its word length (the number of bits that can be processed per access) and, more importantly, memory size, or the number of words that it can access.

# Notes

- We can use the struct literal form to initialize a value from a struct type.
- The dot (.) operator allows us to access individual field values.
- We can create anonymous structs.

# Code Review

## Declare, create and initialize struct types

[Go Playground](https://play.golang.org/p/djzGT1JtSwy)

```go
// Sample program to show how to declare and initialize struct types.
package main

import "fmt"

// example represents a type with different fields.
type example struct {
	flag    bool
	counter int16
	pi      float32
}

func main() {

	// Declare a variable of type example set to its
	// zero value.
	var e1 example

	// Display the value.
	fmt.Printf("%+v\n", e1)

	// Declare a variable of type example and init using
	// a struct literal.
	e2 := example{
		flag:    true,
		counter: 10,
		pi:      3.141592,
	}

	// Display the field values.
	fmt.Println("Flag", e2.flag)
	fmt.Println("Counter", e2.counter)
	fmt.Println("Pi", e2.pi)
}
```

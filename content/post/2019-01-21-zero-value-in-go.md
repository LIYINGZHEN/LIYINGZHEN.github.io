---
title:       "Zero Value in Go"
description: " "
date:        2019-01-21T16:43:00+01:00
author:      "Max"
published:   true
tags:        ["golang", "fundamental"]
categories:  ["Go"]
---

Variables declared without an initial value are set to their zero values:

- 0 for all **integer** types,
- false for **booleans**,
- "" for **strings**,
- nil for **interfaces**, and reference types(**slices**, **channels**, **maps**, **pointers** and **functions**).

The elements of an aggregate type like an **array** or **struct** will have its fields zeroed if no value is specified.

[Go Playground](https://play.golang.org/p/Y0rSs5agkpW)

```go
package main

import (
	"fmt"
)

type I interface {
	M()
}

type Func func(a, b string) string

type Str struct {
	number  int
	boolean bool
}

func main() {
	// Declare variables that are set to their zero value.
	var Number int
	var Boolean bool
	var String string
	var Interface I
	// Reference types
	var Slice []string
	var Pinter *int
	var Map map[int]string
	var Channel chan int
	var Function Func
	// Aggregate type
	var Array [5]int
	var Struct Str

	fmt.Println("Type     \t Zero Value")
	fmt.Printf("========================== \n\n")
	fmt.Printf("[Basic Types] \n\n")
	fmt.Printf("Number    \t %v \n", Number)
	fmt.Printf("Boolean   \t %v \n", Boolean)
	fmt.Printf("String    \t %v \n", String)
	fmt.Printf("Interface \t %v \n\n", Interface)

	fmt.Printf("[Reference Types] \n\n")
	fmt.Printf("Slice     \t %v \n", Slice)
	fmt.Printf("Pinter    \t %v \n", Pinter)
	fmt.Printf("Map       \t %v \n", Map)
	fmt.Printf("Channel   \t %v \n", Channel)
	fmt.Printf("Function  \t %v \n\n", Function)

	fmt.Printf("[Aggregate Type] \n\n")
	fmt.Printf("Array     \t %v \n", Array)
	fmt.Printf("Struct    \t %v \n", Struct)
}
```

# Notes

- When variables are being declared to their zero value, use the keyword var.
- When variables are being declared and initialized, use the short variable declaration operator.

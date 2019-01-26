---
title:       "Array in Go"

description: " "
date:        2019-01-24T06:47:00+01:00
author:      "Max"
published:   true

tags:        ["golang", "fundamental"]
---

Arrays are a special data structure in Go that allow us to allocate contiguous blocks of fixed size memory. Arrays have some special features in Go related to how they are declared and viewed as types.


# Notes

- Arrays are fixed length data structures that can't change.
- Memory is allocated as a contiguous block.

# Code Review

[Go Playground](https://play.golang.org/p/guj-ZvSF0qS)

```go
// Sample program to show how the behavior of the for range and
// how memory for an array is contiguous.
package main

import "fmt"

func main() {

	// Declare an array of 5 strings initialized with values.
	friends := [5]string{"Annie", "Betty", "Charley", "Doug", "Edward"}

	// Iterate over the array displaying the value and
	// address of each element.
	for i, v := range friends {
		fmt.Printf("Value[%s]\tAddress[%p] IndexAddr[%p]\n", v, &v, &friends[i])
	}
}
```

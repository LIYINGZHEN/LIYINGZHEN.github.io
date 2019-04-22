---
title:       "Slices from the ground up"
date:        2019-04-22T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

## Arrays

Arrays in Go have two relevant properties:

- **They have a fixed size**; [5]int is is distinct from [3]int.
- **They are value types**. Consider this example:

```go
package main

import "fmt"

func main() {
  var a [5]int
  b := a
  b[2] = 7
  fmt.Println(a, b) // prints [0 0 0 0 0] [0 0 7 0 0]
}
```

The statement `b := a` declares a new variable, b, of type `[5]int`, and copies the contents of `a` to `b`. Updating `b` has no effect on the contents of `a` because `a` and `b` are independent values.

## Slices

Go’s slice type differs from its array counterpart in two important ways:

- Slices do not have a fixed length.
- Assigning one slice variable to another does not make a copy of the slices contents.

## The slice header value

```go
package runtime

type slice struct {
  ptr   unsafe.Pointer
  len   int
  cap   int
}
```

This is important because unlike `map` and `chan` types **`slices` are `value types`** and are copied when assigned or passed as arguments to functions.

```go
package main

import "fmt"

func double(s []int) {
  s = append(s, s...)
}

func main() {
  s := []int{1, 2, 3}
  double(s)
  fmt.Println(s, len(s)) // prints [1 2 3] 3
}
```

---
title:       "Interfaces in Go"
date:        2019-05-02T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

An interface type is defined by a set of methods. A value of interface type can hold any value that implements those methods.

Go's interfaces let you use duck typing.

## Static Type V.S. Dynamic Type V.S. Dynamic Value

 1. Static Type: A static type of interface is interface itself.
 2. Dynamic Type: The type of the value which the interface type holds.
 3. Dynamic Value: The value of the value which the interface type holds.

 ```go
 package main

import "fmt"

type MyInterface interface{}

func main() {
	var i MyInterface

	// Print the dynamic value and the dynamic type of the i
	fmt.Printf("%v %T\n", i, i) // nil, nil

	i = string("Hi")
	fmt.Printf("%v %T\n", i, i) // Hi, string

	i = (*MyInterface)(nil)
	fmt.Printf("%v %T\n", i, i) // <nil> *main.MyInterface
}
 ```

 ## Nil Interface

Interface type value is `nil` if both `dynamic value` and `dynamic type` are `nil`.

```go
package main

import "fmt"

type MyInterface interface{}

func main() {
	var i MyInterface

	if i == nil {
		fmt.Println("1") // 1
	}

	i = string("Hi")
	if i == nil {
		fmt.Println("2") // won't print
	}

	i = (*MyInterface)(nil)
	if i == nil {
		fmt.Println("3") // won't print
	}
}
```

## Type assertion

A type assertion doesn’t really convert an interface to another data type, but it provides access to an interface’s `dynamic value`, which is typically what you want.

The type assertion `x.(T)` asserts that the `dynamic value` stored in x is of type T, and that x is not `nil`.

- If `T` is not an interface, it asserts that the `dynamic type` of x is identical to T.
- If `T` is an interface, it asserts that the `dynamic type` of x implements T.

## Type switches

A type switch performs several type assertions in series and runs the first case with a matching type.

```go
var x interface{} = "foo"

switch v := x.(type) {
case nil:
    fmt.Println("x is nil")            // here v has type interface{}
case int:
    fmt.Println("x is", v)             // here v has type int
case bool, string:
    fmt.Println("x is bool or string") // here v has type interface{}
default:
    fmt.Println("type unknown")        // here v has type interface{}
}
```

```
x is bool or string
```

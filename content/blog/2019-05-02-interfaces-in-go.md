---
title:       "Interfaces in Go"
date:        2019-05-02T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

An interface type is defined by a set of methods. A value of interface type can hold any value that implements those methods.

Go's interfaces let you use duck typing.

## Interfaces are satisfied implicitly

A type implements an interface by implementing its methods. No explicit declaration is required.

*There is no explicit declaration of intent.*

## Interface Values

An **interface value** consists of a **concrete value** and a **dynamic type**: [Value, Type]

In a call to fmt.Printf, you can use %v to print the concrete value and %T to print the dynamic type.

```go
var x MyStringer
fmt.Printf("%v %T\n", x, x) // <nil> <nil>

x = Temp(24)
fmt.Printf("%v %T\n", x, x) // 24 °C main.Temp

x = &Point{1, 2}
fmt.Printf("%v %T\n", x, x) // (1,2) *main.Point

x = (*Point)(nil)
fmt.Printf("%v %T\n", x, x) // <nil> *main.Point
```

The **zero value** of an interface type is nil, which is represented as [nil, nil].

## Equality

Two interface values are equal

- if they have equal concrete values and identical dynamic types,
- or if both are nil.

```go
var x MyStringer
fmt.Println(x == nil) // true

x = (*Point)(nil)
fmt.Println(x == nil) // false
```

In the second print statement, the concrete value of x equals `nil`, but its dynamic type is `*Point`, which is not `nil`.

## Empty interface

An empty interface may hold values of any type. (Every type implements at least zero methods.)

```go
interface{}
```

Empty interfaces are used by code that handles values of unknown type. For example, `fmt.Print` takes any number of arguments of type `interface{}`.

```go
func main() {
	var i interface{}
	describe(i)

	i = 42
	describe(i)

	i = "hello"
	describe(i)
}

func describe(i interface{}) {
	fmt.Printf("(%v, %T)\n", i, i)
}
```

## Type assertion

A type assertion doesn’t really convert an interface to another data type, but it provides access to an interface’s concrete value, which is typically what you want.

The type assertion `x.(T)` asserts that the concrete value stored in x is of type T, and that x is not nil.

- If T is not an interface, it asserts that the dynamic type of x is identical to T.
- If T is an interface, it asserts that the dynamic type of x implements T.

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

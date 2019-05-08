---
title:       "Types in Go"
date:        2019-05-22T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

## Terminology

1. Pre-Declared Type
2. Composite Type (Type Literal)
3. Named Type
4. Unnamed Types
5. Underlying Type
6. Assignability
7. Type Conversions
8. Untyped constants
9. Default Type

## Pre-Declared Type

Part of `Named Type`.

```
String
Integer
Boolean
```

## Composite Type (Type Literal)

Part of `Unnamed Types`.

```
Array
Slice
Map
Struct
```

## Named Type

`Named types` can have their own method sets.

```

```

## Unnamed Types

```
```

## Underlying Type

Every type do have an underlying type. `Pre-declared types` and `Composite Type` refers to itself as the underlying type.

```
```

## Assignability

It is also possible to assign a value to a variable if their `underlying types` are identical and one of them is an `unnamed type`.

```go
func main() {
	type S []int
	type S2 []int

	var a S = []int{1}
	// var b S2 = a <------- error
	var b S2 = S2(a)

	fmt.Printf("%v", a, b)

	// a        ->   name type, type     S, underlying type: []int
    // b        ->   name type, type    S2, underlying type: []int
    // []int{1} -> unname type, type []int, underlying type: []int
}
```

## Type Conversions

```
```

## Untyped constants

For `Numbers` -> Untyped constants they can be assigned to a variable of any integer type.

```go
func main() {
	const a = 2 // Untyped constants

    var b float32 = a
	var c complex64 = a
	var d uintptr = a
	var e byte = a

	fmt.Println(b, c, d, e)
}
```

## Default Type

```go
```

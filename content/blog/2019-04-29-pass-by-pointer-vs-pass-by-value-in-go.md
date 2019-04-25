---
title:       "Pass by pointer vs pass by value in Go"
date:        2019-04-29T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

Go allows to pass parameters both by pointers (sometimes it’s called by reference) and by values. In this post we will compare both approaches, paying special attention to different contexts that may affect the choice.

## Pass by pointer vs pass by value

Strictly speaking, there is only one way to pass parameters in Go - by value. Every time a variable is passed as parameter, a new copy of the variable is created and passed to called function or method. The copy is allocated at a different memory address.

In case a variable is passed by pointer, a new copy of pointer to the same memory address is created. To feel the difference, let’s have a look at how it all works on example.

## Passing by value

```go
package main

import "fmt"

type Person struct {
    firstName string
    lastName  string
}

func changeName(p Person) {
    p.firstName = "Bob"
}

func main() {
    person := Person {
        firstName: "Alice",
        lastName: "Dow",
    }

    changeName(person)

    fmt.Println(person)
}
Running the code will get the following output:
```

```
{Alice Dow}
```

Note that even though function changeName changes firstName to “Bob”, the change does not affect variable person in function main. This happens because function changeName modifies a copy of variable person, not person itself.

## Passing by pointer

```go
package main

import "fmt"

type Person struct {
    firstName string
    lastName  string
}

func changeName(p *Person) {
    p.firstName = "Bob"
}

func main() {
    person := Person {
        firstName: "Alice",
        lastName: "Dow",
    }

    changeName(&person)

    fmt.Println(person)
}
```

Running the code will get the following output:

```
{Bob Dow}
```

In this case, variable person in function main is modified inside function changeName. This happens because &person and p are two different pointers to the same struct which is stored at the same memory address.

## Predetermined choice

A choice is sometimes predetermined by usage context. Let’s have a look at the most common use cases.

### Variable must not be modified

We do not have other option, but pass variable by value. So that variable cannot be modified downstream. And vice versa, if variable is expected to be modified, it must be passed by pointer.

### Variable is a large struct

If variable is a large struct and performance is an issue, it’s preferable to pass variable by pointer. So that to avoid expensive copying of the whole struct in memory.

### Variable is a map or slice

Maps and slices are reference types in Go and should be passed by values.

## Passing by value often is cheaper

Even though Go looks a bit like C, its compiler works differently. And C analogy does not always work with Go. Passing by value in Go may be significantly cheaper than passing by pointer. This happens because Go uses escape analysis to determine if variable can be safely allocated on function’s stack frame, which could be much cheaper then allocating variable on the heap. Passing by value simplifies escape analysis in Go and gives variable a better chance to be allocated on the stack.

## Bottom line

Sometimes the choice of how to pass variable is predetermined by variable type or its usage. Otherwise, it’s highly recommended to pass variables by value. Also it is very important to be consistent with your choice, so that not to confuse yourself and your teammates.

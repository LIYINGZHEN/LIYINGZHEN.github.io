---
title:       "Factory patterns in Go"
date:        2019-05-17T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

The factory pattern is a commonly used pattern in object oriented programming. In Go, there are many different ways in which you can use the factory pattern to make your code cleaner and more concise.

Go’s answer to classes, are structs. For example, the struct for a “Person”, along with a “Greet” method would look like this:

```go
type Greeter interface {
  Greet()
}

type Person struct {
  Name string
  Age int
}

func (p Person) Greet() {
  fmt.Printf("Hi! My name is %s", p.Name)
}
```

We can now make use of factory functions to create new instances of Person

## Simple factory

The simplest, and most commonly used factory is a function that takes in some arguments, and returns an instance of `Person`:

```go
func NewPerson(name string, age int) Person {
  return Person{
    Name: name,
    Age: age
  }
}
```

We can also return pointers to the `Person` instance instead:

```go
func NewPerson(name string, age int) *Person {
  return &Person{
    Name: name,
    Age: age
  }
}
```

Factory functions are a better alternative to initializing instances using something like `p := &Person{}` because, the function signature ensures that everyone will supply the required attributes. For example, one can easily forget to initialize the `Age` attribute when using struct initialization. The function signature of `NewPerson(name string, age int)` ensures that both the name and age are supplied in order to construct a new instance of `Person`

> 👉 Use factory functions to ensure that new instances structs are constructed with the required arguments

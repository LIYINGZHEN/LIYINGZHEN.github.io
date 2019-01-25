---
title:       "Interfaces in Go"
subtitle:    ""
description: ""
date:        2019-01-24T18:28:00+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["golang", "fundamental"]
---


Interfaces provide a way to declare types that define only behavior. This behavior can be implemented by concrete types, such as struct or named types, via methods. When a concrete type implements the set of methods for an interface, values of the concrete type can be assigned to variables of the interface type. Then method calls against the interface value actually call into the equivalent method of the concrete value. Since any concrete type can implement any interface, method calls against an interface value are polymorphic in nature.

# Notes

- The method set for a value, only includes methods implemented with a value receiver.
- The method set for a pointer, includes methods implemented with both pointer and value receivers.
- Methods declared with a pointer receiver, only implement the interface with pointer values.
- Methods declared with a value receiver, implement the interface with both a value and pointer receiver.
- The rules of method sets apply to interface types.
- Interfaces are reference types, don't share with a pointer.
- This is how we create polymorphic behavior in go.

# Code Review

## Polymorphism ([Go Playground](https://play.golang.org/p/J7OWzPzV40w))

```go
// Sample program to show how polymorphic behavior with interfaces.
package main

import "fmt"

// reader is an interface that defines the act of reading data.
type reader interface {
	read(b []byte) (int, error)
}

// file defines a system file.
type file struct {
	name string
}

// read implements the reader interface for a file.
func (file) read(b []byte) (int, error) {
	s := "<rss><channel><title>Going Go Programming</title></channel></rss>"
	copy(b, s)
	return len(s), nil
}

// pipe defines a named pipe network connection.
type pipe struct {
	name string
}

// read implements the reader interface for a network connection.
func (pipe) read(b []byte) (int, error) {
	s := `{name: "bill", title: "developer"}`
	copy(b, s)
	return len(s), nil
}

func main() {

	// Create two values one of type file and one of type pipe.
	f := file{"data.json"}
	p := pipe{"cfg_service"}

	// Call the retrieve function for each concrete type.
	retrieve(f)
	retrieve(p)
}

// retrieve can read any device and process the data.
func retrieve(r reader) error {
	data := make([]byte, 100)

	len, err := r.read(data)
	if err != nil {
		return err
	}

	fmt.Println(string(data[:len]))
	return nil
}
```

---
title:       "The Relationship Between Interfaces and Reflection"
date:        2019-05-03T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

Interfaces are one of the fundamental tools for abstraction in Go. Interfaces store type information when assigned a value. Reflection is a method of examining type and value information at runtime.

Go implements reflection with the reflect package which provides types and methods for inspecting portions of the interface structure and even modifying values at runtime.

## Assigning a Value to an Interface

An interface encodes three things: a value, a method set, and the type of the stored value.

The structure for an interface looks like the following:

![interface-diagram](https://blog.gopheracademy.com/postimages/advent-2018/interfaces-and-reflect/interface.svg)

We can clearly see the three parts of the interface in that diagram: the `_type` is type information, `*data` is a pointer to the actual value, and the `itab` encodes the method set.

When a function accepts an interface as a parameter, passing a value to that function packs the value, method set, and type into the interface.

## reflect.Type – Examining Types

```go
package main

import (
	"log"
	"reflect"
)

type Gift struct {
	Sender    string
	Recipient string
	Number    uint
	Contents  string
}

func main() {
	g := Gift{
		Sender:    "Hank",
		Recipient: "Sue",
		Number:    1,
		Contents:  "Scarf",
	}

	t := reflect.TypeOf(g)

	if kind := t.Kind(); kind != reflect.Struct {
		log.Fatalf("This program expects to work on a struct; we got a %v instead.", kind)
	}

	for i := 0; i < t.NumField(); i++ {
		f := t.Field(i)
		log.Printf("Field %03d: %-10.10s %v", i, f.Name, f.Type.Kind())
	}
}
```

```
2018/12/16 12:00:00 Field 000: Sender     string
2018/12/16 12:00:00 Field 001: Recipient  string
2018/12/16 12:00:00 Field 002: Number     uint
2018/12/16 12:00:00 Field 003: Contents   string
```

## reflect.Method - Examining the itab/Method-Set

```go
package main

import (
	"log"
	"reflect"
)

type Reindeer string

func (r Reindeer) TakeOff() {
	log.Printf("%q lifts off.", r)
}

func (r Reindeer) Land() {
	log.Printf("%q gently lands.", r)
}

func (r Reindeer) ToggleNose() {
	if r != "rudolph" {
		panic("invalid reindeer operation")
	}
	log.Printf("%q nose changes state.", r)
}

func main() {
	r := Reindeer("rudolph")

	t := reflect.TypeOf(r)

	for i := 0; i < t.NumMethod(); i++ {
		m := t.Method(i)
		log.Printf("%s", m.Name)
	}
}
```

```
2018/12/16 12:00:00 Land
2018/12/16 12:00:00 TakeOff
2018/12/16 12:00:00 ToggleNose
```

## reflect.Value – Examining Values

```go
package main

import (
	"log"
	"reflect"
)

type Adult struct {
	Name       string
	Occupation string
	Nice       bool
}

// search a slice of structs for Name field that is "Hank" and set its Nice
// field to true.
func nice(i interface{}) {
	// retrieve the underlying value of i.  we know that i is an
	// interface.
	v := reflect.ValueOf(i)

	// we're only interested in slices to let's check what kind of value v is. if
	// it isn't a slice, return immediately.
	if v.Kind() != reflect.Slice {
		return
	}

	// v is a slice.  now let's ensure that it is a slice of structs.  if not,
	// return immediately.
	if e := v.Type().Elem(); e.Kind() != reflect.Struct {
		return
	}

	// determine if our struct has a Name field of type string and a Nice field
	// of type bool
	st := v.Type().Elem()

	if nameField, found := st.FieldByName("Name"); found == false || nameField.Type.Kind() != reflect.String {
		return
	}

	if niceField, found := st.FieldByName("Nice"); found == false || niceField.Type.Kind() != reflect.Bool {
		return
	}

	// Set any Nice fields to true where the Name is "Hank"
	for i := 0; i < v.Len(); i++ {
		e := v.Index(i)
		name := e.FieldByName("Name")
		nice := e.FieldByName("Nice")

		if name.String() == "Hank" {
			nice.SetBool(true)
		}
	}
}

func main() {
	adults := []Adult{
		{Name: "Bob", Occupation: "Carpenter", Nice: true},
		{Name: "Steve", Occupation: "Clerk", Nice: true},
		{Name: "Nikki", Occupation: "Rad Tech", Nice: false},
		{Name: "Hank", Occupation: "Go Programmer", Nice: false},
	}

	log.Printf("adults before nice: %v", adults)
	nice(adults)
	log.Printf("adults after nice: %v", adults)
}
```

```
2019/04/26 06:57:34 adults before nice: [{Bob Carpenter true} {Steve Clerk true} {Nikki Rad Tech false} {Hank Go Programmer false}]
2019/04/26 06:57:34 adults after nice: [{Bob Carpenter true} {Steve Clerk true} {Nikki Rad Tech false} {Hank Go Programmer true}]
```

## Tool Boxs

### Show all the methods

```go
package main

import (
	"log"
	"reflect"
)

func main() {
	t := reflect.TypeOf(reflect.Value{})

	for i := 0; i < t.NumMethod(); i++ {
		m := t.Method(i)
		log.Printf("%s", m.Name)
	}
}
```

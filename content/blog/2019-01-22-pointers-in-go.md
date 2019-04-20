---
title:       "Struct in Go"

description: " "
date:        2019-01-22T09:34:00+01:00
author:      "Max"
published:   true

tags:        ["golang", "fundamental"]
---

Pointers provide a way to share data across function boundaries. Having the ability to share and reference data with a pointer provides flexbility. It also helps our programs minimize the amount of memory they need and can add some extra performance.

# Notes

- Use pointers to share data.
- Values in Go are always pass by value.
- "Value of", what's in the box. "Address of" ( & ), where is the box.
- The (*) operator declares a pointer variable and the "Value that the pointer points to".

# Code Review

[Go Playground](https://play.golang.org/p/mJz5RINaimn)

```go
// Sample program to show the basic concept of using a pointer
// to share data.
package main

import "fmt"

// user represents a user in the system.
type user struct {
	name   string
	email  string
	logins int
}

func main() {

	// Declare and initialize a variable named bill of type user.
	bill := user{
		name:  "Bill",
		email: "bill@ardanlabs.com",
	}

	//** We don't need to include all the fields when specifying field
	// names with a struct literal.

	// Pass the "address of" the bill value.
	display(&bill)

	// Pass the "address of" the logins field from within the bill value.
	increment(&bill.logins)

	// Pass the "address of" the bill value.
	display(&bill)
}

// increment declares logins as a pointer variable whose value is
// always an address and points to values of type int.
func increment(logins *int) {
	*logins++
	fmt.Printf("&logins[%p] logins[%p] *logins[%d]\n\n", &logins, logins, *logins)
}

// display declares u as user pointer variable whose value is always an address
// and points to values of type user.
func display(u *user) {
	fmt.Printf("%p\t%+v\n", u, *u)
	fmt.Printf("Name: %q Email: %q Logins: %d\n\n", u.name, u.email, u.logins)
}
```

---
title:       "Reflection in Go"

description: " "
date:        2019-01-25T19:40:00+01:00
author:      "Max"
published:   true

tags:        ["golang", "fundamental"]
---

Reflection is an advanced Go feature that allows you to dynamically learn the type of an arbitrary object as well as information about its structure.

```go
package main

import (
	"fmt"

	"reflect"
)

type b struct {
	F int
	G int
	H string
	I float64
}

func main() {
	B := b{1, 2, "Struct b", -1.2}

	var r reflect.Value
	r = reflect.ValueOf(&B).Elem()

	iType := r.Type()
	fmt.Printf("i Type: %s\n", iType)
	fmt.Printf("The %d fields of %s are:\n", r.NumField(), iType)

	for i := 0; i < r.NumField(); i++ {
		fmt.Printf("Field name: %s ", iType.Field(i).Name)
		fmt.Printf("with type: %s ", r.Field(i).Type())
		fmt.Printf("and value %v\n", r.Field(i).Interface())
	}
}
```


Executing the code will generate the following output:

```bash
i Type: main.b
The 4 fields of main.b are:
Field name: F with type: int and value 1
Field name: G with type: int and value 2
Field name: H with type: string and value Struct b
Field name: I with type: float64 and value -1.2
```

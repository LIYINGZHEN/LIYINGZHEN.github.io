---
title:       "Panic and Recover in Go"

description: " "
date:        2019-01-12T14:16:34+01:00
author:      "Max"
published:   true

tags:        ["golang"]
---

Strictly speaking, panic() is a built-in Go function that terminates the current flow of a Go program and starts panicking! 

On the other hand, the recover() function, which is also a built-in Go function, allows you to take back the control of a goroutine that just panicked using panic().

```go
package main

import (
	"fmt"
)

func a() {
	fmt.Println("Inside a()")
	defer func() {
		if c := recover(); c != nil {
			fmt.Println("Recover inside a()!")
		}
	}()
	fmt.Println("About to call b()")
	b()
	fmt.Println("b() exited!")
	fmt.Println("Exiting a()")
}

func b() {
	fmt.Println("Inside b()")
	panic("Panic in b()!")
	fmt.Println("Exiting b()")
}

func main() {
	a()
	fmt.Println("main() ended!")
}
```

Executing panicRecover.go will create the following output:

```bash
$ go run panicRecover.go
Inside a()
About to call b()
Inside b()
Recover inside a()!
main() ended!
```

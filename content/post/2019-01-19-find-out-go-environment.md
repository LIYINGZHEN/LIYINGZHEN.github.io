---
title:       "Find out Go Environment"
subtitle:    ""
description: ""
date:        2019-01-19T17:02:00+01:00
author:      "Max"
image:       ""
tags:        ["golang"]
---

```go
package main

import (
   "fmt"
   "runtime"
)

func main() {
   fmt.Print("You are using ", runtime.Compiler, " ")
   fmt.Println("on a", runtime.GOARCH, "machine")
   fmt.Println("Using Go version", runtime.Version())
   fmt.Println("Number of CPUs:", runtime.NumCPU())
   fmt.Println("Number of Goroutines:", runtime.NumGoroutine())
}
```

xecuting goEnv.go on a macOS High Sierra machine with Go version 1.9.2 will create the following output:

```go
$ go run goEnv.go
You are using gc on a amd64 machine
Using Go version go1.9.2
Number of CPUs: 8
Number of Goroutines: 1
```

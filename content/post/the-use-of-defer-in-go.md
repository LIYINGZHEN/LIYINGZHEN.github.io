---
layout: post
title: "The Use of Defer in Go"
date: 2019-01-12T14:01:17+01:00
author: "Max"
published: true
tags:
    - Golang
---

Defer will always be triggered at the end of a function. So even if the code panics in some location of the executing code it will guarantee the deferred code will be executed. A panic in Go is an unhandled error and causes the program execution to get halted. After a panic a defer will be executed. Panic is not recommended to use it for exception handling. It is better to handle exceptions using Golang `error` object. 

```go
package main

import (
     "fmt"
     "os"
)

func main() {
     readBytes(10)
}

func readBytes(amount int) {
     pwd, _ := os.Getwd()
     f, _ := os.Open(pwd + "/awesome.txt")

     defer fmt.Println("File closed")
     defer f.Close()
     defer fmt.Println("Going to close file")

     bytes := make([]byte, amount)
     count, _ := f.Read(bytes)

     fmt.Printf("%d bytes: '%s'\n", count, string(bytes))
}
```

This program will print the string from our text file up to the amount of 10 bytes.

```go
echo "I am super sexy." > awesome.txt
go run main.go
10 bytes: I am super
Going to close file
File closed
```
---
title:       "Defer, Panic, and Recover"
date:        2019-05-19T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	f, err := os.Open("/tmp/dat")

	defer func() {
		if err := recover(); err != nil {
			fmt.Println(err)
		}

		if f != nil {
			if err := f.Close(); err != nil {
				panic(err) // repanic
			}
		}
	}()

	check(err)

	b1 := make([]byte, 5)
	n1, err := f.Read(b1)

	check(err)

	fmt.Printf("%d bytes: %s\n", n1, string(b1))
}
```

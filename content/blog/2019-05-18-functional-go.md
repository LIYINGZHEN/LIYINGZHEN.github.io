---
title:       "Functional Go"
date:        2019-05-18T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

## Closure

**Example1**

```go
package main

import "fmt"

func adder() func(int) int {
	sum := 0
	return func(v int) int {
		sum += v
		return sum
	}
}

func main() {
	a := adder()
	for i := 0; i < 10; i++ {
		fmt.Printf("0 + 1 + ... + %d = %d \n", i, a(i))
	}
}
```

**Example2**

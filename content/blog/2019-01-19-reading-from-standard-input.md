---
title:       "Reading from Standard Input"

description: " "
date:        2019-01-19T15:33:00+01:00
author:      "Max"
published:   true

tags:        ["golang"]
---

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var f *os.File
	f = os.Stdin
	defer f.Close()

	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		fmt.Println(">", scanner.Text())
	}
}
```

The execution of stdIN.go will produce the following type of output:

```bash
$ go run stdIN.go
21
> 21
This is Mihalis!
> This is Mihalis!
```

In Unix, you can tell a program to stop reading data from standard input by pressing Ctrl + D.

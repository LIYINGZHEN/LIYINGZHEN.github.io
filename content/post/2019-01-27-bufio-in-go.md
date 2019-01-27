---
title:       "Bufio in Go"
description: " "
date:        2019-01-27T09:33:26+01:00
author:      "Max"
published:   true
tags:        ["golang"]
categories:  ["Go"]
---

# NewScanner

```go
scanner := bufio.NewScanner(r) // r io.Reader
scanner.Split(bufio.ScanWords)

for scanner.Scan() {
  result[scanner.Text()]++
}
```

# NewReader

```go
r := bufio.NewReader(f)
line, err := r.ReadString('\n')
```

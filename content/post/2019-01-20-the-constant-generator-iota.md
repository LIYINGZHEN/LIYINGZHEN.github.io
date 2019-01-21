---
title:       "The constant generator iota"
subtitle:    ""
description: ""
date:        2019-01-20T10:05:00+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["golang"]
---

The constant generator iota is used for declaring a sequence of related values that uses incrementing numbers without the need to type each one of them explicitly.

```go
const (
  Zero Digit = iota
  One
  Two
  Three
  Four
)
```

Here you see the definition of a constant generator iota based on Digit, which is equivalent to the following declaration of four constants:

```go
const (
  Zero = 0
  One = 1
  Two = 2
  Three = 3
  Four = 4
)
```

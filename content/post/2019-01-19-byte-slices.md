---
title:       "Byte Slices"

description: " "
date:        2019-01-19T17:20:00+01:00
author:      "Max"
published:   true

tags:        ["golang"]
---

A byte slice is a slice where its type is byte. You can create a new byte slice named s as follows:

```
s := make([]byte, 5) 
```

There is nothing special in the way that you can access a byte slice compared to the other types of slices. It is just that **byte slices are used in file input and output operations**.

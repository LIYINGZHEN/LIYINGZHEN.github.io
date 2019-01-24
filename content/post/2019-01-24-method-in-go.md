---
title:       "Method in Go"
subtitle:    ""
description: ""
date:        2019-01-24T07:07:00+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["golang", "fundamental"]
---

Methods are functions that give data the ability to exhibit behavior.

# Notes

- Methods are functions that declare a receiver variable.
- Receivers bind a method to a type and can use value or pointer semantics.
- Value semantics mean a copy of the value is passed across program boundaries.
- Pointer semantics mean a copy of the values address is passed across program boundaries.
- Stick to a single semantic for a given type and be consistent.

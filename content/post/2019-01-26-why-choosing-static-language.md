---
title:       "Why Choosing Static Language"
subtitle:    ""
description: ""
date:        2019-01-26T10:43:00+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["personal"]
---

Writing applications in dynamic languages makes you productive quickly because there are no intermediate steps between writing code and executing it.

The trade-off is that dynamic languages don’t offer the type safety that static languages do and often need a comprehensive test suite to avoid discovering incorrect type bugs at runtime.

Imagine writing a large application in a dynamic language like JavaScript and coming across a function that expects to receive a field called ID. Is that an integer, a string, or a UUID? The way to find out is to look at the source. You could try to execute the function with a number or a string and see what happens. In Go, you wouldn’t spend time wondering, because the compiler will catch type differences for you.

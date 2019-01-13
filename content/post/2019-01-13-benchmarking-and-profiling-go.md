---
title:       "Benchmarking and profiling in Go"
subtitle:    ""
description: ""
date:        2019-01-13T09:18:00+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["Golang", "Testing"]
---

> "Programmers waste enormous amounts of time thinking about, or worrying about, the speed of noncritical parts of their programs, and these attempts at efficiency have a strong negative impact when debugging and maintenance are considered. We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%." - Donald Knuth

---

## Benchmarks

Benchmarking is a way of measuring the performance of your code by executing it multiple times with a fixed workload.

## Profiling

When we wish to take a look at the speed of our program, the best technique we can employ is profiling.
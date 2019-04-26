---
title:       "Go Escape Analysis"
date:        2019-05-05T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

Garbage collection is a convenient feature of Go - automatic memory management makes code cleaner and memory leaks less likely. However, GC also adds overhead as the program periodically needs to stop and collect unused objects. The Go compiler is smart enough to automatically decide whether a variable should be allocated on the heap, where it will later need to be garbage collected, or whether it can be allocated as part of the stack frame of the function which declared it. **Stack-allocated variables, unlike heap-allocated variables, don’t incur any GC overhead because they’re destroyed when the rest of the stack frame is destroyed - when the function returns.**

Go’s escape analysis is more basic than the HotSpot JVM, for example. **The basic rule is that if a reference to a variable is returned from the function where it is declared, it “escapes”** - it can be referenced after the function returns, so it must be heap-allocated. This is complicated by:

- functions calling other functions
- references being assigned to struct members
- slices and maps
- cgo taking pointers to variables

## Command

```bash
go run -gcflags '-m -l'
```

To perform escape analysis, Go builds a graph of function calls at compile time, and traces the flow of input arguments and return values. A function may take a reference to one of it’s arguments, but if that reference is not returned, the variable does not escape. A function may also return a reference, but that reference may be dereferenced or not returned by another function in the stack before the function which declared the variable returns. To illustrate a few simple cases, we can run the compiler with `-gcflags '-m'`, which will print verbose escape analysis information:

```go
package main

type S struct {}

func main() {
  var x S
  _ = identity(x)
}

func identity(x S) S {
  return x
}
```

You’ll have to build this with `go run -gcflags '-m -l'` - the `-l` flag prevents the function `identity` from being inlined (that’s a topic for another time). The output is: nothing! Go uses pass-by-value semantics, so the `x` variable from `main` will always be copied into the stack of `identity`. In general code without references always uses stack allocation, trivially. There’s no escape analysis to do.

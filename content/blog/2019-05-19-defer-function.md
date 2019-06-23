---
title:       "Defer Function"
date:        2019-05-19T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

## Defer three rules:

1. A deferred function's arguments are evaluated when the defer statement is evaluated.
2. Deferred function calls are executed in Last In First Out order after the surrounding function returns.
3. Deferred functions may read and assign to the returning function's named return values.

## Tests

What will be printed when the following code is executed?

### Test1:

```go
func f() (r int) {
	defer func() {
		fmt.Printf("f defer r is:%d \n", r)
		r = r + 5
		fmt.Printf("f defer2 r is:%d \n", r)
	}()
	fmt.Printf("f r is:%d \n", r)
	return 1
}

func main() {
	fmt.Println(f())
}
```

Answer

```
f r is:0
f defer r is:1
f defer2 r is:6
6
```

### Test2:

```go
func f() (r int) {
    defer func(r int) {
          r = r + 5
    }(r)
    return 1
}

func main() {
	fmt.Println(f())
}
```

Answer

```
1
```

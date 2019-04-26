---
title:       "Go Memory Layout"
date:        2019-05-06T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

## How memory works internally

When you have a struct like this one:

```go
type myStruct struct {
 	myInt   bool    // 1 byte
	myFloat float64 // 8 bytes
	myBool  int32   // 4 bytes
}
```

As you see a boolean takes 1 byte, a float64 8 bytes, and an int32 4 bytes.

But the memory allocates consecutive packet of 8 bytes. So instead of taking 1 + 8 + 4 = 13 bytes. This struct will takes : 24 bytes

```go
a := myStruct{}
fmt.Println(unsafe.Sizeof(a)) // 24 bytes
```

How to optimize :
It’s possible to optimize, ordering the struct by bytes taken:

```go
type myStructOptimized struct {
 	myFloat float64 // 8 bytes
	myInt   int32   // 4 bytes
	myBool  bool    // 1 byte
}
```

![](https://cdn-images-1.medium.com/max/800/1*Zd0nkKfQcIzg6XUPDUBsEg.png)

This new struct ordered will take now:

```go
b := myStructOptimized{}
fmt.Println(unsafe.Sizeof(b)) // ordered 16 bytes
```

16 bytes, because in memory it will be allocated like that (https://play.golang.org/p/gmkrt6X7aM) :

![](https://cdn-images-1.medium.com/max/800/1*wQvQILr8fAJqnWZ07kpmlA.png)

8 + 8 = 16 bytes


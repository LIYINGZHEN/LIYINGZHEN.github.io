---
title:       "Efficient String Concatenation in Go"
date:        2019-04-25T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

In this article I investigate the computational performance of various string concatenation methods in the Go programming language.

To evaluate the options, I prepared some typical Go benchmarks using the Go testing package. A benchmark looks something like this:

```go
func BenchmarkNative(b *testing.B) {
	var s string
	next := nextString()
	for i := 0; i < b.N; i++ {
		s += next()
	}
}
```

For the purposes of these benchmarks, I imagined having a process that returns string segments one by one, and these segments need to be concatenated to form one string. To represent such a process, I created a simple iterator that returns the string version of its current index on each call:

```go
// nextString is an iterator we use to represent a process
// that returns strings that we want to concatenate in order.
func nextString() func() string {
    n := 0
    // closure captures variable n
    return func() string {
        n += 1
        return strconv.Itoa(n)
    }
}
```

Every method we evaluate will call this function in a loop so that the fully concatenated string looks something like `0123456789101112131415....` There is function call overhead to take into account in this, but since all the benchmarks will have the same overhead, the comparison is still fair. Now that we have the basic setup for the benchmark, let’s see what the methods are we’ll be evaluating.

## Method 1: Naive Appending with +=

```go
func BenchmarkNaiveConcat(b *testing.B) {
	var s string
	next := nextString()
	for i := 0; i < b.N; i++ {
		s += next()
	}
}
```

## Method 2: strings.Join

```go
func BenchmarkJoin(b *testing.B) {
	var s string
	next := nextString()
	for i := 0; i < b.N; i++ {
		s = strings.Join([]string{s, next()}, "")
	}
}
```

## Method 3: Sprintf

```go
func BenchmarkSprintf(b *testing.B) {
	var s string
	next := nextString()
	for i := 0; i < b.N; i++ {
		s = fmt.Sprintf("%s%s", s, next())
	}
}
```

## Method 4: bytes.Buffer

```go
func BenchmarkBufferString(b *testing.B) {
	buffer := bytes.NewBufferString("")
	next := nextString()
	for i := 0; i < b.N; i++ {
		buffer.WriteString(next())
	}
	buffer.String()
}
```

## The result

`Method #4 (bytes.Buffer)` is the winner!

```go
BenchmarkNaiveConcat    	  300000	    166993 ns/op	    809751 B/op	    2 allocs/op
BenchmarkJoin           	  200000	    150370 ns/op	    518121 B/op	    2 allocs/op
BenchmarkSprintf        	  100000	    104652 ns/op	    481905 B/op	    5 allocs/op
BenchmarkBufferString   	20000000	      89.0 ns/op	        44 B/op     0 allocs/op
```

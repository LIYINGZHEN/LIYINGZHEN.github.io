---
title:       "Update map values in Go"
date:        2019-04-30T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

We can't change values associated with keys in a map, we can only reassign values.

So this leaves us 2 possible options:

- 1. Store pointers in the map, so you can modify the pointed object (which is not inside the map data structure).
- 2. Store struct values, but when you modify it, you need to reassign it to the key.

## 1. Using pointers

Storing pointers in the map: `dataManaged := map[string]*Data{}`

```go
type Person struct {
	Age int
}

func (p *Person) GrowUp() {
	p.Age++
}

func main() {
	m := map[string]*Person{
		"zhangsan": &Person{Age: 20},
	}
	m["zhangsan"].Age = 13
	m["zhangsan"].GrowUp()

	fmt.Printf("%+v \n", m["zhangsan"])
}

```

## 2. Reassigning the modified struct

Storing struct values in the map: `dataManaged := map[string]Data{}`

```go
type Person struct {
	Age int
}

func (p *Person) GrowUp() {
	p.Age++
}

func main() {
	m := map[string]Person{
		"zhangsan": Person{Age: 20},
	}
	p := m["zhangsan"]
	p.Age = 23
	p.GrowUp()
	m["zhangsan"] = p

	fmt.Printf("%+v \n", m["zhangsan"])
}
```


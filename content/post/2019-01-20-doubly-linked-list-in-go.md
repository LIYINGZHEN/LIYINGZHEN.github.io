---
title:       "Doubly linked list in Go"
subtitle:    ""
description: ""
date:        2019-01-20T15:41:00+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["golang", "data-structures"]
---

```go
package main 
 
import ( 
  "fmt" 
) 
 
type Node struct { 
  Value    int 
  Previous *Node 
  Next     *Node 
} 

func addNode(t *Node, v int) int { 
  if root == nil { 
    t = &Node{v, nil, nil} 
    root = t 
    return 0 
  } 
 
  if v == t.Value { 
    fmt.Println("Node already exists:", v) 
    return -1 
  } 
 
  if t.Next == nil { 
    temp := t 
    t.Next = &Node{v, temp, nil} 
    return -2 
  } 
 
  return addNode(t.Next, v) 
} 


func traverse(t *Node) { 
  if t == nil { 
    fmt.Println("-> Empty list!") 
    return 
  } 
 
  for t != nil { 
    fmt.Printf("%d -> ", t.Value) 
    t = t.Next 
  } 
  fmt.Println() 
} 
 
func reverse(t *Node) { 
  if t == nil { 
    fmt.Println("-> Empty list!") 
    return 
  } 
 
  temp := t 
  for t != nil { 
    temp = t 
    t = t.Next 
  } 
 
  for temp.Previous != nil { 
    fmt.Printf("%d -> ", temp.Value) 
    temp = temp.Previous 
  } 
  fmt.Printf("%d -> ", temp.Value) 
  fmt.Println() 
} 

func size(t *Node) int { 
  if t == nil { 
    fmt.Println("-> Empty list!") 
    return 0 
  } 
 
  n := 0 
  for t != nil { 
    n++ 
    t = t.Next 
  } 
  return n 
} 
 
func lookupNode(t *Node, v int) bool { 
  if root == nil { 
    return false 
  } 
 
  if v == t.Value { 
    return true 
  } 
 
  if t.Next == nil { 
    return false 
  } 
 
  return lookupNode(t.Next, v) 
} 

var root = new(Node) 
 
func main() { 
  fmt.Println(root) 
  root = nil 
  traverse(root) 
  addNode(root, 1) 
  addNode(root, 1) 
  traverse(root) 
  addNode(root, 10) 
  addNode(root, 5) 
  addNode(root, 0) 
  addNode(root, 0) 
  traverse(root) 
  addNode(root, 100) 
  fmt.Println("Size:", size(root)) 
  traverse(root) 
  reverse(root) 
} 
```

If you execute doublyLList.go, you will get the following output:

```bash
$ go run doublyLList.go
&{0 <nil> <nil>}
-> Empty list!
Node already exists: 1
1 ->
Node already exists: 0
1 -> 10 -> 5 -> 0 ->
Size: 5
1 -> 10 -> 5 -> 0 -> 100 ->
100 -> 0 -> 5 -> 10 -> 1 ->  
```
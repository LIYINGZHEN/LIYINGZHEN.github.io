---
title:       "Table driven tests in Go"
date:        2019-05-20T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

```go
package search

import "testing"

func TestFind(t *testing.T) {
  var tests = []struct {
    a   []int
    x   int
    exp int
}{
    {[]int{}, 1, 0},
    {[]int{1, 2, 3, 3}, 0, 0},
    {[]int{1, 2, 3, 3}, 1, 0},
    {[]int{1, 2, 3, 3}, 2, 1},
    {[]int{1, 2, 3, 3}, 3, 3}, // incorrect test case
    {[]int{1, 2, 3, 3}, 4, 4},
}
    for _, tt := range tests {
        res := Find(tt.a, tt.x)
        if res != tt.exp {
            t.Errorf("Find(%v, %d) = %d, expected %d", tt.a, tt.x, res, tt.exp)
        }
    }
}
```

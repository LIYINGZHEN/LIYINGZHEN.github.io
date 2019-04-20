---
title:       "Table-driven development"

description: " "
date:        2019-01-26T16:06:00+01:00
author:      "Max"
published:   false

tags:        ["golang", "testing"]
---

- Table-driven development, defines a table of all the required data to run a test, iterates over the "rows" of the table and runs tests against them.

```go
package main

import (
    "testing"
)

func TestAddInt(t *testing.T) {
    testCases := []struct {
        Name     string
        Values   []int
        Expected int
    }{
        {"addInt() -> 0", []int{}, 0},
        {"addInt([]int{10, 20, 100}) -> 130", []int{10, 20, 100}, 130},
    }

    for _, tc := range testCases {
        t.Run(tc.Name, func(t *testing.T) {
            sum := addInt(tc.Values...)
            if sum != tc.Expected {
                t.Errorf("%d != %d", sum, tc.Expected)
            } else {
                t.Logf("%d == %d", sum, tc.Expected)
            }
        })
    }
}
```

---
title:       "Table Driven Tests"
description: " "
date:        2019-01-27T16:48:37+01:00
author:      "Max"
published:   true
tags:        ["golang", "testing"]
categories:  ["Go"]
---

```go
package main

import "testing"

func TestCoverage(t *testing.T) {
  type args struct {
    condition bool
  }
  tests := []struct {
    name string
    args args
    wantErr bool
    }{
    // TODO: Add test cases.
  }

  for _, tt := range tests {
    t.Run(tt.name, func(t *testing.T) {
     if err := Coverage(tt.args.condition); (err != nil)
      != tt.wantErr {
        t.Errorf("Coverage() error = %v, wantErr %v",
        err, tt.wantErr)
      }
    })
  }
}
```

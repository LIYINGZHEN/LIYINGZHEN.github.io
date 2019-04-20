---
title:       "Ioutil in Go"
description: " "
date:        2019-01-27T09:53:14+01:00
author:      "Max"
published:   true
tags:        ["golang"]
categories:  ["Go"]
---

# ReadAll

```go
payload, err := ioutil.ReadAll(recorder.Body); err != nil {
  t.Errorf("Error parsing response body: %v", err)
}
```

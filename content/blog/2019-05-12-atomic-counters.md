---
title:       "Atomic Counters"
date:        2019-05-11T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
ref:
---

## Program with the the race condition

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	var ops uint64

	for i := 0; i < 10000; i++ {
		go func() {
			ops = ops + 1
		}()
	}

	time.Sleep(time.Second)
	fmt.Println("ops:", ops)
}
```

```
ops: 9742
```

## Solving the race condition using Mutex

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	var ops uint64
	var m sync.Mutex

	for i := 0; i < 10000; i++ {
		go func() {
			m.Lock()
			defer m.Unlock()
			ops = ops + 10
		}()
	}

	time.Sleep(time.Second)
	fmt.Println("ops:", ops)
}
```

```
ops: 10000
```

## Solving the race condition using a buffered channel

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	var ops uint64
	ch := make(chan bool, 1)

	for i := 0; i < 10000; i++ {
		go func() {
			ch <- true
			ops = ops + 1
			<-ch
		}()
	}

	time.Sleep(time.Second)
	fmt.Println("ops:", ops)
}
```

```
ops: 10000
```

## Solving the race condition using Atomic

```go
package main

import (
	"fmt"
	"sync/atomic"
	"time"
)

func main() {
	var ops uint64

	for i := 0; i < 10000; i++ {
		go func() {
			atomic.AddUint64(&ops, 1)
		}()
	}

	time.Sleep(time.Second)
	opsFinal := atomic.LoadUint64(&ops)
	fmt.Println("ops:", opsFinal)
}
```

```
ops: 10000
```

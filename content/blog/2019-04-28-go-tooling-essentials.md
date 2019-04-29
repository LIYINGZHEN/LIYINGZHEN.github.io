---
title:       "Go Tooling Essentials"
date:        2019-04-28T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

New to the Go tools? Or do you want to expand your knowledge? This article is about the flags for the Go tools everyone should know.

## $ go test -v

It provides chatty output for the testing. It prints the test name, its status (failed or passed), how much it took to run the test, any logs from the test case, etc.

go test without the `-v` flag is highly quiet, I always use it with `-v` turned on. Sample output:

```bash
$ go test -v context
=== RUN   TestBackground
--- PASS: TestBackground (0.00s)
=== RUN   TestTODO
--- PASS: TestTODO (0.00s)
=== RUN   TestWithCancel
--- PASS: TestWithCancel (0.10s)
=== RUN   TestParentFinishesChild
--- PASS: TestParentFinishesChild (0.00s)
=== RUN   TestChildFinishesFirst
--- PASS: TestChildFinishesFirst (0.00s)
=== RUN   TestDeadline
--- PASS: TestDeadline (0.16s)
=== RUN   TestTimeout
--- PASS: TestTimeout (0.16s)
=== RUN   TestCanceledTimeout
--- PASS: TestCanceledTimeout (0.10s)
...
PASS
ok  	context	2.426s
```

## $ go test -race

```go
Go’s race detector is available from the Go tools via `-race`. go test also supports this flag and reports races. Use this flag during development to detect the races.
```

## $ go test -run

You can filter tests to run by regex and the `-run` flag. The following command will only test examples.

```bash
$ go test -run=Example
```

## go test -coverprofile

You can output a cover profile as you are testing a package, then use go tool to visualize them on a browser.

```go
$ go test -coverprofile=c.out && go tool cover -html=c.out
```

The command above will create a coverage profile and open the results page in the browser. The visualized results will look like the page below:

![context-coverage](https://user-images.githubusercontent.com/11765228/56710614-52ad8600-6727-11e9-9a55-ef40b16cea26.png)

## go test -bench . -cpuprofile=cpu.prof

```bash
$ go test -bench . -cpuprofile=cpu.prof
$ go tool pprof cpu.prof
```

```bash
$ (pprof) web
```

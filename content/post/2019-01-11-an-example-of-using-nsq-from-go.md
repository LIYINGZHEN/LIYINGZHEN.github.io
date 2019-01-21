---
title:       "An Example of Using Nsq From Go"
subtitle:    ""
description: ""
date:        2019-01-11T10:27:05+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["message-queue"]
---

[NSQ](https://nsq.io/) is a message queue, similar to RabbitMQ. I decided I’d give it a whirl.

---

# Install Nsq

```bash
brew install nsq
```

# Launch Nsq

```bash
nsqlookupd &
nsqd --lookupd-tcp-address=127.0.0.1:4160 &
nsqadmin --lookupd-http-address=127.0.0.1:4161 &
```

# Get Go client library

```
go get github.com/nsqio/go-nsq
```

# Create a producer


```go
package main

import (
  "log"
  "github.com/bitly/go-nsq"
)

func main() {
  config := nsq.NewConfig()
  w, _ := nsq.NewProducer("127.0.0.1:4150", config)

  err := w.Publish("write_test", []byte("test"))
  if err != nil {
      log.Panic("Could not connect")
  }

  w.Stop()
}
```

and then run it with:

```
go run main.go
```

If you go to your NSQAdmin at http://localhost:4171, you should see a single message in the `write_test` topic.

# Create a consumer

```go
package main

import (
	"log"

	nsq "github.com/nsqio/go-nsq"
)

func main() {
	signalChan := make(chan struct{})

	config := nsq.NewConfig()
	q, _ := nsq.NewConsumer("write_test", "ch", config)

	go func() {
		q.AddHandler(nsq.HandlerFunc(func(message *nsq.Message) error {
			log.Printf("Got a message: %v", string(message.Body))
			signalChan <- struct{}{}
			return nil
		}))
		err := q.ConnectToNSQD("127.0.0.1:4150")
		if err != nil {
			log.Panic("Could not connect")
		}
	}()

	<-signalChan
}
```

and then run it with:


```go
run main.go
```

You should see output:

```
2014/11/12 08:37:29 INF    1 [write_test/ch] (127.0.0.1:4150) connecting to nsqd
2014/11/12 08:37:29 Got a message: &{[48 55 54 52 48 57 51 56 50 100 50 56 101 48 48 55] [116 101 115 116] 1415810020571836511 2 0xc208042118 0 0}
```

Congratulations! You just pushed a message through NSQ.

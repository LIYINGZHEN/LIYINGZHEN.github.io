---
title:       "Message Queue"

description: " "
date:        2019-01-13T09:44:00+01:00
author:      "Max"
published:   false

tags:        ["message-queue"]
---

The message queue is a highly distributed and scalable system, and it should be capable of processing millions of messages so we do not need to worry about it not being available. At the other end of the queue, there will be a `worker` who is listening for new messages pertaining to it. When it receives such a message, it processes the message and then removes it from the queue.

---

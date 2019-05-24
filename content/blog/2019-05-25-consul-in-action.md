---
title:       "Consul in Action"
date:        2019-05-25T00:00:00+00:00
author:      "Max"
published:   false
tags:        ["consul"]
---

## Run the Consul

```bash
docker run -d --name=dev-consul -e CONSUL_BIND_INTERFACE=eth0 consul
```

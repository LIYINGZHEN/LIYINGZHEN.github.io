---
title:       "Prometheus"
description: " "
date:        2019-03-09T12:00:00+00:00
author:      "Max"
published:   false
tags:        ["prometheus"]
categories:  ["notes"]
---

`prometheus.yml`

```yaml
global:
  scrape_interval:     15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'prometheus'

    static_configs:
      - targets: ['127.0.0.1:9090', '127.0.0.1:9100']
        labels:
          group: 'prometheus'
```


```bash
docker run -d --net=host \
    -v /root/prometheus.yml:/etc/prometheus/prometheus.yml \
    --name prometheus-server \
    prom/prometheus
```

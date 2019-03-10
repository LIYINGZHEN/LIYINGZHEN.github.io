---
title:       "Prometheus"
description: " "
date:        2019-03-09T12:00:00+00:00
author:      "Max"
published:   false
tags:        ["prometheus"]
categories:  ["notes"]
---

# Commands

```bash
promtool check config prometheus.yml


docker run -p 9090:9090 -v /tmp/prometheus/prometheus.yaml:/etc/prometheus/prometheus.yaml prom/prometheus
```

> http://localhost:9090/graph

# YAML

`prometheus.yaml`

```yaml
# global settings for controlling the Prometheus server’s behavior.
global:
  scrape_interval:     15s
  evaluation_interval: 15s

alerting:
  alertmanagers:
  - static_configs:
    - targets:
      # - alertmanager:9093

# specifies a list of files that can contain recording or alerting rules.
rule_files:
     # - "first_rules.yml"
     # - "second_rules.yml"

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['127.0.0.1:9090', '127.0.0.1:9100']
        labels:
          group: 'prometheus'
```

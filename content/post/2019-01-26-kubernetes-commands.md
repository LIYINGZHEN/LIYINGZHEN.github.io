---
title:       "Kubernetes Commands"
description: " "
date:        2019-01-26T19:04:11+01:00
author:      "Max"
published:   true
tags:        ["kubernetes", "commands"]
categories:  ["kubernetes"]
---

```bash
#
kubectl apply -f user-data-deployment.yaml
#
kubectl rollout status deployment/user-data
#
kubectl logs -f user-data-5bdcd77954-jp6gc
#
kubectl get pods -o wide | grep awdev
#
kubectl describe pods jodel-backend-canary-d8d588747-bsn8w
#
kubectl exec -it user-data-5998f9c7c9-47kqh -- sh
#
kubectl exec pushservice-76955b9d7b-944x5 -- env
```

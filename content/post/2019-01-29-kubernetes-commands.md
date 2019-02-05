---
title:       "kubernetes Commands"
description: " "
date:        2019-01-29T12:20:57+01:00
author:      "Max"
published:   true
tags:        ["kubernetes"]
categories:  ["kubernetes"]
---

```bash
kubectl apply -f service-deployment.yaml

kubectl rollout status deployment/service

kubectl get pods -o wide | grep service

kubectl logs -f service-76955b9d7b-944x5

kubectl exec service-76955b9d7b-944x5 -- env

kubectl describe pods backend-canary-d8d588747-bsn8w

# Get a Shell to a Running Pod
kubectl exec -it user-data-5998f9c7c9-47kqh -- sh
```

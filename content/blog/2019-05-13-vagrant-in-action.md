---
title:       "Vagrant in Action"
date:        2019-05-13T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["vagrant"]
ref: https://www.vagrantup.com/intro/index.html
---

Vagrant is a tool for building and managing virtual machine environments in a single workflow.

## Boxes

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
end

# automatically install software
config.vm.provision "shell", privileged: true, path: "./setup.sh"
```

## Up And SSH

```
vagrant up
vagrant ssh
```

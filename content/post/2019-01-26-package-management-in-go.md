---
title:       "Package Management in Go"
subtitle:    ""
description: ""
date:        2019-01-26T11:25:00+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["golang"]
---

# glide

The glide is one of the most widely used package management tool in Go community. It addresses the limitations of go get, but it needs to be installed manually by the developer. The following is a simple way to install and use glide:

```bash
$ curl https://glide.sh/get | sh
$ mkdir new-project && cd new-project
$ glide create
$ glide get github.com/last-ent/skelgor # A helper project to generate project skeleton.
$ glide install # In case any dependencies or configuration were manually added.
$ glide up # Update dependencies to latest versions of the package.
$ tree
.
├── glide.lock
├── glide.yaml
└── vendor
    └── github.com
        └── last-ent
            └── skelgor
                ├── LICENSE
                ├── main.go
                └── README.md
```

In case you do not wish to install glide via curl and sh, other options are available and described in better detail on the project page, available at https://github.com/masterminds/glide.

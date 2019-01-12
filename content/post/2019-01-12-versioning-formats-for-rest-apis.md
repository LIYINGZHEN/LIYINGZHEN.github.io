---
title:       "Versioning formats for REST APIs"
subtitle:    ""
description: ""
date:        2019-01-12T19:37:17+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["REST"]
---

To allow the client to request a particular API version, there are three common ways you can do this.

It can be done as part of the URI:

```
https://myserver.com/v1/helloworld
```

It can also be done as a query string parameter:

```
https://myserver.com/helloworld?api-version=1
```

Finally, It can be done by using a custom HTTP header:

```
GET https://myserver.com/helloworld api-version: 2
```

Whichever way you implement versioning is up to you and your team, but it should play a big part in your upfront design thinking. Once you have decided on an option stick, to it as providing a consistent and great experience for your consumers should be one of your primary goals.
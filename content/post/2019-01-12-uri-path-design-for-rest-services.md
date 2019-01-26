---
title:       "URI path design for REST services"

description: " "
date:        2019-01-12T19:37:17+01:00
author:      "Max"
published:   true

tags:        ["REST"]
---

## Collections

A collection is a directory of resources typically broken by parameters to access an individual document. For example:

```
GET /cats -> All cats in the collection
GET /cats/1 -> Single document for a cat 1
```

When defining a collection, we should always use a plural noun such as cats or people for the collection name.

## Documents

A document is a resource pointing to a single object, similar to a row in a database. It has the ability to have child resources that may be both sub-documents or collections. For example:

```
GET /cats/1 -> Single document for cat 1
GET /cats/1/kittens -> All kittens belonging to cat 1
GET /cats/1/kittens/1 -> Kitten 1 for cat 1
```

## Controller

A controller resource is like a procedure, this is typically used when a resource cannot be mapped to standard CRUD (create, retrieve, update, and delete) functions.

The names for controllers appear as the last segment in a URI path with no child resources. If the controller requires parameters, these would typically be included in the query string:

```
POST /cats/1/feed -> Feed cat 1
POST /cats/1/feed?food=fish ->Feed cat 1 a fish
```

When defining a controller name we should always use a verb. A verb is a word that indicates an action or a state of being, such as feed or send.

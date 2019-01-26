---
title:       "Using the new keyword"

description: " "
date:        2019-01-20T10:28:00+01:00
author:      "Max"
published:   true

tags:        ["golang"]
---

Go supports the `new` keyword that allows you to allocate new objects. However, there is a very important detail that you need to remember about new: new returns the memory address of the allocated object. Put simply, new returns a pointer!

You can create a fresh aStructure variable as follows:

```
pS := new(aStructure)
```

After executing the new statement, you are ready to work with your fresh variable that has its allocated memory zeroed, but not initialized.

> The main difference between new and make is that variables created with make are properly initialized without just zeroing the allocated memory space. Additionally, make can only be applied to maps, channels, and slices, and it does not return a memory address, which means that make does not return a pointer.


The next statement will create a slice with new that points to nil:

```
sP := new([]aStructure)
```

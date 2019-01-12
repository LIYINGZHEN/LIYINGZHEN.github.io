---
layout: post
title: "Hashing and Validating Passwords With Bcrypt"
date: 2019-01-12T13:29:56+01:00
author: "Max"
published: true
tags:
    - Golang
---

The point of our service is to ensure that passwords never need to be stored in a database, since that's a security risk if anyone is ever able to get unauthorized access to the database. Instead, you can generate a one-way hash (it cannot be decoded) that can safely be stored, and when users attempt to authenticate, you can perform a check to see whether the password generates the same hash or not. If the hashes match, the passwords are the same; otherwise, they are not. 

---

Hash method:

```go
func (vaultService) Hash(password string) (string, error) { 
  hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost) 
  if err != nil { 
    return "", err 
  } 
  return string(hash), nil
}
```

Validata method:

```go
func (vaultService) Validate(password, hash string) (bool, error) { 
  err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password)) 
  if err != nil {
    return false, nil 
  } 
  return true, nil
}
```
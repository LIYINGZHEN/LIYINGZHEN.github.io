---
title:       "Working with Cokkies"

description: " "
date:        2019-01-19T08:18:00+01:00
author:      "Max"

tags:        ["golang"]
---

# Code Review

## Writing Cookies

```go
func cookieWriteHandler(formatter *render.Render) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		expiration := time.Now().Add(2 * 24 * time.Hour)
		cookie := http.Cookie{
			Name:    "sample",
			Value:   "this is a cookie",
			Expires: expiration,
		}
		http.SetCookie(w, &cookie)
		formatter.JSON(w, http.StatusOK, "cookie set")
	}
}
```

## Reading Cookies


```go
func cookieReadHandler(formatter *render.Render) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		cookie, err := req.Cookie("sample")
		if err == nil {
			fmt.Fprint(w, cookie.Value)
		} else {
			fmt.Fprintf(w, "failed to read cookie, %v", err)
		}
	}
}
```

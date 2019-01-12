---
title:       "HTTP Response codes"
subtitle:    ""
description: ""
date:        2019-01-12T19:50:17+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["REST"]
---

## 400 Bad Request

This response indicates that the request could not be understood by the client due to a malformed request or due to a failure of domain validation (missing data, or an operation that would cause invalid state).

## 401 Unauthorized

This indicates that the request requires user authentication and will include a WWWAuthenticate header containing a challenge applicable to the requested resource. If the user has included the required credentials in the WWW-Authenticate header, then the response should include an error object that may contain relevant diagnostic information.

## 403 Forbidden

The server has understood the request, but is refusing to fulfill it. This could be due to incorrect access level to a resource not that the user is not authenticated.

If the server does not wish to make the fact that a request is not able to access a resource due to access level public, then it is permissible to return a 404 Not found status instead of this response.

## 500 Internal Server Error

A generic error message indicating that something did not go quite as planned.
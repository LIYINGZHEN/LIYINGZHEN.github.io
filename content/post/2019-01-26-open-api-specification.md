---
title:       "OpenAPI Specification"
description: " "
date:        2019-01-26T18:40:48+01:00
author:      "Max"
published:   true
tags:        ["golang"]
categories:  ["Go"]
---

OpenAPI lets us define RESTful APIs in a standardized manner, and they can be defined without being tied down to any particular programming language or framework being used.

Let's list the general structure of an OpenAPI specification and use it to redefine the Books API described in Chapter 4, The RESTful Web.

If we look at the Books API title, we can define the following elements to describe the API:

- The URL to our server
- The basic information about the intent of the API
- The paths available in our API
- The methods available per each of the paths in the API
- The possible description and example payloads for the requests and responses
- The schema of the requests and responses payloads

```yaml
# openapi/books.yaml

openapi: 3.0.0
servers:
  - url: /api
info:
  title: Books API
  version: '1.0'
  description: ;
    API responsible for adding, reading and updating list of books.
paths:
  /books:
    get:
      description: |
        Get list of all books
      responses:
        '200':
          description: |
            Request successfully returned list of all books
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/response'
  /books/{id}:
    get:
      description: |
        Get a particular books with ID 'id'
      responses:
        '200':
          description: |
            Request was successfully completed.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/document'
      parameters:
        - in: query
          name: id
          schema:
            type: integer
          description: Book ID of the book to get.
    post:
      description: |
        Get a particular books with ID 'id'
      responses:
        '200':
          description: |
            Request was successfully completed.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payload'
      requestBody:
        content:
          application/json:
            schema:
                $ref: '#/components/schemas/document'
    put:
      description: |
        Update the data of a Book with ID 'id' with the payload sent in the request body.
      responses:
        '200':
          description: |
            Request was successfully completed.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payload'
      requestBody:
        content:
          application/json:
            schema:
                $ref: '#/components/schemas/document'
    delete:
      description: |
        Get a particular books with ID 'id'
      responses:
        '200':
          description: |
            Request was successfully completed.
      parameters:
        - in: query
          name: id
          schema:
            type: integer
          description: Book ID of the book to get.
components:
  schemas:
    response:
      type: array
      items:
        $ref: '#/components/schemas/document'

    document:
      type: object
      required:
        - title
        - link
      properties:
        id:
          type: integer
          description: Book ID
        title:
          type: string
          description: Title of the book
        link:
          type: string
          description: Link to the book

    payload:
      type: object
      required:
        - title
        - link
      properties:
        title:
          type: string
          description: Title of the book
        link:
          type: string
          description: Link to the book
```

---
title:       "JSON and Go"
date:        2019-04-26T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

Parsing a format like JSON in a statically typed language like Go presents a bit of a problem. If anything could show up in the JSON body, how does the compiler know how to setup memory to have a spot to place everything?

There are two answers to this. The easy option, for when you know what your data will look like, is to parse the JSON into a struct you’ve defined. Any field which doesn’t fit in the struct will just be ignored. We’ll cover that option first.

## Parsing into a Struct

Here’s an example of parsing into a struct:

```go
type App struct {
    Id string `json:"id"`
    Title string `json:"title"`
}

data := []byte(`
    {
        "id": "k34rAT4",
        "title": "My Awesome App"
    }
`)

var app App
err := json.Unmarshal(data, &app)
if err != nil {
    panic(err)
}

fmt.Printf("%+v \n", app)
```

or you can use `json` package

```go
type App struct {
    Id    string `json:"id"`
    Title string `json:"title"`
}

r := bytes.NewReader([]byte(`{"id": "k34rAT4", "title": "My Awesome App"}`))

var app App
err := json.NewDecoder(r).Decode(&app)
if err != nil {
    panic(err)
}

fmt.Printf("%+v \n", app)
```

What you’re left with is `app` populated with the parsed JSON that was in `data`. You’ll also notice that the go term for parsing json is "Unmarshalling".

## Rendering from a Struct

Outputting from a struct works exactly as parsing but in reverse:

```go
data, err := json.Marshal(app)
```

As with all structs in Go, it’s important to remember that only fields with a capital first letter are visible to external programs like the JSON Marshaller.

## Struct Tags

One thing you’ll notice is the “tagged” data included in our struct between backticks. The JSON parser reads from that several clues about how to parse that value.

### THE FIELD NAME

As you might know, Go requires all exported fields to start with a capitalized letter. It’s not common to use that style in JSON however. We use the tag to let the parser know where to actually look for the value.

You can see an example of that in the example above, but as a refresher this is what it looks like:

```go
type MyStruct struct {
    SomeField string `json:"some_field"`
}
```

### WHAT TO DO IF THE FIELD IS EMPTY

The JSON parser also accepts a flag in the tag to let it know what to do if the field is empty. The `omitempty` flag tells it to not include the JSON value in the output if it’s the “zero-value” for that type.

The “zero-value” for numbers is 0, for strings it’s the empty string, for maps, slices and pointers it’s nil. This is how you include the `omitempty` flag.

```go
type MyStruct struct {
    SomeField string `json:"some_field,omitempty"`
}
```

Notice that the flag goes inside the quotes.

If the `SomeField` was an empty string, and you converted it to JSON, some_field wouldn’t be included in the output at all.

In other words, if `some_field == ""`:

- With `omitempty` the JSON value would be `{}`
- Without `omitempty` the JSON value would be `{"some_field": ""}`

`omitempty` is valuable when you deprecate a field and no longer want it to be included in output, when you have a flag which defaults to false so there’s no need to include it, or when you are only ever operating on your data with Go, so there’s no harm in using the built-in “zero-value” as the default.

### SKIPPING FIELDS

To have the JSON parser/writer skip a field, just give it the name "-". For example:

```go
type App struct {
    Id string `json:"id"`
    Password string `json:"-"`
}
```

It can also make sense to have a field which will be parsed if it’s available, but will never be outputted.


## Nested Fields

Nested fields refers to structs which are properties of other structs. In short, nested fields work exactly as you’d expect. You can nest a slice, map or other struct inside your struct and the JSON will recursively parse everything correctly. If you have a field which can be anything, you can always use the `interface{}` type.

Go also supports nesting one struct in another. For example:

```go
type App struct {
    Id string `json:"id"`
}

type Org struct {
    Name string `json:"name"`
}

type AppWithOrg struct {
    App
    Org
}
```

You can parse into a value with the `AppWithOrg` type, and it will have all the properties. You can also pull the `.App` or `.Org` out of it. For example:

```go
data := []byte(`
    {
        "id": "k34rAT4",
        "name": "My Awesome Org"
    }
`)

var appWithOrg AppWithOrg
err := json.Unmarshal(data, &appWithOrg)

app := appWithOrg.App
org := appWithOrg.Org
```

Combining structs like this might seem strange, but it’s very valuable if you, for example, have an API which includes some extra data with your actual value.

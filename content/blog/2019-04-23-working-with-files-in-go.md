---
title:       "Working with Files in Go"
date:        2019-04-23T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

One of the fundamental aspects of UNIX is that everything is a file. We don't necessarily know what the file descriptor maps to, that is abstracted by the operating system's device drivers. The operating system provides us an interface to the device in the form of a file.

The reader and writer interfaces in Go are similar abstractions. We simply read and write bytes, without the need to understand where or how the reader gets its data or where the writer is sending the data. Look in /dev to find available devices. Some will require elevated privileges to access.`

## Create Empty File

```go
newFile, err = os.Create("test.txt")
if err != nil {
		log.Fatal(err)
}
```

## Get File Info

```go
fileInfo, err = os.Stat("test.txt")
if err != nil {
	log.Fatal(err)
}
```

## Delete a File

```go
err := os.Remove("test.txt")
if err != nil {
		log.Fatal(err)
}
```

## Open and Close Files

```go
file, err := os.Open("filetoread.txt")
if err != nil {
  fmt.Println(err)
  return
}
defer file.Close()


// OpenFile with more options. Last param is the permission mode
// Second param is the attributes when opening
file, err = os.OpenFile("test.txt", os.O_APPEND, 0666)
if err != nil {
	log.Fatal(err)
}
file.Close()

// Use these attributes individually or combined
// with an OR for second arg of OpenFile()
// e.g. os.O_CREATE|os.O_APPEND
// or os.O_CREATE|os.O_TRUNC|os.O_WRONLY

// os.O_RDONLY // Read only
// os.O_WRONLY // Write only
// os.O_RDWR // Read and write
// os.O_APPEND // Append to end of file
// os.O_CREATE // Create is none exist
// os.O_TRUNC // Truncate file when opening
```

## Check if File Exists

```go
fileInfo, err := os.Stat("test.txt")
if err != nil {
		if os.IsNotExist(err) {
				log.Fatal("File does not exist.")
		}
}
```

## Quick Write to File

The ioutil package has a useful function called `WriteFile()` that will handle creating/opening, writing a slice of bytes, and closing. It is useful if you just need a quick way to dump a slice of bytes to a file.

```go
err := ioutil.WriteFile("test.txt", []byte("Hi\n"), 0666)
if err != nil {
		log.Fatal(err)
}
```

## Quick Read Whole File to Memory

```go
data, err := ioutil.ReadFile("test.txt")
if err != nil {
	log.Fatal(err)
}
```

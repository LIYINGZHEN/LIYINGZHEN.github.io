---
title:       "Writing to log files"

description: " "
date:        2019-01-19T15:44:00+01:00
author:      "Max"

tags:        ["golang"]
---

Generally speaking, using a log file to write some information is considered a better practice than writing the same output on the screen for two reasons:

1. The output does not get lost as it is stored in a file

2. You can search and process log files using Unix tools such as grep(1), awk(1), and sed(1), which cannot be done when messages are printed on a Terminal window

> Logging functions can be extremely handy for debugging your programs, especially server processes written in Go, so you should not undervalue their power.

## Logging levels

The logging level is a value that specifies the severity of the log entry. Various logging levels exist including `debug`, `info`, `notice`, `warning`, `err`, `crit`, `alert`, and `emerg` (in reverse order of severity).

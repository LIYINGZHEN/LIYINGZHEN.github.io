---
title: "LeetCode - 242. Valid Anagram"
date: 2019-06-04T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/valid-anagram/)

## Problem Statement

Given two strings s and t , write a function to determine if t is an anagram of s.

*Example 1:*

> Input: s = "anagram", t = "nagaram"
>
> Output: true

*Example 2:*

> Input: s = "rat", t = "car"
>
> Output: false


## Solution

```go
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	mapA := buildCharMap(s)
	mapB := buildCharMap(t)

	for key, Acount := range mapA {
		Bcount, ok := mapB[key]
		if !ok {
			return false
		}
		if Acount != Bcount {
			return false
		}
	}

	return true
}

func buildCharMap(s string) map[rune]int {
	m := make(map[rune]int)

	for _, char := range s {
		if _, ok := m[char]; ok {
			m[char]++
		} else {
			m[char] = 1
		}
	}

	return m
}
```

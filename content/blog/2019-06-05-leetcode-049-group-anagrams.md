---
title: "LeetCode - 49. Group Anagrams"
date: 2019-06-05T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/group-anagrams/)

## Problem Statement

Given an array of strings, group anagrams together.

*Example:*

```js
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

## Solution

```go
import (
	"sort"
	"strings"
)

func SortString(w string) string {
	s := strings.Split(w, "")
	sort.Strings(s)
	return strings.Join(s, "")
}

func groupAnagrams(strs []string) [][]string {
	m := make(map[string][]string)

	for _, w := range strs {
		word := SortString(w)
		m[word] = append(m[word], w)
	}

	var ss [][]string
	for e := range m {
		ss = append(ss, m[e])
	}
	return ss
}
```

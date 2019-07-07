---
title: "LeetCode - 692. Top K Frequent Words"
date: 2019-06-19T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/top-k-frequent-words/)

## Problem Statement

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

*Example: 1*

```js
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

```

*Example: 2*

```js
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.
```

## Solution

```go
import "sort"

type entry struct {
	word      string
	frequence int
}

type freWords []*entry

func topKFrequent(words []string, k int) []string {
	count := make(map[string]int, len(words))
	for _, w := range words {
		count[w]++
	}

	fw := make(freWords, 0, len(count))
	for w, c := range count {
		fw = append(fw, &entry{
			word:      w,
			frequence: c,
		})
	}

	sort.Slice(fw, func(i, j int) bool {
		if fw[i].frequence == fw[j].frequence {
			return fw[i].word < fw[j].word
		}
		return fw[i].frequence > fw[j].frequence
	})

	res := make([]string, k)
	for i := 0; i < k; i++ {
		res[i] = fw[i].word
	}

	return res
}
```

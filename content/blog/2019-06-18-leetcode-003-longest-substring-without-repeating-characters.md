---
title: "LeetCode - 003. Longest Substring Without Repeating Characters"
date: 2019-06-18T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Problem Statement

Given a string, find the length of the longest substring without repeating characters.

*Example: 1*

```js
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

*Example: 2*

```js
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

*Example: 3*

```js
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Solution

```go
func lengthOfLongestSubstring(s string) int {
	maxLength := 0
	right := 0
	curr := ""

	for right < len(s) {
		char := string(s[right])
		if !strings.Contains(curr, char) {
			curr += char
			if len(curr) > maxLength {
				maxLength = len(curr)
			}
			right++
		} else {
			curr = curr[1:]
		}
	}

	return maxLength
}
```

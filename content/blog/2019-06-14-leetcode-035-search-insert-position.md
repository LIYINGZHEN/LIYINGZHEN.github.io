---
title: "LeetCode - 035. Search Insert Position"
date: 2019-06-14T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/search-insert-position/)

## Problem Statement

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

*Example 1:*

```js
Input: [1,3,5,6], 5
Output: 2
```

*Example 2:*

```js
Input: [1,3,5,6], 2
Output: 1
```

*Example 3:*

```js
Input: [1,3,5,6], 7
Output: 4
```

*Example 4:*

```js
Input: [1,3,5,6], 0
Output: 0
```

## Solution

```go
func searchInsert(nums []int, target int) int {
    for i, v := range nums {
        if (v == target) {
            return i
        }
        if (target < v) {
            return i
        }
    }
    return len(nums)
}
```

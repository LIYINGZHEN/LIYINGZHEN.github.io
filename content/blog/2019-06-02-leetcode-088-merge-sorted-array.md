---
title: "LeetCode - 88. Merge Sorted Array"
date: 2019-06-02T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/merge-sorted-array/)

## Problem Statement

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

**Note:**

- The number of elements initialized in nums1 and nums2 are m and n respectively.
- You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

*Example*

> Input:
>
> nums1 = [1,2,3,0,0,0], m = 3
>
> nums2 = [2,5,6],       n = 3
>
> Output: [1,2,2,3,5,6]

## Solution

```go
func merge(nums1 []int, m int, nums2 []int, n int)  {
  replaceIndex := m + n - 1
  array1Target := m - 1
  array2Target := n - 1

  for array2Target >= 0 {
    if (array1Target >= 0 && nums2[array2Target] < nums1[array1Target]) {
      nums1[replaceIndex] = nums1[array1Target]
      array1Target--
    } else {
      nums1[replaceIndex] = nums2[array2Target]
      array2Target--
    }
    replaceIndex--
  }
}
```

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
  // k is the index which we will replace the value
  k := m + n - 1
  i := m - 1
  j := n - 1

  for j >= 0 {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--
  }
}
```

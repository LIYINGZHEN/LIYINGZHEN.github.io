---
title: "LeetCode - 066. Plus One"
date: 2019-06-15T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[Plus One](https://leetcode.com/problems/plus-one/)

## Problem Statement

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

*Example 1:*

```js
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

*Example 2:*

```js
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```

## Solution

```go
func plusOne(digits []int) []int {
    length := len(digits) - 1
    right := length
    carry := 0

    for right >= 0 || carry != 0 {
        sum := 0

        if (right < 0 && carry != 0) {
            return append([]int{1}, digits...)
        }

        if (right == length) {
            sum = digits[right] + 1
        } else {
            sum = digits[right] + carry
        }

        digits[right] = sum % 10
        carry = sum / 10
        right--
    }

    return digits
}
```

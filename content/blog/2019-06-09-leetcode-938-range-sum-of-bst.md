---
title: "LeetCode - 938. Range Sum of BST"
date: 2019-06-09T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/range-sum-of-bst/)

## Problem Statement

Given the **root** node of a binary search tree, return the sum of values of all nodes with value between **L** and **R** (inclusive).

The binary search tree is guaranteed to have unique values.

*Example 1:*

```js
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
```

*Example 2:*

```js
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
```

## Solution

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func rangeSumBST(root *TreeNode, L int, R int) int {
	return dfs(root, L, R)
}

func dfs(root *TreeNode, L int, R int) int {
	if root == nil {
		return 0
	}

	if root.Val >= L && root.Val <= R {
		return root.Val + dfs(root.Left, L, R) + dfs(root.Right, L, R)
	}

	return dfs(root.Left, L, R) + dfs(root.Right, L, R)
}
```

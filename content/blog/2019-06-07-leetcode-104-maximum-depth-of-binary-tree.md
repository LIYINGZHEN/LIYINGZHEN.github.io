---
title: "LeetCode - 104. Maximum Depth of Binary Tree"
date: 2019-06-07T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## Problem Statement

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

*Example:*

Given binary tree `[3,9,20,null,null,15,7]`,

```js
    3
   / \
  9  20
    /  \
   15   7
```

return its depth = 3.

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
import "math"

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	return int(math.Max(float64(maxDepth(root.Left)), float64(maxDepth(root.Right))) + 1)
}
```

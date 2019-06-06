---
title: "LeetCode - 21. Merge Two Sorted Lists"
date: 2019-06-01T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/)

## Problem Statement

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

*Example*

> Input: 1->2->4, 1->3->4
>
> Output: 1->1->2->3->4->4

## Solution

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	// Check boundary condition
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}

	// Create dummy node
	dummy := ListNode{}
	head := &dummy

	// Connect l1 and l2
	for l1 != nil && l2 != nil {
		if l1.Val < l2.Val {
			head.Next = l1
			l1 = l1.Next
		} else {
			head.Next = l2
			l2 = l2.Next
		}
		head = head.Next
	}

	// Check leftover
	if l1 != nil {
		head.Next = l1
	}
	if l2 != nil {
		head.Next = l2
	}

	return dummy.Next
}
```

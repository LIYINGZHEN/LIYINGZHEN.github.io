---
title:       "Linked List - Remove duplicates from a sorted linked list"
date:        2020-04-23T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Write a `SortedMerge()` function that takes two lists, each of which is sorted in increasing order, and merges the two together into one list which is in increasing order.

---

**METHOD 1 (Iteratively)**

```java
package linkedlist.max;

import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class MergeTwoSortedLinkedLists {
    // Time: O(n) ; Space: O(1)
    static Node sortedMerge(Node headA, Node headB) {
        Node d = new Node(0);
        Node tail = d;
        Node currA = headA;
        Node currB = headB;

        while (currA != null && currB != null) {
            if (currA.data <= currB.data) {
                tail.next = currA;
                currA = currA.next;
            } else {
                tail.next = currB;
                currB = currB.next;
            }
            tail = tail.next;
        }
        while (currA != null) {
            tail.next = currA;
            currA = currA.next;
            tail = tail.next;
        }
        while (currB != null) {
            tail.next = currB;
            currB = currB.next;
            tail = tail.next;
        }

        return d.next;
    }

    @Test
    public void test() {
        // Iterative
        LinkedList ll1 = new LinkedList();
        LinkedList ll2 = new LinkedList();

        ll1.push(15);
        ll1.push(10);
        ll1.push(5);

        ll2.push(20);
        ll2.push(3);
        ll2.push(2);

        ll1.head = sortedMerge(ll1.head, ll2.head);

        assertArrayEquals(new int[]{2, 3, 5, 10, 15, 20}, ll1.getList());
    }
}
```

**METHOD 2 (Recursively)**

```java
package linkedlist.max;

import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class MergeTwoSortedLinkedLists {
    // Time: O(n) ; Space: O(n)
    static Node sortedMerge(Node headA, Node headB) {
        if (headA == null) {
            return headB;
        }
        if (headB == null) {
            return headA;
        }

        if (headA.data <= headB.data) {
            headA.next = sortedMerge(headA.next, headB);
            return headA;
        } else {
            headB.next = sortedMerge(headA, headB.next);
            return headB;
        }
    }

    @Test
    public void test() {
        LinkedList ll1 = new LinkedList();
        LinkedList ll2 = new LinkedList();

        ll1.push(15);
        ll1.push(10);
        ll1.push(5);

        ll2.push(20);
        ll2.push(3);
        ll2.push(2);

        ll1.head = sortedMerge(ll1.head, ll2.head);

        assertArrayEquals(new int[]{2, 3, 5, 10, 15, 20}, ll1.getList());
    }
}
```

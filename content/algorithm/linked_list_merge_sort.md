---
title:       "Linked List - Merge sort"
date:        2020-04-06T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Implement merge sort.

---

**METHOD 1**

```java
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class MergeSort {
    static Node findMiddle(Node head) {
        if (head == null) {
            return null;
        }

        Node slow = head, fast = head.next;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    }

    static Node merge(Node headA, Node headB) {
        if (headA == null && headB == null) {
            return null;
        }
        if (headA == null) {
            return headB;
        }
        if (headB == null) {
            return headA;
        }
        if (headA.data <= headB.data) {
            headA.next = merge(headA.next, headB);
            return headA;
        } else {
            headB.next = merge(headA, headB.next);
            return headB;
        }
    }

    // Time: O(nlogn) ; Space: O(logn)
    static Node mergeSort(Node head) {
        if (head == null || head.next == null) {
            return head;
        }

        Node firstHalfEnd = findMiddle(head);
        Node secondHalfStart = firstHalfEnd.next;
        firstHalfEnd.next = null;

        Node firstHalfSorted = mergeSort(head);
        Node secondHalfSorted = mergeSort(secondHalfStart);

        return merge(firstHalfSorted, secondHalfSorted);
    }

    @Test
    public void test() {
        LinkedList ll = new LinkedList();

        // 2->3->20->5->10->15
        ll.push(15);
        ll.push(10);
        ll.push(5);
        ll.push(20);
        ll.push(3);
        ll.push(2);

        ll.head = mergeSort(ll.head);
        assertArrayEquals(new int[]{2, 3, 5, 10, 15, 20}, ll.getList());
    }
}
```

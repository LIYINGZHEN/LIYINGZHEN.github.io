---
title:       "Linked List - Pairwise swap of nodes in LinkeList"
date:        2020-04-08T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Given a singly linked list, write a function to swap elements pairwise.

```
Input : 1->2->3->4->5->6->NULL
Output : 2->1->4->3->6->5->NULL

Input : 1->2->3->4->5->NULL
Output : 2->1->4->3->5->NULL

Input : 1->NULL
Output : 1->NULL
```

---

**METHOD 1 (Recursively)**

```java
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/pairwise-swap-elements-of-a-given-linked-list/
 * Complexity : time: O(n) ; space: O(n)
 */
public class PairwiseSwap {
    // Time: O(n) ; Space: O(n)
    static Node pairWiseSwap(Node head) {
        if (head == null || head.next == null) {
            return head;
        }

        Node newHead = head.next;
        head.next = pairWiseSwap(newHead.next);
        newHead.next = head;

        return newHead;
    }

    @Test
    public void test() {
        LinkedList ll = new LinkedList();

        /* Created Linked List 1->2->3->4->5 */
        ll.push(5);
        ll.push(4);
        ll.push(3);
        ll.push(2);
        ll.push(1);

        ll.head = pairWiseSwap(ll.head);

        ll.printList();

        assertArrayEquals(new int[]{2, 1, 4, 3, 5}, ll.getList());
    }
}
```

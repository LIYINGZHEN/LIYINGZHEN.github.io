---
title:       "Linked List - Nth node from end of linked list"
date:        2020-04-24T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Given a Linked List and a number n, write a function that returns the value at the n’th node from the end of the Linked List.

For example, if the input is below list and n = 3, then output is “B”

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)

---

**METHOD 1**

```java
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class NthNodeFromEnd {
    // Time: O(n) ; Space: O(1)
    static int nthFromLast(Node head, int n) {
        if (n < 1) {
            return Integer.MAX_VALUE;
        }

        // Check if value of n is not more than length of the linked list.
        int len = 0;
        Node curr = head;
        while (curr != null) {
            curr = curr.next;
            len++;
        }
        if (n > len) {
            return Integer.MAX_VALUE;
        }

        Node slow = head;
        Node fast = head;
        while (fast != null && n != 1) {
            fast = fast.next;
            n--;
        }

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow.data;
    }

    @Test
    public void test() {
        LinkedList ll = new LinkedList();
        ll.push(20);
        ll.push(4);
        ll.push(15);
        ll.push(35);

        assertEquals(20, nthFromLast(ll.head, 1));
        assertEquals(4, nthFromLast(ll.head, 2));
        assertEquals(15, nthFromLast(ll.head, 3));
        assertEquals(35, nthFromLast(ll.head, 4));
    }
}
```

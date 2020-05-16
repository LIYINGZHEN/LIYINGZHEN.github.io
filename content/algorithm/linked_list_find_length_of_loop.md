---
title:       "Linked List - Find length of Loop"
date:        2020-04-26T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Write a function detectAndCountLoop() that checks whether a given Linked List contains loop and if loop is present then returns count of nodes in loop. For example, loop is present in below linked list and length of loop is 4. If loop is not present, then function should return 0.

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/04/Linked-List-Loop.gif)

---

**METHOD 1**

```java
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FindLengthOfLoop {
    static int countNodesinLoop(Node head) {
        if (head == null) {
            return 0;
        }

        Node slow = head, fast = head;
        boolean hasLoop = false;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            if (slow == fast) {
                hasLoop = true;
                break;
            }
        }

        if (hasLoop) {
            int counter = 0;
            do {
                slow = slow.next;
                counter++;
            } while (slow != fast);
            return counter;
        }

        return 0;
    }

    @Test
    public void test() {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);

        /* Create a loop for testing */
        head.next.next.next.next.next = head.next;

        assertEquals(4, countNodesinLoop(head));
    }
}
```

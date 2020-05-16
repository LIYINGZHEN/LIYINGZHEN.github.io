---
title:       "Linked List - Remove loop in Linked List"
date:        2020-04-26T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Write a function detectAndRemoveLoop() that checks whether a given Linked List contains loop and if loop is present then removes the loop and returns true. If the list doesn’t contain loop then it returns false. Below diagram shows a linked list with a loop. detectAndRemoveLoop() must change the below list to 1->2->3->4->5->NULL.

![](http://www.geeksforgeeks.org/wp-content/uploads/2009/04/Linked-List-Loop.gif)

---

**METHOD 1**

```java
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class RemoveLoop {
    static boolean detectAndRemoveLoop(Node head) {
        if (head == null) {
            return false;
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
            Node start = head;
            while (start.next != slow.next) {
                start = start.next;
                slow = slow.next;
            }
            slow.next = null;
        }

        return false;
    }

    @Test
    public void test() {
        LinkedList ll = new LinkedList();
        ll.head = new Node(50);
        ll.head.next = new Node(20);
        ll.head.next.next = new Node(15);
        ll.head.next.next.next = new Node(4);
        ll.head.next.next.next.next = new Node(10);

        // Creating a loop for testing
        ll.head.next.next.next.next.next = ll.head.next.next;

        detectAndRemoveLoop(ll.head);
        assertArrayEquals(new int[]{50, 20, 15, 4, 10}, ll.getList());
    }
}
```

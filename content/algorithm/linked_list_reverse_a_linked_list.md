---
title:       "Linked List - Reverse a linked list"
date:        2020-04-23T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Given pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing links between nodes.

**Examples :**

```
Input: Head of following linked list
1->2->3->4->NULL
Output: Linked list should be changed to,
4->3->2->1->NULL

Input: Head of following linked list
1->2->3->4->5->NULL
Output: Linked list should be changed to,
5->4->3->2->1->NULL

Input: NULL
Output: NULL

Input: 1->NULL
Output: 1->NULL
```

---

**METHOD 1**

```java
public class RevertLinkedList {
    Node head;

    public class Node {
        int data;
        Node next;
        public Node (int d) {
            this.data = d;
        }
    }

    public void push(int data) {
        Node newHead = new Node(data);
        newHead.next = head;
        head = newHead;
    }

    public void printList(Node head) {
        if (head == null) {
            System.out.println("null");
            return;
        }
        System.out.printf("%s -> ", head.data);
        printList(head.next);
    }

    // Time: O(n), Space: O(1)
    public Node revertLinkedList(Node head) {
        if (head == null || head.next == null) {
            return head;
        }

        Node newHead = revertLinkedList(head.next);

        head.next.next = head;
        head.next = null;

        return newHead;
    }

    public static void main(String[] args) {
        RevertLinkedList i = new RevertLinkedList();
        i.push(1);
        i.push(2);
        i.push(3);
        i.push(4);
        i.push(5);

        i.printList(i.head);
        Node newHead = i.revertLinkedList(i.head);
        i.printList(newHead);
    }
}
```

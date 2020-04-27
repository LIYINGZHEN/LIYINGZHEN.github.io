---
title:       "Linked List - Merge Sort"
date:        2020-04-22T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

```java
public class MergeSort {
    Node head;

    public class Node {
        int data;
        Node next;
        public Node(int d) {
            this.data = d;
        }
    }

    public void printList(final Node head) {
        if (head == null) {
            System.out.println("null");
            return;
        }
        System.out.printf("%s -> ", head.data);
        printList(head.next);
    }

    public void push(final int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }

    public Node merge(Node a, Node b) {
        if (a == null) {
            return b;
        }
        if (b == null) {
            return a;
        }

        Node newHead = null;
        if (a.data < b.data) {
            newHead = a;
            newHead.next = merge(a.next, b);
        } else {
            newHead = b;
            newHead.next = merge(a, b.next);
        }

        return newHead;
    }

    public Node mergeSort(final Node head) {
        if (head == null || head.next == null) {
            return head;
        }

        Node m = findMiddle(head);
        Node nextOfMiddle = m.next;
        m.next = null;

        Node left = mergeSort(head);
        Node right = mergeSort(nextOfMiddle);

        return merge(left, right);
    }

    public Node findMiddle(final Node head) {
        if (head == null) {
            return null;
        }

        Node slow = head, fast = head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    public static void main(String[] args) {
        MergeSort m = new MergeSort();
        m.push(1);
        m.push(2);
        m.push(3);
        m.push(4);
        m.push(5);

        m.printList(m.head);
        Node newHead = m.mergeSort(m.head);
        m.printList(newHead);
    }
}
```

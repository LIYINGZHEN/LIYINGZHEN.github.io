---
title:       "Queue - Implementation of deque using doubly linked list"
date:        2020-06-03T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "queue"]
---

Deque or Double Ended Queue is a generalized version of Queue data structure that allows insert and delete at both ends. In previous post Implementation of Deque using circular array has been discussed. Now in this post we see how we implement Deque using Doubly Linked List.

Operations on Deque :

Mainly the following four basic operations are performed on queue :

- `insertFront()` : Adds an item at the front of Deque.
- `insertRear()`  : Adds an item at the rear of Deque.
- `deleteFront()` : Deletes an item from front of Deque.
- `deleteRear()`  : Deletes an item from rear of Deque.

In addition to above operations, following operations are also supported :

- `getFront()` : Gets the front item from queue.
- `getRear()`  : Gets the last item from queue.
- `isEmpty()`  : Checks whether Deque is empty or not.
- `size()`     : Gets number of elements in Deque.
- `erase()`    : Deletes all the elements from Deque.

---

**METHOD 1**

```java
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Question   : https://www.geeksforgeeks.org/implementation-deque-using-doubly-linked-list/
 * Author     : Max
 */
public class QueueDoublyLinkedList {
    static class Node {
        int data;
        Node prev;
        Node next;
        Node(int d) {
            data = d;
        }
    }

    static class Queue {
        Node head;
        Node tail;
        int size;

        boolean isEmpty() {
            return head == null;
        }

        int size() {
            return size;
        }

        void insertFront(int data) {
            Node newNode = new Node(data);

            if (isEmpty()) {
                head = tail = newNode;
            } else {
                newNode.next = head;
                head.prev = newNode;
                head = newNode;
            }

            size++;
        }

        void insertRear(int data) {
            Node newNode = new Node(data);

            if (isEmpty()) {
                head = tail = newNode;
            } else {
                tail.next = newNode;
                newNode.prev = tail;
                tail = newNode;
            }

            size++;
        }

        int deleteFront() {
            if (isEmpty()) {
                return Integer.MIN_VALUE;
            }

            Node newHead = head.next;
            int d = head.data;
            head = newHead;

            if (head == null) {
                head = tail = null;
            } else {
                head.prev = null;
            }

            size--;
            return d;
        }

        int deleteRear() {
            if (isEmpty()) {
                return Integer.MIN_VALUE;
            }

            Node newTail = tail.prev;
            int d = tail.data;
            tail = newTail;

            if (tail == null) {
                head = tail = null;
            } else {
                tail.next = null;
            }

            size--;
            return d;
        }

        int getFront() {
            if (isEmpty()) {
                return Integer.MIN_VALUE;
            }
            return head.data;
        }

        int getRear() {
            if (isEmpty()) {
                return Integer.MIN_VALUE;
            }
            return tail.data;
        }

        void erase() {
            head = tail = null;
            size = 0;
        }
    }


    @Test
    public void test() {
        Queue q = new Queue();

        q.insertFront(1);
        q.insertFront(2);
        q.insertFront(3);
        q.insertFront(4);
        q.insertFront(5);

        System.out.println();

        // f                   r
        // 5 -> 4 -> 3 -> 2 -> 1
        assertEquals(5, q.deleteFront());
        assertEquals(4, q.deleteFront());
        assertEquals(3, q.deleteFront());
        assertEquals(1, q.deleteRear());

        // r == f
        // 2
        q.insertRear(4);
        q.insertRear(5);
        q.insertRear(6);
        q.insertFront(7);

        // f                   4
        // 7 -> 2 -> 4 -> 5 -> 6
        assertEquals(7, q.getFront());
        assertEquals(6, q.getRear());

        // f                   4
        // 7 -> 2 -> 4 -> 5 -> 6
        assertEquals(6, q.deleteRear());
        assertEquals(5, q.deleteRear());
        assertEquals(7, q.deleteFront());
        assertEquals(2, q.deleteFront());
        assertEquals(4, q.deleteFront());

        // f == r == -1
        assertEquals(Integer.MIN_VALUE, q.getRear());
        assertEquals(Integer.MIN_VALUE, q.getFront());
        assertEquals(Integer.MIN_VALUE, q.deleteFront());
        assertEquals(Integer.MIN_VALUE, q.deleteRear());

        q.insertFront(1);
        assertEquals(1, q.getRear());
        assertEquals(1, q.getRear());
        assertEquals(1, q.deleteFront());
        assertEquals(Integer.MIN_VALUE, q.deleteRear());

        q.insertFront(1);
        q.insertRear(2);
        q.insertFront(3);
        q.insertRear(4);
        assertEquals(4, q.size());

        q.erase();

        assertEquals(0, q.size());
    }
}
```

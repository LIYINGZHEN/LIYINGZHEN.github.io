---
title:       "Queue - Implementation of deque using circular array"
date:        2020-06-02T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "queue"]
---

Deque or Double Ended Queue is a generalized version of Queue data structure that allows insert and delete at both ends.In previous post we had discussed introduction of deque. Now in this post we see how we implement deque Using circular array.
Operations on Deque:

Mainly the following four basic operations are performed on queue:

- `insetFront()`: Adds an item at the front of Deque.
- `insertRear()`: Adds an item at the rear of Deque.
- `deleteFront()`: Deletes an item from front of Deque.
- `deleteRear()`: Deletes an item from rear of Deque.

In addition to above operations, following operations are also supported

- `getFront()`: Gets the front item from queue.
- `getRear()`: Gets the last item from queue.
- `isEmpty()`: Checks whether Deque is empty or not.
- `isFull()`: Checks whether Deque is full or not.

---

**METHOD 1**

```java
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Question   : https://www.geeksforgeeks.org/implementation-deque-using-circular-array/
 * Author     : Max
 */
public class QueueCircularArray {
    class Queue {
        int cap;
        int[] arr;
        int front;
        int rear;

        Queue(int size) {
            arr = new int[size];
            cap = size;
            front = -1;
            rear = -1;
        }

        boolean isEmpty() {
            return front == -1;
        };

        boolean isFull() {
            return (rear + 1) % cap == front;
        };

        void insetFront(int x) throws RuntimeException {
            if (isFull()) {
                throw new RuntimeException("Queue is full");
            }

            if (isEmpty()) {
                front = rear = 0;
            } else {
                front = (front - 1 + cap) % cap;
            }
            arr[front] = x;
        };

        void insertRear(int x) throws RuntimeException {
            if (isFull()) {
                throw new RuntimeException("Queue is full");
            }

            if (isEmpty()) {
                front = rear = 0;
            } else {
                rear = (rear + 1) % cap;
            }
            arr[rear] = x;
        }

        int deleteFront() {
            if (isEmpty()) {
                return Integer.MIN_VALUE;
            }

            int frontIdx = front;

            if (front == rear) {
                front = rear = -1;
            } else {
                front = (front + 1) % cap;
            }

            return arr[frontIdx];
        };

        int deleteRear() {
            if (isEmpty()) {
                return Integer.MIN_VALUE;
            }

            int rearIdx = rear;

            if (front == rear) {
                front = rear = -1;
            } else {
                rear = (rear - 1 + cap) % cap;
            }

            return arr[rearIdx];
        };

        int getFront() {
            if (isEmpty()) {
                return Integer.MIN_VALUE;
            }
            return arr[front];
        };

        int getRear() {
            if (isEmpty()) {
                return Integer.MIN_VALUE;
            }
            return arr[rear];
        };
    }

    @Test
    public void test() {
        QueueCircularArray.Queue q = new QueueCircularArray.Queue(5);

        q.insetFront(1);
        q.insetFront(2);
        q.insetFront(3);
        q.insetFront(4);
        q.insetFront(5);

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
        q.insetFront(7);

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

        q.insetFront(1);

        // f == r
        // 1
        assertEquals(1, q.getRear());
        assertEquals(1, q.getRear());
        assertEquals(1, q.deleteFront());
        assertEquals(Integer.MIN_VALUE, q.deleteRear());
    }
}
```

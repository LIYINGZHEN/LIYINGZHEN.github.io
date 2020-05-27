---
title:       "Queue - Implement k queues in an array"
date:        2020-06-04T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "queue"]
---

Create a data structure kQueues that represents k queues. Implementation of kQueues should use only one array, i.e., k queues should use the same array for storing elements. Following functions must be supported by kQueues.

- `enqueue(int x, int qn)` –> adds x to queue number ‘qn’ where qn is from 0 to k-1
- `dequeue(int qn)` –> deletes an element from queue number ‘qn’ where qn is from 0 to k-1

---

**METHOD 1**

```java
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Question   : https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/
 * Author     : Max
 */
public class KQueues {
    class Queue {
        int[] arr;
        int[] next;
        int[] head;
        int[] tail;
        int free;

        Queue(int k, int cap) {
            int n = cap <= 0 ? 1 : cap;

            arr = new int[n];
            next = new int[n];
            head = new int[k];
            tail = new int[k];

            for (int i = 0; i < n - 1; i++) {
                next[i] = i + 1;
            }
            next[n - 1] = -1;

            for (int i = 0; i < k; i++) {
                head[i] = tail[i] = -1;
            }

            free = 0;
        }

        boolean isEmpty(int i) {
            return head[i] == -1;
        }

        boolean isFull() {
            return free == -1;
        }

        void enqueue(int x, int i) throws RuntimeException {
            if (isFull()) {
                throw new RuntimeException("Queue is full");
            }

            int nextFree = next[free];

            if (isEmpty(i)) {
                head[i] = tail[i] = free;
            } else {
                next[tail[i]] = free;
                tail[i] = free;
            }
            next[free] = -1;

            arr[free] = x;

            free = nextFree;
        }

        int dequeue(int i) {
            if (isEmpty(i)) {
                return Integer.MIN_VALUE;
            }

            int headIndex = head[i];

            head[i] = next[headIndex];
            next[headIndex] = free;
            free = headIndex;

            return arr[headIndex];
        }
    }

    @Test
    public void test() {
        KQueues.Queue q = new KQueues.Queue(3, 10);

        q.enqueue(15, 2);
        q.enqueue(45, 2);

        q.enqueue(17, 1);
        q.enqueue(49, 1);
        q.enqueue(39, 1);

        q.enqueue(11, 0);
        q.enqueue(9, 0);
        q.enqueue(7, 0);

        assertEquals(15, q.dequeue(2));
        assertEquals(17, q.dequeue(1));
        assertEquals(11, q.dequeue(0));
    }
}
```

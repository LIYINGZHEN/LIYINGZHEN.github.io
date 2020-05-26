---
title:       "Stack - Implement Stack using Queues"
date:        2020-05-09T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

We are given a Queue data structure that supports standard operations like enqueue() and dequeue(). We need to implement a Stack data structure using only instances of Queue and queue operations allowed on the instances.

---

**METHOD 1 (Reorganize while pushing)**

```java
import org.junit.Test;

import java.util.LinkedList;
import java.util.Queue;

import static org.junit.Assert.assertEquals;

public class StackUsingTwoQueues {
    class Stack {
        Queue<Integer> q1;
        Queue<Integer> q2;

        Stack() {
            q1 = new LinkedList<>();
            q2 = new LinkedList<>();
        }

        void push(int ele) {
            while (!q1.isEmpty()) {
                q2.add(q1.poll());
            }
            q1.add(ele);
            while (!q2.isEmpty()) {
                q1.add(q2.poll());
            }
        }

        int pop() throws RuntimeException {
            if (q1.isEmpty()) {
                throw new RuntimeException("Stack Underflow");
            }
            return q1.poll();
        }
    }

    @Test
    public void test() {
        Stack s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);

        assertEquals(4, s.pop());
        assertEquals(3, s.pop());
        assertEquals(2, s.pop());
        assertEquals(1, s.pop());
    }
}
```

**METHOD 2 (Reorganize while popping)**

```java
import org.junit.Test;

import java.util.LinkedList;
import java.util.Queue;

import static org.junit.Assert.assertEquals;

public class StackUsingTwoQueues {
    class Stack {
        Queue<Integer> q1;
        Queue<Integer> q2;

        Stack() {
            q1 = new LinkedList<>();
            q2 = new LinkedList<>();
        }

        void push(int ele) {
            q1.add(ele);
        }

        int pop() throws RuntimeException {
            if (q1.isEmpty()) {
                throw new RuntimeException("Stack Underflow");
            }

            while (q1.size() != 1) {
                q2.add(q1.poll());
            }

            int res = q1.poll();

            // Wwap the two queues.
            Queue<Integer> q = q1;
            q1 = q2;
            q2 = q;

            return res;
        }
    }

    @Test
    public void test() {
        Stack s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);

        assertEquals(4, s.pop());
        assertEquals(3, s.pop());
        assertEquals(2, s.pop());
        assertEquals(1, s.pop());
    }
}
```

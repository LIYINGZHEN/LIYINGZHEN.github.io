---
title:       "Stack - Delete middle element of a stack"
date:        2020-05-04T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

Given a stack with push(), pop(), empty() operations, delete middle of it without using any additional data structure.

**Example:**

```
Input  : Stack[] = [1, 2, 3, 4, 5]
Output : Stack[] = [1, 2, 4, 5]

Input  : Stack[] = [1, 2, 3, 4, 5, 6]
Output : Stack[] = [1, 2, 4, 5, 6]
```

---

**METHOD 1 (Iterative)**

```java
import org.junit.Test;

import java.util.Stack;

import static org.junit.Assert.assertArrayEquals;

/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/delete-middle-element-stack/
 * Complexity : time: O(n) ; space: O(n)
 */

public class DeleteMiddleElement {
    static  void deleteMid(Stack<Integer> s) {
        int needToPop = s.size() / 2;
        Stack<Integer> temp = new Stack<>();
        while (needToPop != 0) {
            temp.push(s.pop());
            needToPop--;
        }
        if (!s.isEmpty()) {
            s.pop();
        }
        while (!temp.isEmpty()) {
            s.push(temp.pop());
        }
    }

    static int[] printStack(Stack<Integer> s) {
        int n = s.size();

        int[] result = new int[n];
        int count = 0;
        while (!s.isEmpty()) {
            result[count++] = s.pop();
        }

        return result;
    }

    @Test
    public void test() {
        Stack<Integer> st = new Stack<Integer>();

        st.push(1); // 5
        st.push(2); // 4
        st.push(3); // 3
        st.push(4); // 2
        st.push(5); // 1
        st.push(6); // 0

        deleteMid(st);

        assertArrayEquals(new int[]{6, 5, 4, 2, 1}, printStack(st));
    }
}
```

**METHOD 2 (Recursive)**

```java
import org.junit.Test;

import java.util.Stack;

import static org.junit.Assert.assertArrayEquals;

/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/delete-middle-element-stack/
 * Complexity : time: O(n) ; space: O(n)
 */

public class DeleteMiddleElement {
    static void deleteMid(Stack<Integer> s, int size, int position) {
        if (s.isEmpty() || size == position) {
            return;
        }

        int popped = s.pop();

        deleteMid(s, size, position + 1);

        if (position != size / 2) {
            s.push(popped);
        }
    }

    static int[] printStack(Stack<Integer> s) {
        int n = s.size();

        int[] result = new int[n];
        int count = 0;
        while (!s.isEmpty()) {
            result[count++] = s.pop();
        }

        return result;
    }

    @Test
    public void test() {
        Stack<Integer> st = new Stack<Integer>();

        st.push(1); // 5
        st.push(2); // 4
        st.push(3); // 3
        st.push(4); // 2
        st.push(5); // 1
        st.push(6); // 0

        deleteMid(st, st.size(), 0);

        assertArrayEquals(new int[]{6, 5, 4, 2, 1}, printStack(st));
    }
}
```

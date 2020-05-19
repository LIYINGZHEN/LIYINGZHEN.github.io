---
title:       "Stack - Largest rectangular area in a histogram"
date:        2020-05-01T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

Find the largest rectangular area possible in a given histogram where the largest rectangle can be made of a number of contiguous bars. For simplicity, assume that all bars have same width and the width is 1 unit.

For example, consider the following histogram with 7 bars of heights {6, 2, 5, 4, 5, 1, 6}. The largest possible rectangle possible is 12 (see the below figure, the max area rectangle is highlighted in red)

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/histogram1.png)

---

**METHOD 1**

```java
import org.junit.Test;

import java.util.Stack;

import static org.junit.Assert.assertEquals;

/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/largest-rectangle-under-histogram/
 * Complexity : time: O(n) ; space: O(n)
 */

public class MaximumRectangularAreas {
    static int getMaxArea(int[] arr) {
        int n = arr.length;
        Stack<Integer> s = new Stack<>();
        int[] preSmaller = new int[n];
        int[] nextSmaller = new int[n];

        for (int i = 0 ; i < n; i++) {
            int num = arr[i];
            while (!s.isEmpty() && num <= arr[s.peek()]) {
                s.pop();
            }
            preSmaller[i] = s.isEmpty() ? -1 : s.peek();
            s.push(i);
        }

        while (!s.isEmpty()) {
            s.pop();
        }

        for (int i = n - 1 ; i >= 0; i--) {
            int num = arr[i];
            while (!s.isEmpty() && num <= arr[s.peek()]) {
                s.pop();
            }
            nextSmaller[i] = s.isEmpty() ? n : s.peek();
            s.push(i);
        }

        int maxArea = 0;
        for (int i = 0; i < n; i++) {
            maxArea = Math.max(maxArea, arr[i] * (nextSmaller[i] - preSmaller[i] - 1));
        }

        return maxArea;
    }

    @Test
    public void test() {
        assertEquals(12, getMaxArea(new int[]{6, 2, 5, 4, 5, 1, 6}));
        assertEquals(10, getMaxArea(new int[]{2, 1, 5, 6, 2, 3}));
    }
}
```

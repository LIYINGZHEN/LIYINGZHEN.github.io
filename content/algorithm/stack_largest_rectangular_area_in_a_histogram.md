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

public class MaxArea {
    // Time: O(n) ; Space: O(n)
    static int findMaxArea(int[] arr) {
        int n = arr.length;

        int[] left = new int[n];
        int[] right = new int[n];

        Stack<Integer> s = new Stack<>();

        // Find previous smaller element.
        s.push(0);
        left[0] = -1;
        for (int i = 1; i < n; i++) {
            while (!s.isEmpty() && arr[s.peek()] >= arr[i]) {
                s.pop();
            }
            left[i] = s.isEmpty() ? -1 : s.peek();
            s.push(i);
        }

        while (!s.isEmpty()) {
            s.pop();
        }

        // Find next smaller element.
        s.push(n - 1);
        right[n - 1] = n;
        for (int i = n - 2; i >= 0; i--) {
            while (!s.isEmpty() && arr[s.peek()] >= arr[i]) {
                s.pop();
            }
            right[i] = s.isEmpty() ? n : s.peek();
            s.push(i);
        }

        int maxArea = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            int height = arr[i];
            maxArea = Math.max(maxArea, height * (right[i] - left[i] - 1));
        }

        return maxArea;
    }

    @Test
    public void test() {
        assertEquals(12, findMaxArea(new int[]{6, 2, 5, 4, 5, 1, 6}));
        assertEquals(10, findMaxArea(new int[]{2, 1, 5, 6, 2, 3}));
    }
}
```

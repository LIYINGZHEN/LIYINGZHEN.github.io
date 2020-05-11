---
title:       "Array - Maximum index"
date:        2020-04-17T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "array"]
---

Given an array arr[], find the maximum j – i such that arr[j] > arr[i]

**METHOD 1**

```java
package array.max;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MaximumIndex {
    // Time: O(n) ; Space: O(n)
    static int maximun(int[] arr) {
        if (arr.length == 0) {
            return -1;
        }

        int n = arr.length;
        int[] maxFromTheRight = new int[n];
        int max = Integer.MIN_VALUE;
        for (int i = n - 1; i >= 0; i--) {
            int num = arr[i];
            if (num > max) {
                max = num;
            }
            maxFromTheRight[i] = max;
        }

        int i = 0, j = 0, maxDiff = -1;
        while (i < n && j < n) {
            int num = arr[i];
            if (num < maxFromTheRight[j]) {
                maxDiff = Math.max(maxDiff, j - i);
                j++;
            } else {
                i++;
            }
        }

        return maxDiff;
    }

    @Test
    public void test() {
        assertEquals(6, maximun(new int[]{34, 8, 10, 3, 2, 80, 30, 33, 1}));
        assertEquals(8, maximun(new int[]{9, 2, 3, 4, 5, 6, 7, 8, 18, 0}));
        assertEquals(5, maximun(new int[]{1, 2, 3, 4, 5, 6}));
        assertEquals(-1, maximun(new int[]{6, 5, 4, 3, 2, 1}));
    }
}
```

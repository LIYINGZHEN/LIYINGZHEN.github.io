---
title:       "Array - Trapping rain water"
date:        2020-04-18T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "array"]
---

**METHOD 1**

```java
package array.max;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TrappingRainWater {
    static int maxWater(int[] arr) {
        if (arr.length == 0) {
            return 0;
        }

        int n = arr.length;

        int leftMax = Integer.MIN_VALUE, rightMax = Integer.MIN_VALUE;
        int l = 0, h = n - 1;
        int trap = 0;

        while (l < h) {
            if (arr[l] < arr[h]) {
                if (arr[l] > leftMax) {
                    leftMax = arr[l];
                } else {
                    trap += leftMax - arr[l];
                }
                l++;
            } else {
                if (arr[h] > rightMax) {
                    rightMax = arr[l];
                } else {
                    trap += rightMax - arr[h];
                }
                h--;
            }
        }

        return trap;
    }

    @Test
    public void test() {
        assertEquals(2, maxWater(new int[]{2, 0, 2}));
        assertEquals(7, maxWater(new int[]{3, 0, 2, 0, 4}));
        assertEquals(6, maxWater(new int[]{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}));
    }
}
```

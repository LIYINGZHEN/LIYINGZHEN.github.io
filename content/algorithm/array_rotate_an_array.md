---
title:       "Array - Rotate an array"
date:        2020-04-19T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "array"]
---

```java
public class ArrayRotation {
    // Time: O(n), Space: O(1)
    static void rotate(final int[] arr, final int d) {
        int n = arr.length;
        int rotation = d % n;
        if (rotation == 0) {
            return;
        }

        int count = 0;
        for (int start = 0; count < arr.length; start++) {
            int currIdx = start;
            int prev = arr[currIdx];
            do {
                int nextIdx = (currIdx - rotation + n) % n;
                int temp = arr[nextIdx];
                arr[nextIdx] = prev;
                prev = temp;
                count++;
                currIdx = nextIdx;
            } while (currIdx != start);
        }
    }

    public static void main(String[] args) {
        int[] arr = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
        rotate(arr, 5);
        System.out.println(Arrays.toString(arr));
    }
}
```

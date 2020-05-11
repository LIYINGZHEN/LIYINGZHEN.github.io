---
title:       "Sorting - Count inversions"
date:        2020-04-14T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "sorting"]
---

```java
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class InversionOfArray {
    static int merge(int[] arr, int l, int h) {
        int m = l + (h - l) / 2;

        int[] leftCopy = new int[m - l + 1];
        int[] rightCopy = new int[h - m];
        for (int i = 0; i < leftCopy.length; i++) {
            leftCopy[i] = arr[l + i];
        }
        for (int i = 0; i < rightCopy.length; i++) {
            rightCopy[i] = arr[m + 1 + i];
        }

        int i = 0, j = 0, k = l, count = 0;

        while (i < leftCopy.length && j < rightCopy.length) {
            if (leftCopy[i] <= rightCopy[j]) {
                arr[k++] = leftCopy[i++];
            } else {
                arr[k++] = rightCopy[j++];
                // Count how many numbers left in the left array.
                count += (m - l + 1) - i;
            }
        }
        while (i < leftCopy.length) {
            arr[k++] = leftCopy[i++];
        }
        while (j < rightCopy.length) {
            arr[k++] = rightCopy[j++];
        }

        return count;
    }

    static int mergeSort(int[] arr, int l, int h) {
        if (l >= h) {
            return 0;
        }

        int m = l + (h - l) / 2;
        int count = 0;
        count += mergeSort(arr, l, m);
        count += mergeSort(arr, m + 1, h);

        return count + merge(arr, l, h);
    }

    static int count(int[] arr) {
        return mergeSort(arr, 0, arr.length - 1);
    }

    @Test
    public void test() {
        assertEquals(6, count(new int[]{8, 4, 2, 1}));
        assertEquals(5, count(new int[]{1, 20, 6, 4, 5}));
    }
}
```

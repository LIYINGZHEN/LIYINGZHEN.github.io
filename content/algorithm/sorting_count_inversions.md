---
title:       "Sorting - Count inversions"
date:        2020-04-13T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "sorting"]
---

Inversion Count for an array indicates – how far (or close) the array is from being sorted. If array is already sorted then inversion count is 0. If array is sorted in reverse order that inversion count is the maximum.

Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j

```
Example:

Input: arr[] = {8, 4, 2, 1}
Output: 6

Explanation: Given array has six inversions: (8,4), (4,2),(8,2), (8,1), (4,1), (2,1).

Input: arr[] = {3, 1, 2}
Output: 2

Explanation: Given array has two inversions: (3, 1), (3, 2)
```

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

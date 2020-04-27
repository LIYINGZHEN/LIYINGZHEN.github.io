---
title:       "[Array] Count Inversions"
date:        2020-04-21T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "array"]
---

```java
public class CountInversions {
    static int merge(int[] arr, int l, int h) {
        if (l >= h) {
            return 0;
        }

        int m = l + (h - l) / 2;
        int[] left = new int[m - l + 1];
        int[] right = new int[h - m];
        for (int i = 0; i < left.length; i++) {
            left[i] = arr[l + i];
        }
        for (int i = 0; i < right.length; i++) {
            right[i] = arr[m + 1 + i];
        }

        int i = 0, j = 0, k = l, count = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
                count += (m + 1) - (l + i);
            }
        }
        while (i < left.length) {
            arr[k++] = left[i++];
        }
        while (j < right.length) {
            arr[k++] = right[j++];
        }

        return count;
    }

    static int mergeSort(int[] arr, int l, int h) {
        if (l >= h) {
            return 0;
        }

        int m = l + (h - l) / 2;
        int left = mergeSort(arr, l , m);
        int right = mergeSort(arr, m + 1, h);

        return left + right + merge(arr, l, h);
    }

    public static void main(String[] args) {
        int[] arr = { 1, 20, 6, 4, 5 };
        System.out.println(mergeSort(arr, 0, arr.length - 1));
    }
}
```

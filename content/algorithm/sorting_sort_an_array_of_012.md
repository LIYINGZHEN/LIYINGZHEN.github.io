---
title:       "Sorting - Sort an array of 0s, 1s and 2s"
date:        2020-04-14T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "sorting"]
---

Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

Examples:

```
Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}

Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
```

**METHOD 1**

```java
public class Sort012 {
    static void swap(int[] arr, int a, int b) {
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    static void sort012(int[] arr) {
        if (arr.length == 0) {
            return;
        }

        int i = 0, j = 0, k = arr.length - 1;

        while (j <= k) {
            if (arr[j] == 0) {
                swap(arr, i, j);
                i++;
                j++;
            } else if (arr[j] == 1) {
                j++;
            } else if (arr[j] == 2) {
                swap(arr, j, k);
                k--;
            }
        }
    }

    static void printArray(int[] arr) {
        if (arr.length == 0) {
            return;
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.printf("%s ", arr[i]);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int arr[] = { 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 };
        sort012(arr);
        System.out.println("Array after segregation ");
        printArray(arr);
    }
}
```

---
title:       "Array - Rearrange an array such that arr[i] = i"
date:        2020-04-17T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "array"]
---

Given an array of elements of length N, ranging from 0 to N – 1. All elements may not be present in the array. If element is not present then there will be -1 present in the array. Rearrange the array such that A[i] = i and if i is not present, display -1 at that place.

**Examples:**

```
Input : arr = {-1, -1, 6, 1, 9, 3, 2, -1, 4, -1}
Output : [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]

Input : arr = {19, 7, 0, 3, 18, 15, 12, 6, 1, 8,
              11, 10, 9, 5, 13, 16, 2, 14, 17, 4}
Output : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
         11, 12, 13, 14, 15, 16, 17, 18, 19]
```

---

**METHOD 1**

```java
import java.lang.reflect.Array;
import java.util.Arrays;

public class RearrangeAnArray {
    public static void rearrange(int[] arr) {
        if (arr == null || arr.length == 0) {
            return;
        }

        int n = arr.length;

        for (int i = 0; i < n; i++) {
            int number = arr[i] % n;
            if (number >= 0) {
                if (arr[number] < 0) {
                    arr[number] -= n;
                } else {
                    arr[number] += n;
                }
            }
        }

        for (int i = 0; i < n; i++) {
            arr[i] /= n;
        }

        for (int i = 0; i < n; i++) {
            if (arr[i] == 1 || arr[i] == -1) {
                arr[i] = i;
            } else {
                arr[i] = -1;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = new int[]{0, 2, -1, 4, 1};
        rearrange(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```

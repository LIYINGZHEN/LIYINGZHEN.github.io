---
title:       "Find Pair In a Sorted Rotated Array"
date:        2020-04-20T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "array"]
---

```java
public class PairsInSortedRotated {
    // Time: O(n), Space: O(1)
    static void findPair(int[] arr, int target) {
        if (arr.length == 0) {
            return;
        }

        int n = arr.length;

        int pivot = n - 1;
        for (int i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                pivot = i;
                break;
            }
        }

        int l = (pivot + 1) % n;
        int h = pivot;

        while (l != h) {
            int sum = arr[l] + arr[h];
            if (sum == target) {
                System.out.printf("(%s, %s) ", arr[l], arr[h]);
                if (l == (h - 1 + n) % n) {
                    break;
                }
                h = (h - 1 + n) % n;
                l = (l + 1) % n;
            } else if (sum > target) {
                h = (h - 1 + n) % n;
            } else {
                l = (l + 1) % n;
            }
        }
    }

    public static void main(String[] args) {
        int arr[] = {11, 15, 6, 7, 9, 10};
        int target = 16;
        findPair(arr, target);
    }
}
```

---
title:       "Queue - Generate binary number"
date:        2020-06-01T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "queue"]
---

Given a number n, write a function that generates and prints all binary numbers with decimal values from 1 to n.

**Examples:**

```
Input: n = 2
Output: 1, 10

Input: n = 5
Output: 1, 10, 11, 100, 101
```

---

**METHOD 1**

```java
import org.junit.Test;

import java.util.LinkedList;
import java.util.Queue;

/**
 * Question   : https://www.geeksforgeeks.org/interesting-method-generate-binary-numbers-1-n/
 * Complexity : Time: O(n) ; Space: O(n)
 * Author     : Max
 */
public class GenerateBinaryNumbers {
    static void generate(int n) {
        Queue<String> q = new LinkedList<>();
        q.add("1");
        while(n > 0) {
            String s1 = q.remove();

            System.out.println(s1);

            q.add(s1 + "0");

            q.add(s1 + "1");

            n--;
        }
    }

    @Test
    public void test() {
        int n = 10;
        generate(n);
    }
}
```

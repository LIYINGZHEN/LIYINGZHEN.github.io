---
title:       "Stack - Implement Stack using Queues"
date:        2020-05-08T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

Given a pattern containing only I’s and D’s. I for increasing and D for decreasing. Devise an algorithm to print the minimum number following that pattern. Digits from 1-9 and digits can’t repeat.

**Examples:**

```
Input: D        Output: 21
Input: I        Output: 12
Input: DD       Output: 321
Input: II       Output: 123
Input: DIDI     Output: 21435
Input: IIDDD    Output: 126543
Input: DDIDDIID Output: 321654798
```

---

**METHOD 1**

```java
import org.junit.Test;

import java.util.Stack;

import static org.junit.Assert.assertEquals;

/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/form-minimum-number-from-given-sequence/
 * Complexity : time: O(n) ; space: O(n)
 */

public class FormMinimumNumberFromGivenSequence {
    static String getMinimumNumber(String exp) {
        Stack<Integer> s = new Stack<>();
        char[] charArr = exp.toCharArray();
        StringBuilder result = new StringBuilder();

        for (int i = 0; i <= charArr.length; i++) {
            s.push(i + 1);
            if (i == charArr.length || charArr[i] == 'I') {
                while (!s.empty()) {
                    result.append(s.pop());
                }
            }
        }

        return result.toString();
    }

    @Test
    public void test() {
        assertEquals("13254", getMinimumNumber("IDID"));
        assertEquals("12", getMinimumNumber("I"));
        assertEquals("21", getMinimumNumber("D"));
        assertEquals("126543", getMinimumNumber("IIDDD"));
        assertEquals("321654798", getMinimumNumber("DDIDDIID"));

    }
}
```

---
title:       "Stack - Evaluation of Postfix Expression"
date:        2020-04-30T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

Evaluation of Postfix Expression.

**METHOD 1**

```java
import org.junit.Test;

import java.util.Stack;

import static org.junit.Assert.assertEquals;

/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/stack-set-4-evaluation-postfix-expression/
 * Complexity : time: O(n) ; space: O(n)
 */

public class EvaluationOfPostfixExpression {
    static int evaluatePostfix(String exp) {
        char[] charArr = exp.toCharArray();

        Stack<Integer> s = new Stack<>();

        for (int i = 0; i < charArr.length; i++) {
            char c = charArr[i];

            if (Character.isDigit(c)) {
                s.push(c - '0');
            } else {
                int val1 = s.pop();
                int val2 = s.pop();

                switch(c) {
                    case '+':
                        s.push(val2+val1);
                        break;
                    case '-':
                        s.push(val2- val1);
                        break;
                    case '/':
                        s.push(val2/val1);
                        break;
                    case '*':
                        s.push(val2*val1);
                        break;
                }
            }
        }
        return s.pop();
    }

    @Test
    public void test() {
        String exp = "231*+9-";
        assertEquals(-4, evaluatePostfix(exp));
    }
}
```

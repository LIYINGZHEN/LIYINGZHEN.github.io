---
title:       "Stack - Check for balanced parentheses"
date:        2020-04-27T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

```java
public class BalancedParen {
    static boolean isPair(char a, char b) {
        if (a == '(' && b == ')' || a == '[' && b == ']' || a == '{' && b == '}') {
            return true;
        }
        return false;
    }

    static boolean isBalance(char[] arr) {
        if (arr.length == 0) {
            return true;
        }

        Stack<Character> temp = new Stack<>();

        for (int i = 0; i < arr.length; i++) {
            char data = arr[i];
            if (data == '(' || data == '[' || data == '{') {
                temp.push(data);
            } else {
                if (temp.isEmpty()) {
                    return false;
                }
                if (!isPair(temp.peek(), data)) {
                    return false;
                }
                temp.pop();
            }
        }

        return temp.isEmpty();
    }

    public static void main(String[] args) {
        char[] arr = {'{','(',')','}','[',']'};
        if (isBalance(arr))  {
            System.out.println("Balanced ");
        } else {
            System.out.println("Not Balanced ");
        }
    }
}
```

---
title:       "Recursion - Tower of hanoi"
date:        2020-04-11T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "recursion"]
---

The Tower of Hanoi is a mathematical game or puzzle. It consists of three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
3. No larger disk may be placed on top of a smaller disk.

With 3 disks, the puzzle can be solved in 7 moves. The minimal number of moves required to solve a Tower of Hanoi puzzle is 2n − 1, where n is the number of disks.

---

**METHOD 1**

```java
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TowerOfHanoi {
    // Time: O(2^n)
    static int towerOfHanoi(int n, char from, char to, char aux) {
        if (n == 0) {
            return 0;
        }
        int count = towerOfHanoi(n - 1, from, aux, to);
        count++;
        count += towerOfHanoi(n - 1, aux, to, from);

        return count;
    }

    @Test
    public void test() {
        assertEquals(31, towerOfHanoi(5, 'A', 'B', 'C'));
        assertEquals(255, towerOfHanoi(8, 'A', 'B', 'C'));
    }
}
```

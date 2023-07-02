# What is Big O

- Big O is a way to categorize your altorithms time or memory requirements based on input.
- Is not meant to be an exact measurement
- It will not tell you how many CPU cycle it takes

> Instead it is meant to generalize the growth of your altorithm

**Why do we use it?**

Often it will help us make decisions about what data structures and algorithms to use. Knowing how they will perform can greatly help create the best possible program out there.


**Important concepts**

1. Growth is with respect to the input
2. Constanst are dropped
3. Worst case is *usuallly* the way we measure

### Common complexities

<img src="https://he-s3.s3.amazonaws.com/media/uploads/ece920b.png" />

[Source](https://www.hackerearth.com/practice/notes/big-o-cheatsheet-series-data-structures-and-algorithms-with-thier-complexities-1/)


### Examples

**O(N^2)**

```typescript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      sum += charChode;
    }
  }

  return sum;
}
```

---

**O(n log n)**

- Quicksort (will be implemented)

---

**O(log n)**

- Binary search trees

---
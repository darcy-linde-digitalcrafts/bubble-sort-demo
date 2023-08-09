# Bubble Sort Demo

Bubble Sort is a simple and straightforward sorting algorithm that repeatedly
steps through the list, compares adjacent elements, and swaps them if they are
in the wrong order.

These passes through the list are repeated until no swaps had to be performed
during a pass, meaning that the list has become fully sorted (optional).

The algorithm gets its name from the way smaller elements "bubble" to the top of
the list while larger elements "sink" to the bottom.

## Steps

1. Start with an unsorted list of elements.
2. Compare the first two elements of the list. If the first element is greater
   than the second element (i.e., they are in the wrong order), swap them.
3. Move to the next pair of elements (the second and third elements) and compare
   them. Again, swap them if they are in the wrong order.
4. Continue this process, comparing and swapping adjacent elements until you
   reach the end of the list. At this point, the largest element has "bubbled"
   to the last position.
5. Now, the last element of the list is in its correct sorted position. Repeat
   steps 2 to 4 for the remaining elements of the list, excluding the last one
   since it is already sorted.
6. Keep repeating steps 2 to 5 until the entire list is sorted.

### Properties

- **Simple**
- Efficient for very small data sets.
- **Adaptive**: Efficient for data sets that are already substantially sorted.
- **Stable**: does not change the relative order of elements with equal keys.
- **In-place**: only requires a constant amount O(1) of memory space.
- **Comparison-based**

---

Algorithm:

```text
For I = 0 to N - 1
  For J = 0 to N - 1 - I
    If (A[J] > A [J + 1])
      Temp = A[J]
      A[J] = A[J + 1]
      A[J + 1] = Temp
    End-If
  End-For
End-For
```

## [Time Complexity](https://en.wikipedia.org/wiki/Bubble_sort#Performance)

| Scenario | Big O |
| -------- | ----- |
| Worst    | O(n²) |
| Average  | O(n²) |
| Best     | O(n)  |

Bubble Sort has a time complexity of O(n²) in the worst and average cases, and
O(n) in the best case when the list is already sorted.

Interesting aside on [gauss's summation](https://letstalkscience.ca/educational-resources/backgrounders/gauss-summation).\
This arithmetic series shows why `n + n-1 + n-2 ... + 1` is n² time complexity.

## Space Complexity

Bubble sort is an in-place algorithm, which gives it a space complexity of **O(1)**.

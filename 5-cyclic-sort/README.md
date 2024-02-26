# Cyclic sort


Cyclic sort is a sorting algorithm that is efficient for placing elements in their correct positions in an array when the elements are in the range from 1 to n.

```js
function cyclicSort(nums) {
    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            // Swap nums[i] with nums[correctIndex]
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }
    return nums;
}

// Example usage:
const arr = [3, 1, 5, 4, 2];
console.log("Sorted array:", cyclicSort(arr)); // Output: Sorted array: [1, 2, 3, 4, 5]
```

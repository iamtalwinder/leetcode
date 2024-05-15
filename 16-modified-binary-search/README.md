1. First element greater than target
2. First element smaller than target
3. First & last occuance of the target


1. For rotated array check which part is sorted and see if it fit in sorted range


# Review 
34
1095


```js
function firstElementGreaterThanTarget(nums, target) {
  let low = 0, high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid -1;
    }
  }

  return low;
}
```

```js
function firstElementSmallerThanTarget(nums, target) {
  let low = 0, high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
}
```

```js
function firstOccurrence(nums, target) {
  let low = 0, high = nums.length - 1, result = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      result = mid;
    }

    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}
```

```js
function lastOccurrence(nums, target) {
  let low = 0, high = nums.length - 1, result = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      result = mid;
    }

    if (nums[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}
```
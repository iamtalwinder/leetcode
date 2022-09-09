function removeDuplicates(nums: number[]) {
  let k = 1;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
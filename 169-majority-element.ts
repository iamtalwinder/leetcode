function majorityElement(nums: number[]): number {
  let num = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (num === nums[i]) {
      count++;
    } else {
      count--;
      if (count === 0) {
        num = nums[i];
        count = 1;
      }
    }
  }

  return num;
};
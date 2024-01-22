/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxGlobal = nums[0], max = nums[0], min = nums[0];

  for (let i = 1; i < nums.length; i++) {
      const current = nums[i];
      let tempMax = Math.max(current, current * max, current * min);
      min = Math.min(current, current * max, current * min);
      max = tempMax;

      maxGlobal = Math.max(maxGlobal, max);
  }

  return maxGlobal;
};
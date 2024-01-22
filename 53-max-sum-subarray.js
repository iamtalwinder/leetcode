/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  let max = nums[0], maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
      max = Math.max(nums[i], max + nums[i]);
      maxGlobal = Math.max(maxGlobal, max);
  }

  return maxGlobal;
};
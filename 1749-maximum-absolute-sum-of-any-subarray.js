/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
  let max = nums[0], globalMax = nums[0];
  let min = nums[0], globalMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
      max = Math.max(nums[i], max + nums[i]);
      globalMax = Math.max(max, globalMax);

      min = Math.min(nums[i], min + nums[i]);
      globalMin = Math.min(min, globalMin);
  }


  return Math.max(Math.abs(globalMax), Math.abs(globalMin));
};

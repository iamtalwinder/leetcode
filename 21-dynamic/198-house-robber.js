/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const result = new Array(nums.length + 2).fill(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = Math.max(nums[i] + result[i + 2], result[i + 1]);
  }

  return result[0];
};

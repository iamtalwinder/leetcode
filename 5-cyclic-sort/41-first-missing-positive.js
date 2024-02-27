/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  cyclicSort(nums);

  let i = 0;

  while (i < nums.length) {
      if (i !== nums[i] - 1) {
          return i + 1;
      }
      i++;
  }

  return i + 1;
};


var cyclicSort = function (nums) {
  let i = 0;

  while (i < nums.length) {
      const correctIndex = nums[i] - 1;

      if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[correctIndex]) {
          [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      } else {
          i++;
      }
  }
}

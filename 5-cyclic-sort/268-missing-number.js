/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  cyclicSort(nums);

  let i = 0;

  while (i < nums.length) {
      if (i !== nums[i]) {
          return i;
      }
      i++;
  }

  return i;
};


var cyclicSort = function (nums) {
  let i = 0;

  while (i < nums.length) {
      const correctIndex = nums[i];

      if (nums[i] !== nums[correctIndex]) {
          [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
      } else {
          i++;
      }
  }
};

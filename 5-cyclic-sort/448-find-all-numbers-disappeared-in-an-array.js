/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const result = [];
  cyclicSort(nums);

  let i = 0;

  while (i < nums.length) {
      if (i !== nums[i] - 1) {
          result.push(i + 1);
      }
      i++;
  }

  return result;
};

var cyclicSort = function (nums) {
  let i = 0;

  while (i < nums.length) {
      const correctIndex = nums[i] - 1;

      if (nums[i] !== nums[correctIndex]) {
          [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      } else {
          i++;
      }
  }
}

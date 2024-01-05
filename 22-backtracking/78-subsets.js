/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];

  function generateSubsets(subset, index) {
      result.push(subset.slice());

      for (let i = index; i < nums.length; i++) {
          subset.push(nums[i]);
          generateSubsets(subset, i + 1);
          subset.pop();
      }
  }

  generateSubsets([], 0);
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const result = Array(nums.length);

  let start = 0, end = 0;

  for (let i = nums.length; i >= 0; i--) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      result[i] = nums[start] ** 2;
      start++;
    } else {
      result[end] = nums[end] ** 2;
      end--;
    }
  }
  
  return result;
}
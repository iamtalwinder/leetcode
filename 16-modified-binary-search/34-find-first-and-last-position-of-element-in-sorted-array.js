/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [lowerBound(nums, target), upperBound(nums, target)]
};

function lowerBound(nums, target) {

  let low = 0, high = nums.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return nums[low] === target ? low : -1;
}


function upperBound(nums, target) {

  let low = 0, high = nums.length - 1;

  while (low < high) {
    const mid = Math.ceil((low + high) / 2);

    if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }

  return nums[low] === target ? low : -1;
} 
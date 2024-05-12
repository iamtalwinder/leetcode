/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  function sum(i, even) {
    if (i === nums.length) {
      return 0;
    }

    let total = even ? nums[i] : -1 * nums[i];

    return Math.max(total + sum(i + 1, !even), sum(i + 1, even));
  }

  return sum(0, true);
};
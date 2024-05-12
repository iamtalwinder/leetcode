/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {

  if (nums.length === 1 && nums[0] % 3 !== 0) {
    return 0;
  }

  function max(i) {
    if (i === nums.length - 1) {
        return nums[i];
    }

    let include = nums[i] + max(i + 1), exclude = max(i + 1);

    if (include % 3 !== 0) {
      include = 0;
    }

    if (exclude % 3 !== 0) {
      exclude = 0;
    }

    return Math.max(include, exclude);
  }

  return max(0)
};

const nums = [1,8]

console.log(maxSumDivThree(nums));


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  const dp = new Array(3).fill(0);

  for (const num of nums) {     
      for (const sum of dp.slice()) {
          const newSum = num + sum;
          dp[newSum % 3] = Math.max(dp[newSum % 3], newSum);
      }
  }

  return dp[0];
};
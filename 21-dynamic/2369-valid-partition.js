/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function (nums) {
  const dp = new Array(nums.length).fill(false);

  dp[1] = validSequence(0, 1);
  dp[2] = validSequence(0, 2);

  function validSequence(start, end) {
    if (end >= nums.length || start === 1) {
      return false;
    }

    if (end - start === 1 && nums[start] === nums[end]) {
      return true;
    }

    if (end - start === 2) {

      if (nums[start] === nums[start + 1] && nums[start] === nums[start + 2]) {
        return true;
      }

      if (nums[start] + 1 === nums[start + 1] && nums[start] + 2 === nums[start + 2]) {
        return true;
      }
    }

    return false;
  }

  for (let i = 3; i < nums.length; i++) {
    dp[i] = dp[i - 2] && validSequence(i - 1, i) || dp[i - 3] && validSequence(i - 2, i);
  }

  return dp[nums.length - 1];
};

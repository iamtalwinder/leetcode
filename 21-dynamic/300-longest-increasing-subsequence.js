/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

  const memo = new Map();

  function longestSub(index, last) {
    const key = `${index}-${last}`;

    if (memo.has(key)) {
      return memo.get(key);
    }

    let include = 0, exclude = 0;

    if (index >= nums.length) {
      return 0;
    }

    if (last < nums[index]) {
      include = 1 + longestSub(index + 1, nums[index]);
    }

    exclude = longestSub(index + 1, last);

    const result = Math.max(include, exclude);
    memo.set(key, result);

    return result;
  }

  return longestSub(0, Number.NEGATIVE_INFINITY);
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLISdp = function (nums) {

  if (!nums.length) {
    return 0;
  }

  let maxLength = 1;

  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        console.log(dp)
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLength = Math.max(dp[i], maxLength);
  }

  return maxLength;
};

lengthOfLISdp([10,9,2,5,3,7,101,18])
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {

  const memo = new Map();

  function maxScore(s, e) {
    const key = `${s}-${e}`;

    if (s === e) {
      return nums[s];
    }

    if (memo.has(key)) {
      return memo.get(key);
    }


    const pickStart = nums[s] - maxScore(s + 1, e);
    const pickEnd = nums[e] - maxScore(s, e - 1);

    const result = Math.max(pickStart, pickEnd);
    memo.set(key, result);

    return result;
  }


  return maxScore(0, nums.length - 1) >= 0;
};
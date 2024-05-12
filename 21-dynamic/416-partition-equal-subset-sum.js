// Memo

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const target = nums.reduce((acc, num) => acc + num) / 2;
  const memo = new Map();

  function helper(sum, index) {
    if (sum === target) {
      return true;
    }

    if (sum > target || index >= nums.length) {
      return false;
    }

    const key = `${index}-${sum}`;

    if (memo.has(key)) {
      return memo.get(key);
    }

    if (helper(sum + nums[index], index + 1)) {
      memo.set(key, true);
      return true;
    }

    const result = helper(sum, index + 1);
    memo.set(key, result);
    return result;
  }

  return helper(0, 0);
};

// DP

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const target = nums.reduce((acc, num) => acc + num) / 2;
  let set = new Set();

  set.add(0);

  for (const num of nums) {
    const newSet = new Set()
    for (const setNum of set) {
      if (setNum + num === target) {
        return true;
      }
      newSet.add(setNum);
      newSet.add(num + setNum);
    }
    set = newSet;
  }

  return false;
};


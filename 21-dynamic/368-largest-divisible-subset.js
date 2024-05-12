// Backtrack solution O(2**N)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  let maxSubset = [];

  function validSubset(subset, num) {
    return subset.reduce(
      (acc, subsetNum) => acc && (subsetNum % num === 0 || num % subsetNum === 0),
      true
    );
  }

  function backtrack(currentSubset, i) {
    if (currentSubset.length > maxSubset.length) {
      maxSubset = currentSubset.slice();
    }

    if (i >= nums.length) {
      return;
    }

    const num = nums[i];

    if (validSubset(currentSubset, num)) {
      currentSubset.push(num)
      backtrack(currentSubset, i + 1);
      currentSubset.pop();
    }

    backtrack(currentSubset, i + 1);
  }

  backtrack([], 0)

  return maxSubset;
};

// Memo O(n**2)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {

  nums.sort((a, b) => a - b);

  const memo = new Map();

  function dfs(i, prev) {
    if (i >= nums.length) {
      return []
    }

    const key = `${i}-${prev}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let result = dfs(i + 1, prev);

    if (nums[i] % prev === 0) {
      const temp = dfs(i + 1, nums[i]);

      if (temp.length + 1 > result.length) {
        result = [nums[i], ...temp];
      }
    }

    memo.set(key, result);

    return result;
  }

  return dfs(0, 1)
};

// Optimized memo
// Time O(n**2)
// Space O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {

  nums.sort((a, b) => a - b);

  const memo = new Map();

  function dfs(i) {
    if (i >= nums.length) {
      return []
    }

    const key = i;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let result = [nums[i]];

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] % nums[i] === 0) {
        const temp = dfs(j);

        if (temp.length + 1 > result.length) {
          result = [nums[i], ...temp];
        }
      }
    }

    memo.set(key, result);

    return result;
  }

  let result = []

  for (let i = 0; i < nums.length; i++) {
    const temp = dfs(i);

    if (temp.length > result.length) {
      result = temp;
    }
  }

  return result;
};

// DP

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b);

  const dp = nums.map(num => [num]);

  let result = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] % nums[i] === 0) {
        const temp = dp[j];

        if (temp.length + 1 > dp[i].length) {
          dp[i] = [nums[i], ...temp];
        }
      }
    }

    if (result.length < dp[i].length) {
      result = dp[i];
    }
  }

  return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function (nums, k) {
  const n = nums.length;
  const memo = new Map();

  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  function dfs(start, k) {
    const key = `${start}-${k}`;

    if (memo.has(key)) {
      return memo.get(key);
    }

    if (start >= n) {
      return 0;
    }

    if (k === 1) {
      return (prefixSum[n] - prefixSum[start]) / (n - start);
    }

    let currentSum = 0;
    let maxAvg = 0;

    for (let end = start; end < n - k + 1; end++) {
      currentSum += nums[end];
      const avg = currentSum / (end - start + 1);
      maxAvg = Math.max(maxAvg, avg + dfs(end + 1, k - 1));
    }

    memo.set(key, maxAvg);
    return maxAvg;
  }


  return dfs(0, k);
};

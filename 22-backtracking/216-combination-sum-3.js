/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = [];

  function backtrack(path, target, num) {
      if (target === 0 && path.length === k) {
          result.push(path.slice());
          return;
      }

      if (path.length >= k) {
          return;
      }

      for (let i = num; i <= 9; i++) {
          if (target - i >= 0) {
              path.push(i);
              backtrack(path, target - i, i + 1);
              path.pop();
          }
      }
  }

  backtrack([], n, 1)

  return result;
};
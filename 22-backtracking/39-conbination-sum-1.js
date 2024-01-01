/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];
  function backtrack(path, target, index) {
      if (target === 0) {
          result.push(path.slice());
          return;
      }

      for (let i = index; i < candidates.length; i++) {
          if (target - candidates[i] >= 0) {
              path.push(candidates[i]);
              backtrack(path, target - candidates[i], i);
              path.pop();
          }
      }
  }

  backtrack([], target, 0);
  return result;
};
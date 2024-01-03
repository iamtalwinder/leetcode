/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = [];

  candidates.sort((a, b) => a - b);

  function backtrack(path, target, index) {
      if (target === 0) {
          result.push(path.slice());
          return;
      }

      for (let i = index; i < candidates.length; i++) {
          if (i > index && candidates[i] === candidates[i - 1]) {
              continue;
          }
          
          if (target - candidates[i] >= 0) {
              path.push(candidates[i]);
              backtrack(path, target - candidates[i], i + 1);
              path.pop();
          }
      }
  }

  backtrack([], target, 0);
  return result;
};
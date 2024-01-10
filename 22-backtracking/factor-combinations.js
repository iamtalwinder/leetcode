/**
 * @param {number[]} num
 * @return {number[][]}
 */
var factorCombinations = function(num) {
  const result = [];

  function backtrack(path, target, start) {
    if (target === 1) {
      result.push(path.slice());
      return;
    }

    for (let i = start; i < num; i++) {
      const newTarget = target / i;
      if (newTarget >= 0 && newTarget % 1 === 0) {
        path.push(i);
        backtrack(path, newTarget, i);
        path.pop();
      }
    }
  }

  backtrack([], num, 2);
  return result;
};

console.log(factorCombinations(8));
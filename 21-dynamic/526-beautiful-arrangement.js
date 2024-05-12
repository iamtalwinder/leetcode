/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  let result = 0;
  const used = new Array(n + 1).fill(false);

  function backtrack(index) {
    if (index === n + 1) {
      result++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (used[i]) {
        continue;
      }

      if (index % i === 0 || i % index === 0) {
        used[i] = true;
        backtrack(index + 1);
        used[i] = false;
      }

    }
  }

  backtrack(1);

  return result;
};
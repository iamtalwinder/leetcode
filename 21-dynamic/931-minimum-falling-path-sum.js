/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const memo = new Map();
  function helper(row, col) {
    const key = `${row}-${col}`;

    if (row >= matrix.length) {
      return 0;
    }

    if (col >= matrix.length || col < 0) {
      return Number.POSITIVE_INFINITY;
    }

    if (memo.has(key)) {
      return memo.get(key);
    }

    const result = matrix[row][col] + Math.min(
      helper(row + 1, col - 1),
      helper(row + 1, col),
      helper(row + 1, col + 1)
    );

    memo.set(key, result);
    return result;
  }

  return Math.min(
    ...matrix[0].map((ele, col) => helper(0, col)),
  );
};

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum2 = function (matrix) {
  const n = matrix.length;

  const memo = Array.from({ length: n + 1 }, () => Array(n + 2).fill(Number.POSITIVE_INFINITY));

  for (let col = 0; col < n + 2; col++) {
    memo[n][col] = 0;
  }

  for (let row = n - 1; row >= 0; row--) {
    for (let col = n; col >= 1; col--) {
      memo[row][col] = matrix[row][col - 1] + Math.min(
        memo[row + 1][col - 1],
        memo[row + 1][col],
        memo[row + 1][col + 1]
      );
    }
  }

  return Math.min(...memo[0].slice(1, n + 1));
};

const matrix = [[2, 1, 3], [6, 5, 4], [7, 8, 9]];

console.log(minFallingPathSum2(matrix));
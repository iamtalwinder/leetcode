
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const memo = new Map();

  function minOperation(i, j) {
    const key = `${i}-${j}`;

    if (i === word1.length) {
      return word2.length - j;
    }

    if (j === word2.length) {
      return word1.length - i;
    }

    if (memo.has(key)) {
      return memo.get(key);
    }

    if (word1[i] === word2[j]) {
      return minOperation(i + 1, j + 1);
    }

    const result = Math.min(
      1 + minOperation(i, j + 1),
      1 + minOperation(i + 1, j),
      1 + minOperation(i + 1, j + 1)
    );

    memo.set(key, result);
    return result;
  }

  return minOperation(0, 0);
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][n] = m - i;
  }

  for (let j = 0; j <= n; j++) {
    dp[m][j] = n - j;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.min(
          1 + dp[i][j + 1],
          1 + dp[i + 1][j],
          1 + dp[i + 1][j + 1]
        );
      }
    }
  }

  return dp[0][0];
};

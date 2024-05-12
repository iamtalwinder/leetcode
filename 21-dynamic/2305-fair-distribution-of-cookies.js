/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
  const childCookieDistribution = Array(k).fill(0);

  let minimumUnfairness = Number.POSITIVE_INFINITY;

  function dfs(i) {
    if (i === cookies.length) {
      minimumUnfairness = Math.min(minimumUnfairness, Math.max(...childCookieDistribution));
      return;
    }

    for (let j = 0; j < k; j++) {
      if (childCookieDistribution[j] + cookies[i] >= minimumUnfairness ||
        (j > 0 && childCookieDistribution[j] === childCookieDistribution[j - 1])
      ) {
        continue;
      }

      childCookieDistribution[j] += cookies[i];
      dfs(i + 1);
      childCookieDistribution[j] -= cookies[i];
    }
  }

  dfs(0);

  return minimumUnfairness;
};
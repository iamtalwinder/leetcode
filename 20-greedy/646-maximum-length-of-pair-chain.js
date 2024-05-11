/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((pair1, pair2) => pair1[1] - pair2[1]);

  let currentEnd = Number.NEGATIVE_INFINITY;
  let maxLength = 0;

  pairs.forEach(pair => {
    if (currentEnd < pair[0]) {
      currentEnd = pair[1];
      maxLength++
    }
  });

  return maxLength;
};
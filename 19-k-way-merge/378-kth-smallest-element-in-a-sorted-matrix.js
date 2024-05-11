/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  let left = matrix[0][0], right = matrix[n - 1][n - 1];

  while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (countLessThanEqual(matrix, mid) < k) {
          left = mid + 1;
      } else {
          right = mid
      }
  }

  return left;
};

var countLessThanEqual = function (matrix, mid) {
  const n = matrix.length;
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
      let left = 0, right = n;

      while (left < right) {
          const midIndex = Math.floor((left + right) / 2);

          if (matrix[i][midIndex] <= mid) {
              left = midIndex + 1;
          } else {
              right = midIndex;
          }
      }

      count += left;
  }

  return count;
};
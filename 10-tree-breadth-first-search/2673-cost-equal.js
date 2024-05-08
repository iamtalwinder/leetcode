/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function (n, cost) {

  let totalIncrement = 0;

  function leftChild(i) {
      return 2 * i;
  }

  function rightChild(i) {
      return 2 * i + 1;
  }

  function maxCost(node) {
      if (node > n) {
          return 0;
      }

      const left = leftChild(node);
      const right = rightChild(node);

      const leftCost = maxCost(left);
      const rightCost = maxCost(right);

      totalIncrement += Math.abs(leftCost - rightCost);

      return cost[node - 1] + Math.max(leftCost, rightCost);
  }

  maxCost(1);

  return totalIncrement;
};
console.log(minIncrements(7, [5, 8, 10, 14, 17, 19, 27]))
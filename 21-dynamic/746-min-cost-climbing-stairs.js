/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const climbCost = Array(n).fill(0);

  for (let i = 0; i < climbCost.length; i++) {
    console.log(climbCost)
      if (i < 2) {
          climbCost[i] = cost[i];
      } else {
          climbCost[i] = cost[i] + Math.min(climbCost[i - 1], climbCost[i - 2]);
      }
  }
  console.log(climbCost)

  return Math.min(climbCost[n - 1], climbCost[n - 2]);
};


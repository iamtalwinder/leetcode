/**
 * @param {number[]} weights
 * @param {number[]} profits
 * @param {number} capacity
 * @return {number}
 */

function knapSack(weights, profits, capacity) {
  function helper(position, capacityLeft, memo = new Map()) {

    const key = getKey(position, capacityLeft);

    if (memo.has(key)) {
      return memo.get(key);
    }

    if (position === 0 || capacityLeft === 0) {
      return 0;
    }

    let result;

    if (weights[position] > capacityLeft) {
      result = helper(position - 1, capacityLeft, memo);
    } else {
      result = Math.max(
        helper(position - 1, capacityLeft, memo),
        profits[position] + helper(position - 1, capacityLeft - weights[position], memo)
      );
    }

    memo.set(key, result);
    return result;
  }

  return helper(profits.length - 1, capacity);
}


function getKey(num1, num2) {
  return num1 + num2 + '';
}

console.log(knapSack([4, 5, 1], [1, 2, 3], 4));

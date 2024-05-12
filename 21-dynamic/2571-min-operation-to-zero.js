/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let operations = 0;

  while (n > 0) {
    if (n & (n - 1) === 0) {
      operations++;
      break;
    }
    n = Math.abs(n - closestPowerOfTwo(n));
    operations++
  }

  return operations;
};

var closestPowerOfTwo = function (n) {
  let power = 1;

  while (power < n) {
    power <<= 1;
  }

  if (power - n > n - (power >> 1)) {
    return power >> 1;
  }

  return power;
}

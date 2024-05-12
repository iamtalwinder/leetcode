/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const bits = [0];

  for (let i = 1; i <= n; i++) {
    const count = bits[i >> 1] + (i & 1);
    bits.push(count);
  }

  return bits;
};

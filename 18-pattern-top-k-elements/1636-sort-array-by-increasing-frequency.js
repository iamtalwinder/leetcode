/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const freq = new Map();

  nums.forEach(num => {
    freq.set(num, (freq.get(num) || 0) + 1);
  });

  return nums.sort((a, b) => {
    const aFreq = freq.get(a);
    const bFreq = freq.get(b);

    return aFreq === bFreq ? b - a : aFreq - bFreq;
  });
};
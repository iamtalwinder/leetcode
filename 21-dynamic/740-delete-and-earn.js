/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = getFreqMap(nums);

  const uniqueNums = Array.from(new Set(nums)).sort((a, b) => a - b);
  const memo = new Map();

  function nextValid(i) {
    if (i + 1 < uniqueNums.length && uniqueNums[i] + 1 === uniqueNums[i + 1]) {
      return i + 2;
    }

    return i + 1;
  }

  function max(i) {
    if (i >= uniqueNums.length) {
      return 0;
    }

    if (memo.has(i)) {
      return memo.get(i);
    }

    const result = Math.max(
      map.get(uniqueNums[i]) * uniqueNums[i] + max(nextValid(i)),
      max(i + 1)
    );

    memo.set(i, result);

    return result;
  }

  return max(0);
};

var getFreqMap = function (nums) {
  const map = new Map();
  nums.forEach((num) => {
    const freq = (map.get(num) || 0) + 1;
    map.set(num, freq);
  });
  return map;
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = getFreqMap(nums);

  const uniqueNums = Array.from(new Set(nums)).sort((a, b) => a - b);
  const memo = new Array(uniqueNums.length + 1).fill(0);


  function nextValid(i) {
    if (i + 1 < uniqueNums.length && uniqueNums[i] + 1 === uniqueNums[i + 1]) {
      return i + 2;
    }

    return i + 1;
  }

  for (let i = uniqueNums.length - 1; i >= 0; i--) {
    memo[i] = Math.max(
      map.get(uniqueNums[i]) * uniqueNums[i] + memo[nextValid(i)],
      memo[i + 1]
    );
  }

  return memo[0];
};

var getFreqMap = function (nums) {
  const map = new Map();
  nums.forEach((num) => {
    const freq = (map.get(num) || 0) + 1;
    map.set(num, freq);
  });
  return map;
}

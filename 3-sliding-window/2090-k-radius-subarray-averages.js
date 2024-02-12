/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
  const result = Array(nums.length).fill(-1);
  const windowSize = k * 2 + 1;
  let start = 0, end = k * 2, windowSum = 0;

  for (let i = 0; i <= end; i++) {
      windowSum += nums[i];
  }

  while (end < nums.length) {
      const windowAvg = Math.floor(windowSum / windowSize);
      result[k] = windowAvg;
      k++;
      windowSum -= nums[start];
      start++;
      end++
      windowSum += nums[end];
  }

  return result;
};
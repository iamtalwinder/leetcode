/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  let start = 0, maxLength = 0, mask = 0;

  for (let end = 0; end < nums.length; end++) {
    while ((nums[end] & mask) !== 0) {
      mask &= ~nums[start];
      start++;
    }

    mask |= nums[end];

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

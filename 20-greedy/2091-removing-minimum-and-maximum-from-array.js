/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
  let maxIndex = 0, minIndex = 0;

  nums.forEach((num, index) => {
    if (num > nums[maxIndex]) {
      maxIndex = index;
    }

    if (num < nums[minIndex]) {
      minIndex = index;
    }
  });


  return Math.min(
    Math.max(maxIndex, minIndex) + 1,
    nums.length - Math.min(maxIndex, minIndex),
    Math.min(maxIndex, minIndex) + 1 + nums.length - Math.max(maxIndex, minIndex)
  );
};
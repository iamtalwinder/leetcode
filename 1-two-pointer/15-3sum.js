/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];

  nums.sort((a, b) => a - b);


  for (let i = 0; i < nums.length; i++) {
    let start = i + 1; end = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (start < end) {
      const sum = nums[start] + nums[end] + nums[i];

      if (sum > 0) {
        end--;
      } else if (sum < 0) {
        start++;
      } else {
        result.push([nums[start], nums[end], nums[i]]);

        while (start < end && nums[start] === nums[start + 1]) {
          start++;
        }

        while (start < end && nums[end] === nums[end - 1]) {
          end--
        }

        end--;
        start++;
      }
    }
  }

  return result;
}
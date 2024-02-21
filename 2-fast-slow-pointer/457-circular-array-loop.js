/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;

    let slow = i;
    let fast = nextIndex(nums, i);

    while (
      nums[slow] * nums[fast] > 0 &&
      nums[slow] * nums[nextIndex(nums, fast)] > 0
    ) {
      if (slow === fast) {
        if (slow === nextIndex(nums, slow)) {
          break;
        }
        return true;
      }

      slow = nextIndex(nums, slow);
      fast = nextIndex(nums, nextIndex(nums, fast));
    }

    slow = i;
    while (nums[slow] * nums[i] > 0) {
      const next = nextIndex(nums, slow);
      nums[slow] = 0;
      slow = next;
    }

  }

  return false;
};

function nextIndex(nums, index) {
  const length = nums.length;
  return ((index + nums[index]) % length + length) % length
}

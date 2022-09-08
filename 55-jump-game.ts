function canJump(nums: number[]): boolean {
  let lastReachable = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= lastReachable) {
      lastReachable = i;
    }
  }

  return lastReachable === 0;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const leftStack = [], rightStack = [];
  let leftBoundary = nums.length, rightBoundary = 0;

  for (let i = 0; i < nums.length; i++) {
      while (leftStack.length && nums[i] < nums[leftStack[leftStack.length - 1]]) {
          leftBoundary = Math.min(leftBoundary, leftStack.pop());
      }
      leftStack.push(i);
  }

  for (let i = nums.length - 1; i >= 0; i--) {
      while (rightStack.length && nums[i] > nums[rightStack[rightStack.length - 1]]) {
          rightBoundary = Math.max(rightBoundary, rightStack.pop());
      }
      rightStack.push(i);
  }

  console.log(leftBoundary, rightBoundary)
  return Math.max(rightBoundary - leftBoundary + 1, 0);
};

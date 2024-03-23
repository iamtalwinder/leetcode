/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const ans = Array(nums.length).fill(-1), stack = [];

  for (let i = 0; i < nums.length * 2; i++) {
    const index = i % nums.length;

    if (!stack.length) {
      stack.push(index);
    } else {
      let topIndex = top(stack);

      while (stack.length && nums[topIndex] < nums[index]) {
        ans[topIndex] = nums[index];
        stack.pop();
        topIndex = top(stack);
      }

      stack.push(index);
    }
  }

  return ans;
};

var top = function (stack) {
  return stack[stack.length - 1];
}
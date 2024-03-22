/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];

  let nextMap = new Map();

  nums2.forEach(num => {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      const topNum = stack.pop();
      nextMap.set(topNum, num);
    }

    stack.push(num);
  });

  while (stack.length > 0) {
    const topNum = stack.pop();
    nextMap.set(topNum, -1);
  }

  return nums1.map(num => nextMap.get(num));
};
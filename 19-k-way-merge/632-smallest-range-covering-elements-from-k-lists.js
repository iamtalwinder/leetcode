/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  const range = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
  let max = Number.NEGATIVE_INFINITY;

  const minHeap = new MinHeap(node => node.val);

  nums.forEach((num, index) => {
      minHeap.insert({ val: num[0], row: index, col: 0 });
      max = Math.max(max, num[0])
  });

  while (minHeap.size() === nums.length) {
      const { val, row, col } = minHeap.remove();

      if (max - val < range[1] - range[0] || (max - val === range[1] - range[0] && val < range[0])) {
          range[0] = val;
          range[1] = max;
      }

      if (col + 1 < nums[row].length) {
          minHeap.insert({ val: nums[row][col + 1], row, col: col + 1 });
          max = Math.max(max, nums[row][col + 1])
      }
  }

  return range;
};
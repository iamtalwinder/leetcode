/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const minHeap = new MinHeap(node => node.val);
  const result = [];

  nums2.forEach((num, index) => {
    minHeap.insert({ val: nums1[0] + num, pairIndex: [0, index] });
  });

  while (k && minHeap.size()) {
    const { val, pairIndex } = minHeap.remove();
    const [num1Index, num2Index] = pairIndex;

    result.push([nums1[num1Index], nums2[num2Index]]);

    if (num1Index + 1 < nums1.length) {
      minHeap.insert({
        val: nums1[num1Index + 1] + nums2[num2Index],
        pairIndex: [num1Index + 1, num2Index]
      });
    }

    k--;
  }

  return result;
};

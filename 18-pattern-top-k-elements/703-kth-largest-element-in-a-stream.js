/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.minHeap = new MinHeap(nums);
  this.k = k;

  while (this.minHeap.size() > k) {
      this.minHeap.remove();
  }
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function (val) {
  this.minHeap.insert(val);
  if (this.minHeap.size() > this.k) {
      this.minHeap.remove();
  }
  return this.minHeap.peek();
};

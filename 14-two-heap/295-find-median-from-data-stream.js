
var MedianFinder = function () {
  this.minHeap = new MinHeap();
  this.maxHeap = new MaxHeap();
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) {
    this.maxHeap.insert(num);
  } else {
    this.minHeap.insert(num);
  }

  if (this.maxHeap.size() > this.minHeap.size() + 1) {
    this.minHeap.insert(this.maxHeap.remove());
  }

  if (this.minHeap.size() > this.maxHeap.size()) {
    this.maxHeap.insert(this.minHeap.remove())
  }
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size() > this.minHeap.size()) {
    return this.maxHeap.peek();
  }

  return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
};
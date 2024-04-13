class Heap {
  constructor(compareFn, values = []) {
    this.heap = []
    this.compareFn = compareFn;

    values.forEach((value) => this.insert(value));
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(firstIndex, secondIndex) {
    [this.heap[firstIndex], this.heap[secondIndex]] = [this.heap[secondIndex], this.heap[firstIndex]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const top = this.peek();
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return top;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (currentIndex > 0) {
      if (!this.compareFn(this.heap[parentIndex], this.heap[currentIndex])) {
        break;
      }

      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }

  }

  heapifyDown() {
    let parentIndex = 0;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(parentIndex);
      const rightChildIndex = this.getRightChildIndex(parentIndex);

      let swapIndex = parentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.compareFn(this.heap[swapIndex], this.heap[leftChildIndex])
      ) {
        swapIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.compareFn(this.heap[swapIndex], this.heap[rightChildIndex])
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === parentIndex) {
        break;
      }

      this.swap(parentIndex, swapIndex);
      parentIndex = swapIndex;
    }
  }
}


class MinHeap extends Heap {
  constructor(values) {
    const compareFn = (parent, child) => parent > child;
    super(compareFn, values);
  }
}


class MaxHeap extends Heap {
  constructor(values) {
    const compareFn = (parent, child) => parent < child;
    super(compareFn, values);
  }
}

console.log('******************Min Heap********************');

const minHeap = new MinHeap([3, 1, 6, 5, 2, 4]);

console.log(minHeap.peek()); // Output: 1
console.log(minHeap.remove()); // Output: 1
console.log(minHeap.remove()); // Output: 2
console.log(minHeap.remove()); // Output: 3
console.log(minHeap.peek()); // Output: 4


console.log('******************Max Heap********************');

const maxHeap = new MaxHeap([3, 1, 6, 5, 2, 4]);

console.log(maxHeap.peek()); // Output: 6
console.log(maxHeap.remove()); // Output: 6
console.log(maxHeap.remove()); // Output: 5
console.log(maxHeap.remove()); // Output: 4
console.log(maxHeap.peek()); // Output: 3
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const minHeap = new MinHeap(node => node.val);

  lists.forEach(list => {
    if (list !== null) {
      minHeap.insert(list);
    }
  });


  const dummy = new ListNode(0);
  let current = dummy;

  while (minHeap.size()) {
    current.next = minHeap.remove();
    current = current.next;

    if (current.next) {
      minHeap.insert(current.next);
    }
  }


  return dummy.next;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) {
      return head;
  }

  const length = getListLength(head);
  let splitPoint = head, tail = null;

  k = k % length;

  if (!k) {
      return head;
  }

  for (let i = 0; i < length - k - 1; i++) {
      splitPoint = splitPoint.next;
  }

  tail = splitPoint; 

  while (tail.next) {
      tail = tail.next;
  }

  const newHead = splitPoint.next;
  splitPoint.next = null;
  tail.next = head;

  return newHead;
};

var getListLength = function(head) {
  let length = 0;

  while (head) {
      length++;
      head = head.next;
  }

  return length;
}
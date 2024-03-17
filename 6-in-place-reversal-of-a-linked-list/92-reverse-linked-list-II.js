/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left === right) {
      return head;
  }

  const dummy = new ListNode(0, head);

  let prev = dummy, current = null;

  for (let i = 0; i < left - 1; i++) {
      prev = prev.next;
  }

  current = prev.next;

  for (let i = 0; i < right - left; i++) {
      let next = current.next;

      current.next = next.next
      next.next = prev.next;
      prev.next = next
  }

  return dummy.next;

};

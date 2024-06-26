/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let fast = head, slow = head;
  if (!head || !head.next) {
      return false;
  }

  while (fast && fast.next && fast.next.next ) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
          return true;
      }
  }

  return false;
};
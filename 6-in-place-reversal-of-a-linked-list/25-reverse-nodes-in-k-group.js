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
var reverseKGroup = function (head, k) {
  if (!head) {
      return head;
  }

  const dummy = new ListNode(0, head);

  let prev = dummy;

  while (prev) {
      let tail = prev.next;
      for (let i = 0; i < k; i++) {
          if (!tail) {
              return dummy.next;
          }

          tail = tail.next;
      }

      prev = reverse(prev, k);
  }

  return dummy.next;
};

var reverse = function (prev, k) {
  let current = prev.next;
  for (let i = 0; i < k - 1; i++) {
      let next = current.next;

      current.next = next.next;
      next.next = prev.next;
      prev.next = next;
  }

  return current;
}

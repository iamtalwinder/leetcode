/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  const reverseHead = reverse(head);

  const dummy = new ListNode(Number.POSITIVE_INFINITY, reverseHead);

  let current = dummy.next;

  while (current.next) {
    let next = current.next;
    if (current.val > next.val) {
      current.next = next.next
    } else {
      current = next;
    }
  }

  return reverse(dummy.next);
};


var reverse = function (head) {
  const dummy = new ListNode(0, head);

  let prev = dummy, current = prev.next;

  while (current && current.next) {
    const next = current.next;

    current.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next || !head.next.next) {
      return head;
  }

  const mid = findMid(head);
  let reversedHead = reverse(mid.next);
  mid.next = null;

  let current = head, next = head.next;

  while (current) {
      current.next = reversedHead;
      reversedHead = reversedHead.next;
      current.next.next = next || reversedHead;
      current = next;
      next = current?.next;
  }
};

var findMid = function(head) {
  let fast = head, slow = head;

  while (fast && fast.next) {
      fast = fast.next?.next;

      if (fast && fast.next) {
          slow = slow.next;
      }
  }

  return slow;
}

var reverse = function (head) {
  if (!head && !head.next) {
      head;
  }

  let prev = null, next = head.next;

  while (head) {
      head.next = prev;
      prev = head;
      head = next;
      next = head?.next
  }

  return prev;
}
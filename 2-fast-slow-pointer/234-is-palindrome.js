/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) {
      return true;
  }

  const mid = listMid(head); 
  let reverseHead = reverse(mid.next);
  mid.next = null;

  while (head && reverseHead && head.val === reverseHead.val) {
      head = head.next;
      reverseHead = reverseHead.next;
  }

  if (!head && !reverseHead || !head && reverseHead !== null) {
      return true;
  }

  return false;
};


var listMid= function(head) {
  let fast = head, slow = head;

  while (fast && fast.next) {
      fast = fast.next?.next;
      if (fast && fast.next) {
          slow = slow.next;
      }
  }

  return slow;
}

var reverse = function(head) {
  if (!head || !head.next) {
      return head;
  }

  let next = head.next, prev = null;

  while (head) {
      head.next = prev;
      prev = head;
      head = next;
      next = head?.next;
  }

  return prev;
}
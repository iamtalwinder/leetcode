/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  const mid = getMiddle(head);
  let maxSum = Number.NEGATIVE_INFINITY;

  let reverseHead = reverse(mid.next);
  mid.next = null;

  while (head) {
      maxSum = Math.max(maxSum, head.val + reverseHead.val);
      head = head.next;
      reverseHead = reverseHead.next;
  } 

  return maxSum;
};

var reverse = function(head) {
  let prev = null, next = head.next;

  while (head) {
      head.next = prev;
      prev = head;
      head = next;
      next = head?.next;
  }

  return prev;
}

var getMiddle = function(head) {
  if (!head || !head.next) {
      return head;
  }

  let fast = head, slow = head;

  while (fast && fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
  }

  return slow;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function generateList(arr) {
  const head = new ListNode(arr[0], null);

  let current = head;
  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i], null);
    current.next = node;
    current = node;
  }

  return head;
}

const arr = [47,22,81,46,94,95,90,22,55,91,6,83,49,65,10,32,41,26,83,99,14,85,42,99,89,69,30,92,32,74,9,81,5,9];
const head = generateList(arr);
console.log(pairSum(head));
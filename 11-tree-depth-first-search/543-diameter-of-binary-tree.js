/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  function depth(node) {
    if (!node) {
      return -1;
    }

    const leftHeight = depth(node.left);
    const rightHeight = depth(node.right);

    diameter = Math.max(diameter, leftHeight + rightHeight + 2);

    return Math.max(leftHeight, rightHeight) + 1
  }

  depth(root);

  return diameter;
};
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
var sumNumbers = function (root) {
  let totalSum = 0;

  function dfs(node, sum) {
    if (!node) {
      return
    }

    if (!node.left && !node.right) {
      const leafSum = sum * 10 + node.val;

      totalSum += leafSum;
    }

    dfs(node.left, sum * 10 + node.val);
    dfs(node.right, sum * 10 + node.val);
  }

  dfs(root, 0);

  return totalSum;
};
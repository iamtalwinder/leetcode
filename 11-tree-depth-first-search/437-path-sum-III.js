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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let pathCount = 0;
  const prefixSum = new Map();
  prefixSum.set(0, 1);

  function dfs(node, currentSum) {
    if (!node) {
      return;
    }

    const sum = node.val + currentSum;
    pathCount += prefixSum.get(sum - targetSum) || 0;
    prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);

    dfs(node.left, sum);
    dfs(node.right, sum);

    prefixSum.set(sum, (prefixSum.get(sum) || 0) - 1);
  }


  dfs(root, 0);

  return pathCount;
};
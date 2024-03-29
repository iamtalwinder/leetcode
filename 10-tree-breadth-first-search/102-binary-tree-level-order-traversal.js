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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const queue = [root], result = [];

    while (queue.length) {
      const levelLength = queue.length, levelVals = [];

      for (let i = 0; i < levelLength; i++) {
        const node = queue.shift();

        levelVals.push(node.val);

        if (node.left) { 
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      }

      result.push(levelVals);
    }

  return result;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = [];

  nums.sort((a, b) => a - b);
  const visited = Array(nums.length).fill(false);

  function backtrack(path) {
      if (path.length === nums.length) {
          result.push(path.slice());
          return;
      }

      for (let i = 0; i < nums.length; i++) {
          if (visited[i]) {
              continue;
          }
          
          if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) {
              continue;
          }

          path.push(nums[i]);
          visited[i] = true;
          backtrack(path);
          visited[i] = false;
          path.pop();
      }
  }

  backtrack([]);
  return result;
};
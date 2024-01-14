/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const endNum = 2 ** n - 1;
  const visited = Array(endNum + 1).fill(false);
  const xorResultMap = new Map();

  function backtrack(path, visited) {
      if (path.length === endNum + 1) {
          return path.slice();
      }

      for (let i = 1; i <= endNum; i++) {
          if (visited[i]) {
              continue;
          }

          const lastInserted = path[path.length - 1];
          if (isOneBitDiff(lastInserted, i, xorResultMap)) {
              if (path.length !== endNum || (path.length === endNum && isOneBitDiff(path[0], i, xorResultMap))) {
                  path.push(i);
                  visited[i] = true;
                  const result = backtrack(path, visited);
                  if (result) {
                      return result;
                  }
                  visited[i] = false;
                  path.pop();
              }
          }
      }

      return null;
  }

  visited[0] = true;
  return backtrack([0], visited);
};

var isOneBitDiff = function (num1, num2, xorResultMap) {
  const key = `${num1}-${num2}`;
  if (xorResultMap.has(key)) {
      return xorResultMap.get(key);
  }

  const xorResult = num1 ^ num2;
  const result = (xorResult & (xorResult - 1)) === 0 && xorResult !== 0;
  xorResultMap.set(key, result);
  xorResultMap.set(`${num2}-${num1}`, result);

  return result;
}
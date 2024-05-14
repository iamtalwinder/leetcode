/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const n = grid.length;
  const queue = [];
  const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];

  let maxDistance = -1;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) {
        queue.push([row, col]);
      }
    }
  }

  if (!queue.length || queue.length === n * n) {
    return -1;
  }

  while (queue.length) {
    const [row, col] = queue.shift();

    for (const direction of directions) {
      const [x, y] = direction;
      const newRow = row + x, newCol = col + y;

      if (
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < n &&
        newCol < n &&
        grid[newRow][newCol] === 0
      ) {
        grid[newRow][newCol] = grid[row][col] + 1;
        maxDistance = Math.max(maxDistance, grid[newRow][newCol] - 1);
        queue.push([newRow, newCol]);
      }
    }
  }

  return maxDistance;
};
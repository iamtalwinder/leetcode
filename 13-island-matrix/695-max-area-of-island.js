/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(getArea(grid, i, j), maxArea);
      }
    }
  }

  return maxArea;
};

var getArea = function (grid, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === 0
  ) {
    return 0;
  }

  grid[i][j] = 0;
  let area = 1;


  area += getArea(grid, i + 1, j);
  area += getArea(grid, i - 1, j);
  area += getArea(grid, i, j + 1);
  area += getArea(grid, i, j - 1);

  return area;
}
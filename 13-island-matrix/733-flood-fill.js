/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  if (!image.length) {
    return image
  }

  const source = image[sr][sc];

  dfs(image, sr, sc, color, source);

  return image;
};

var dfs = function (grid, i, j, color, source) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] !== source ||
    grid[i][j] === color
  ) {
    return;
  }

  grid[i][j] = color;

  dfs(grid, i + 1, j, color, source);
  dfs(grid, i - 1, j, color, source);
  dfs(grid, i, j + 1, color, source);
  dfs(grid, i, j - 1, color, source);
}
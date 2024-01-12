/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const [row, col] = findEmptyCell(board);

    if (row === null || col === null) {
      return true;
    }

    for (let num= 1; num <= 9; num++) {
      if (isValid(board, row, col, num.toString())) {
        board[row][col] = num.toString();

        if (solveSudoku(board)) {
          return true;
        }

        board[row][col] = '.';
      }
    }

    return false;
};

var isValid = function(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num || board[row][i] === num) {
      return false;
    }
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }

  return true;
}

var findEmptyCell = function(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === '.') {
        return [row, col];
      }
    }
  }

  return [null, null];
}

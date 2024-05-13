/**
 * @param {number} n
 * @return {string[][]}
 */

const QUEEN_SYMBOL = 'Q';
const EMPTY_SYMBOL = '.';

var solveNQueens = function (n) {
  const visitedCol = new Set();
  const visitedPositiveDiagonal = new Set(); // row + col
  const visitedNegativeDiagonal = new Set(); // row - col

  const result = [];

  const board = Array.from({ length: n }, () => new Array(n).fill(EMPTY_SYMBOL));


  function backtrack(row) {
    if (row === n) {
      result.push(board.map((boardRow) => boardRow.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (
        visitedCol.has(col) ||
        visitedPositiveDiagonal.has(row + col) ||
        visitedNegativeDiagonal.has(row - col)
      ) {
        continue;
      }

      visitedCol.add(col);
      visitedPositiveDiagonal.add(row + col);
      visitedNegativeDiagonal.add(row - col);
      board[row][col] = QUEEN_SYMBOL;

      backtrack(row + 1);

      visitedCol.delete(col);
      visitedPositiveDiagonal.delete(row + col);
      visitedNegativeDiagonal.delete(row - col);
      board[row][col] = EMPTY_SYMBOL;
    }
  }

  backtrack(0);

  return result;
};
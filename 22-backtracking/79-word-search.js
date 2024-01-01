/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const directionX = [1, -1, 0, 0];
  const directionY = [0, 0, 1, -1];

  function isSafe(newX, newY) {
      return newX >= 0 && newX < board.length && 
      newY >= 0 && newY < board[0].length && 
      board[newX][newY] !== '#';
  }

  function backtrack(x, y, index) {
      if (index === word.length) {
          return true;
      }

      if (!isSafe(x, y) || board[x][y] !== word[index]) {
          return false;
      }

      const prev = board[x][y];
      board[x][y] = '#';

      for (let dirIndex = 0; dirIndex < directionX.length; dirIndex++) {
          const newX = x + directionX[dirIndex], newY = y + directionY[dirIndex];

          if(backtrack(newX, newY, index + 1)) {
              return true;
          }
      }

      board[x][y] = prev;

      return false;
  }

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === word[0] && backtrack(i, j, 0)) {
              return true;
          }
      }
  }

  return false;
};

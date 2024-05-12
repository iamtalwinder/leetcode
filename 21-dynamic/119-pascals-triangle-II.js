/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let lastRow = [1];

  for (let i = 1; i <= rowIndex; i++) {
    const row = []

    for (let j = 0; j <= lastRow.length; j++) {
      if (j == 0 || j == lastRow.length) {
        row.push(1);
      } else {
        row.push(lastRow[j] + lastRow[j - 1]);
      }
    }

    lastRow = row;
  }

  return lastRow;
};
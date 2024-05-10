/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  const binaryString = n.toString(2);

  let invertedString = '';

  for (let i = 0; i < binaryString.length; i++) {
      invertedString += binaryString[i] === '0' ? '1' : '0';
  }

  return parseInt(invertedString, 2);
};

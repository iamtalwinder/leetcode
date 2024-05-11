/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
  let firstHalf = '', middle = '';
  const freq = Array(10).fill(0);

  for (const char of num) {
    freq[char - '0']++;
  }

  for (let i = 9; i >= 0; i--) {
    if (freq[i] % 2 !== 0 && middle === '') {
      middle = String(i);
    }

    firstHalf += String(i).repeat(Math.floor(freq[i] / 2));
  }

  firstHalf = firstHalf.replace(/^0+/, '');

  if (!firstHalf) {
    return middle || '0';
  }

  return firstHalf + middle + firstHalf.split('').reverse().join('');
};
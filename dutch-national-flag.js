/**
 * @param {number[]} arr
 * @return {void}
 */
var sortColors = (arr) => {
  let low = 0, mid = 0, end = arr.length - 1;

  while (mid <= end) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++
    } else {
      [arr[mid], arr[end]] = [arr[end], arr[mid]];
      end--
    }
  }
} 

const arr = [1, 0, 0, 2, 1, 0, 1, 0];

sortColors(arr);
console.log(arr);
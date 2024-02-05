/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let start = 0, maxLength = 0;
  const fruitType = new Map();

  for (let end = 0; end < fruits.length; i++) {
    fruitType.set(fruits[end], (fruitType.get(fruits[end]) || 0) + 1);

    while (fruitType.size > 2) {
      fruitType.set(fruits[start], fruitType.get(fruits[start]) - 1);
      
      if (fruitType.get(fruits[start]) === 0) {
        fruitType.delete(fruits[start]);
      }
      start++
    }

    maxLength = Math.max(maxLength, end - start + 1)
  }

  return maxLength;
}

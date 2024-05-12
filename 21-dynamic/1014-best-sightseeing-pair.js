/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let result = 0;
  let max = values[0];

  for (let i = 1; i < values.length; i++) {
    result = Math.max(result, max + values[i] - i);
    max = Math.max(max, values[i] + i);
  }

  return result;
}
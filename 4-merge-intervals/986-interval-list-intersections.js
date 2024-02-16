/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  const result = [];
  let first = 0, second = 0;

  if (!firstList.length || !secondList.length) {
    return [];
  }

  while (first < firstList.length && second < secondList.length) {
    const firstInterval = firstList[first];
    const secondInterval = secondList[second];

    const intersection = getIntersection(firstInterval, secondInterval);

    if (intersection.length) {
      result.push(intersection);
    }


    if (firstInterval[1] < secondInterval[1]) {
      first++;
    } else {
      second++;
    }
  }

  return result;
}

var getIntersection = function(firstInterval, secondInterval) {
  const start = Math.max(firstInterval[0], secondInterval[0]);
  const end = Math.min(firstInterval[1], secondInterval[1]);

  if (start <= end) {
    return [start, end];
  }

  return [];
}
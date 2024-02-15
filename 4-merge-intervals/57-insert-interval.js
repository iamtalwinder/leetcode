/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let i = 0;
  
  if (!intervals.length) {
      intervals.push(newInterval);
      return intervals;
  }

  for (i = 0; i < intervals.length; i++) {
      const currentInterval = intervals[i];

      if (currentInterval[0] >= newInterval[0]) {
          intervals.splice(i, 0, newInterval);
          break;
      }
  }

  if (i === intervals.length) {
      intervals.push(newInterval);
  }

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastMerged = merged[merged.length - 1];

      if (lastMerged[1] >= currentInterval[0]) {
          lastMerged[1] = Math.max(lastMerged[1], currentInterval[1]);
      } else {
          merged.push(currentInterval);
      }
  }

  return merged;
};
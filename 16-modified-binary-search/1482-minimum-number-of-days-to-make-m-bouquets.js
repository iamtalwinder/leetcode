/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (m * k > bloomDay.length) {
    return -1;
  }

  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);

  const canMakeBouquets = (days) => {
    let bouquets = 0, flowers = 0;

    for (let day of bloomDay) {
      if (day <= days) {
        flowers++;

        if (flowers === k) {
          bouquets++;
          flowers = 0;
        }

      } else {
        flowers = 0;
      }
    }

    return bouquets >= m;
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (canMakeBouquets(mid)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};
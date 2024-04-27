/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let low = 1, high = Math.max(...piles);

  function canEatBananas(mid) {
    let hours = 0;

    for (let pile of piles) {
      hours += Math.ceil(pile / mid);

      if (hours > h) {
        return false;
      }
    }

    return hours <= h;
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (canEatBananas(mid)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};
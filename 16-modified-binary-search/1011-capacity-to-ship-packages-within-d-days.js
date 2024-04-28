/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let low = Math.min(...weights), high = weights.reduce((a, b) => a + b, 0);

  function canCarry(capacity) {
    let daysRequired = 1;

    let currentWeight = 0;

    for (const weight of weights) {
      const nextWeight = currentWeight + weight;
      if (currentWeight <= capacity && nextWeight > capacity) {
        daysRequired++;
        currentWeight = 0;
      }

      if (daysRequired > days || weight > capacity) {
        return false;
      }

      currentWeight += weight;
    }

    return daysRequired <= days;
  }

  while (low <= high) {
    const capacity = Math.floor((low + high) / 2);

    if (canCarry(capacity)) {
      high = capacity - 1;
    } else {
      low = capacity + 1;
    }
  }

  return low;
};
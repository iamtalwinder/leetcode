/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let maxRepetition = 0, currentRepetition = 0, sp = 0;

  while (sp < sequence.length) {
    if (sequence.substring(sp, sp + word.length) === word) {
      currentRepetition++;
      sp += word.length;
    } else {
      if (currentRepetition > 0) {
        sp -= currentRepetition * word.length;
      }

      currentRepetition = 0;
      sp++;
    }

    maxRepetition = Math.max(maxRepetition, currentRepetition);
  }

  return maxRepetition;
};


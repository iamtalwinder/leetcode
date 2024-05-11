
var FreqStack = function () {
  this.maxFreq = 0;
  this.freqMap = new Map();
  this.freqGroup = new Map();
};

/** 
* @param {number} val
* @return {void}
*/
FreqStack.prototype.push = function (val) {
  const newFreq = (this.freqMap.get(val) || 0) + 1;
  this.freqMap.set(val, newFreq);

  const freqGroup = this.freqGroup.get(newFreq) || [];

  this.freqGroup.set(newFreq, [...freqGroup, val]);
  this.maxFreq = Math.max(this.maxFreq, newFreq);
};

/**
* @return {number}
*/
FreqStack.prototype.pop = function () {
  if (!this.maxFreq) {
    return null;
  }

  const maxFreqGroup = this.freqGroup.get(this.maxFreq);
  const val = maxFreqGroup.pop();

  if (maxFreqGroup.length === 0) {
    this.freqGroup.delete(this.maxFreq);
    this.maxFreq--;
  }

  this.freqMap.set(val, this.freqMap.get(val) - 1);

  return val;
};

/** 
* Your FreqStack object will be instantiated and called as such:
* var obj = new FreqStack()
* obj.push(val)
* var param_2 = obj.pop()
*/
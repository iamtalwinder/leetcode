
var TrieNode = function () {
  this.children = new Map();
  this.endOfWord = false;
}

var Trie = function () {
  this.root = new TrieNode();
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!current.children.has(char)) {
      current.children.set(char, new TrieNode());
    }
    current = current.children.get(char);
  }
  current.endOfWord = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!current.children.has(char)) {
      return false;
    }
    current = current.children.get(char);
  }
  return current.endOfWord;
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;
  for (const char of prefix) {
    if (!current.children.has(char)) {
      return false;
    }
    current = current.children.get(char);
  }
  return true;
};

/**
* @param {string} word
* @return {boolean} whether the word was successfully deleted
*/
Trie.prototype.delete = function(word) {
  return this._delete(this.root, word, 0);
};

Trie.prototype._delete = function(current, word, index) {
  if (index === word.length) {
    if (!current.endOfWord) {
      return false;
    }

    current.endOfWord = false;
    return current.children.size === 0;
  }

  const node = current.children.get(word[index]);
  if (!node) {
    return false;
  }

  const shouldDeleteCurrent = this._delete(node, word, index + 1);

  if (shouldDeleteCurrent) {
    current.children.delete(word[index]);
    return current.children.size === 0 && !current.endOfWord;
  }
}

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/
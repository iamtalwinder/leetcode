/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  const trie = new Trie();
  const result = [];

  for (const product of products) {
    trie.insert(product);
  }

  let searchString = '';

  for (let char of searchWord) {
    searchString += char;
    const node = trie.startsWith(searchString);

    if (node) {
      result.push(node.words);
    } else {
      result.push([]);
    }
  }


  return result;
};


var TrieNode = function () {
  this.children = new Map();
  this.endOfWord = false;
  this.words = [];
}

var Trie = function () {
  this.root = new TrieNode();
};

Trie.prototype.insert = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!current.children.has(char)) {
      current.children.set(char, new TrieNode());
    }

    current = current.children.get(char);

    current.words.push(word);
    current.words.sort();

    if (current.words.length > 3) {
      current.words.pop();
    }

  }
  current.endOfWord = true;
};

Trie.prototype.startsWith = function (prefix) {
  let current = this.root;
  for (const char of prefix) {
    if (!current.children.has(char)) {
      return null;
    }
    current = current.children.get(char);
  }
  return current;
};

/*
Overall Complexity
Time Complexity: O(n * m + k * m), which can be simplified to O(n * m), where n is the number of products, m is the average length of the words, and k is the length of the search word.
Space Complexity: O(n * m + k), where n is the number of products, m is the average length of the words, and k is the length of the search word.
*/
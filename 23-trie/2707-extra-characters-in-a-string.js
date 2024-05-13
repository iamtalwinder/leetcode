/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  const trie = new Trie();

  dictionary.forEach(word => trie.insert(word));

  const memo = new Map();

  function dfs(i) {
    if (i === s.length) {
      return 0;
    }

    if (memo.has(i)) {
      return memo.get(i);
    }

    let result = 1 + dfs(i + 1);

    for (let j = i; j < s.length; j++) {
      const substr = s.substring(i, j + 1);
      const node = trie.startsWith(substr);

      if (!node) {
        break;
      }

      if (node.endOfWord) {
        result = Math.min(result, dfs(j + 1))
      }
    }

    memo.set(i, result);
    return result
  }

  return dfs(0);
};


class TrieNode {
  constructor () {
    this.children = new Map();
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert() {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.endOfWord = true;
  };

  startsWith(prefix) {
    let current = this.root;
    for (const char of prefix) {
      if (!current.children.has(char)) {
        return null;
      }
      current = current.children.get(char);
    }
    return current;
  };
};

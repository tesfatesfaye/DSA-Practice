class Node {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
  setEnd() {
    this.end = true;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  add(input, node = this.root) {
    if (!input.length) {
      node.setEnd();
      return;
    }

    if (!node.children.has(input[0])) {
      node.children.set(input[0], new Node());
    }
    return this.add(input.substr(1), node.children.get(input[0]));
  }
  isWord(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.children.has(word[0])) {
        return false;
      } else {
        node = node.children.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.children.has(word) && node.children.get(word).end;
  }
  print() {
    let words = [];
    const search = (node, string) => {
      if (node.children.size) {
        for (let letter of node.children.keys()) {
          search(node.children.get(letter), string.concat(letter));
        }
        if (node.end) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined
        return
      }

    };
    search(this.root, new String())
  }
}

let myTrie = new Trie();
myTrie.add("ball");
myTrie.add("balk");
myTrie.add("alk");
console.log(myTrie.root.children.get("a").children.get("l"));
console.log(myTrie.isWord("balk"));
console.log(print())
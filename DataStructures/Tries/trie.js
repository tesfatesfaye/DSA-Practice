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
  add(input, node = this.root,index=0) {
    if (index>=input.length) {
      node.setEnd();
      return;
    }

    if (!node.children.has(input[index])) {
      node.children.set(input[index], new Node());
    }
    return this.add(input, node.children.get(input[index]),index+1);
  }
  isWord(word) {
    let node = this.root;
    let index=0
    while (index<word.length-1) {
      if (!node.children.has(word[index])) {
        return false;
      } else {
        node = node.children.get(word[index]);
        index++;
      }
    }
    return node.children.has(word[index]) && node.children.get(word[index]).end;
  }
  print() {
    let words = [];
    const search = (node, string) => {
      if (node.children.size > 0) {
        for (let letter of node.children.keys()) {
          search(node.children.get(letter), string + letter);
        }
        if (node.end) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, "");
    return words;
  }
}

let myTrie = new Trie();
myTrie.add("ball");
myTrie.add("balk");
myTrie.add("alk");

console.log(myTrie.isWord("balk"));
console.log(myTrie.print());

class node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (this.root) {
      let holder = this.root;
      while (true) {
        if (holder.val === val) {
          return undefined;
        }
        if (holder.val > val) {
          if (holder.left) {
            holder = holder.left;
          } else {
            holder.left = new node(val);
            break;
          }
        } else {
          if (holder.right) {
            holder = holder.right;
          } else {
            holder.right = new node(val);
            break;
          }
        }
      }
    } else {
      this.root = new node(val);
    }
  }

  find(val) {
    let node = this.root;
    while (node) {
      if (node.val === val) {
        return node;
      } else if (node.val > val) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return node;
  }

  delete(value) {
    const deleteHelper = (treeNode, value) => {
      if (!treeNode) return null;

      if (value > treeNode.val) {
        treeNode.right = deleteHelper(treeNode.right, value);
      } else if (value < treeNode.val) {
        treeNode.left = deleteHelper(treeNode.left, value);
      } else {
        if (!treeNode.left && !treeNode.right) {
          return null;
        }

        if (treeNode.left && !treeNode.right) {
          return treeNode.left;
        }
        if (treeNode.right && !treeNode.left) {
          return treeNode.right;
        }

        treeNode.val = this.Min(treeNode.right).val;
        treeNode.right = deleteHelper(treeNode.right, treeNode.val);
      }

      return treeNode;
    };

    this.root = deleteHelper(this.root, value);
  }
  DFS(val = this.root, valueArray = []) {
    if (!val) return [];
    let node = val;
    if (node.left) {
      this.DFS(node.left, valueArray);
    }
    valueArray.push(node?.val);
    if (node.right) {
      this.DFS(node.right, valueArray);
    }

    return valueArray;
  }

  Min(root) {
    if (root === null) return null;
    
    while (root.left!==null) {
      root = root.left;
    }
    return root;
  }

  Max(root) {
    // Handle case where root is null
    if (root === null) {
      return null;
    }

    while (root.right !== null) {
      root = root.right;
    }

    return root;
  }

  BFS() {
    if (!this.root) return [];
    let node = this.root;
    const data = [];
    const queue = [node];

    while (queue.length) {
      let value = queue.shift();
      if (value.left) queue.push(value.left);
      if (value.right) queue.push(value.right);
      data.push(value.val);
    }

    return data;
  }
}

let bts = new BTS();

bts.insert(5);
bts.insert(6);
bts.insert(7);
bts.insert(8);
bts.insert(4);
bts.insert(3);
// console.log(bts.find(4));
// console.log(bts.root.right);
// console.log(bts.DFS());
console.log(bts.BFS());
console.log(bts.delete(5));
console.log(bts.DFS());
// console.log(bts.Min().val);
// console.log(bts.Max().val);
// console.log(bts["root"])

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

  #deleteNode(root, value) {
    if (!root) return root;
    if (value < root.val) {
      root.left = this.#deleteNode(root.left, value);
    } else if (value > root.val) {
      root.right = this.#deleteNode(root.right, value);
    } else {
      if (!root?.left && !root?.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }
      root.val = this.Min(root.right);
      root.right = this.#deleteNode(root.right, root.val);
    }
    return root;
  }

  delete(value) {
   const removeNode = (node, value) => {
     if (node === null) {
       return null;
     }
     if (value === node.val) {
       // Node to be deleted is found
       // 1. Node has no children
       if (node.left === null && node.right === null) {
         return null;
       }
       // 2. Node has one child
       if (node.left === null) {
         return node.right;
       }
       if (node.right === null) {
         return node.left;
       }
       // 3. Node has two children
       let tempNode = node.right;
       while (tempNode.left !== null) {
         tempNode = tempNode.left;
       }
       node.val = tempNode.val;
       node.right = removeNode(node.right, tempNode.val);
       return node;
     } else if (value < node.val) {
       node.left = removeNode(node.left, value);
       return node;
     } else {
       node.right = removeNode(node.right, value);
       return node;
     }
   };
   this.root = removeNode(this.root, value);
  }
  DFS(val = this.root, valueArray = []) {
    let node = val;
    if (node.left) {
      this.DFS(node.left, valueArray);
    }
    valueArray.push(node.val);
    if (node.right) {
      this.DFS(node.right, valueArray);
    }

    return valueArray;
  }

  Min(root) {
    // Handle case where root is null
    if (root === null) {
      return null;
    }

    while (root.left !== null) {
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
      if (value.left) queue.push(value["left"]);
      if (value.right) queue.push(value["right"]);
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
console.log(bts.DFS())
// console.log(bts.Min().val);
// console.log(bts.Max().val);
// console.log(bts["root"])

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
      if (value.left) queue.push(value.left);
      if (value.right) queue.push(value.right);
      data.push(value.val);
    }

    return data;
  }
  invert(root=this.root, level=1,holder=[]){
    if(!root) return null
    holder.push(level)
    let variable=root.left
    root.left=root.right
    root.right = variable
   
    if(root.left){
        this.invert(root.left,level+1,holder)
    }
    
    if(root.right){
      this.invert(root.right,level+1,holder)
    }
      return holder
  }

}

let bts = new BTS();
let values=  Array.from({length:31},(_,x)=>x+1)
function getBalancedOrder(arr) {
  if (arr.length === 0) return [];
  const midIdx = Math.floor(arr.length / 2);
  return [
    arr[midIdx],
    ...getBalancedOrder(arr.slice(0, midIdx)),
    ...getBalancedOrder(arr.slice(midIdx + 1)),
  ];
}

values=getBalancedOrder(values)
for(let i of values){
  bts.insert(i)
}

// // let values = Array.from({ length: 15 }, (_, i) => i + 1);
// // console.log(values)
// let start=Math.floor(values.length/2)
// let left=start-1
// let right=start+1
//   bts.insert(values[start])
//   while(left>-1&&right<values.length){
//     bts.insert(values[left])
//     bts.insert(values[right])
//     left--
//     right++
//   }
// console.log(bts.DFS());
console.log(bts.invert())
console.log(bts.DFS());
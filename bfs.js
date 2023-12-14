class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;



const bfs = (root) => {
  if (!root) return [];

  const values = [root.val];
  const queue = [root];
  while (queue.length) {
    let current = queue.shift();
    let child = null;
    if (current.left) {
      child = current.left;
      values.push(child.val);
      queue.push(child);
    }
    if (current.right) {
      child = current.right;
      values.push(child.val);
      queue.push(child);
    }
  }
    return values
};

console.log(bfs(node1))
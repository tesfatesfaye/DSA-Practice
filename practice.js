class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(2);
let node4 = new TreeNode(3);
let node5 = new TreeNode(4);
let node6 = new TreeNode(4);
let node7 = new TreeNode(3);
let node8 = new TreeNode(1);
let node9 = new TreeNode(2);
let node10 = new TreeNode(2);
let node11 = new TreeNode(3);
let node12 = new TreeNode(3);



node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

node8.left = node9;
node8.right = node10;
node9.right = node11;
node10.right = node12;

// node1 is the root of the tree



var isSymmetric = function (root) {
  const isMirror = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  };
  return isMirror(root.left, root.right);
};

console.log(isSymmetric(node1))
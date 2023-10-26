var addOneRow = function (root, v, depth, lev = 1) {
  if (depth === 1 && lev === 1) {
    let newNode = new TreeNode(v);
    newNode.left = root;
    return newNode;
  }
  if (lev === depth - 1) {
    let leftHolder = root.left;
    let rightHolder = root.right;
    root.left = new TreeNode(v, leftHolder, undefined);
    root.right = new TreeNode(v, undefined, rightHolder);
  } else {
    if (root.left) {
      addOneRow(root.left, v, depth, lev + 1);
    }
    if (root.right) {
      addOneRow(root.right, v, depth, lev + 1);
    }
  }

  return root;
};

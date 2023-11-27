const reverseOddLevels = (root) => {
  const values = {};
  const collect = (node, level = 0) => {
    if (!node) {
      return null;
    }
    let key = level + 1;
    if (level % 2 == 0 && node.left) {
      if (values[key] === undefined) {
        values[key] = [node.left.val, node.right.val];
      } else {
        values[key].push(node.left.val, node.right.val);
      }
    }
    if (node.left) {
      collect(node.left, level + 1);
      collect(node.right, level + 1);
    }
  };

  const swapper = (node, level = 0) => {
    if (!node) return null;

    if (level % 2 !== 0) {
      node.val = values[level].pop();
    }
    if (node.left) {
      swapper(node.left, level + 1);
      swapper(node.right, level + 1);
    }
  };

  collect(root);
  swapper(root);

  return root;
};

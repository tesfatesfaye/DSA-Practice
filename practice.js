var reverseOddLevels = function (root) {
  const values = {};
  const collect = (level = 0, node) => {
    if (!node) {
      return null;
    }

    if (level % 2 == 0 && node.left) {
      if (values[level] === undefined) {
        values[level] = [node.left.val, node.right.val];
      } else {
        values[level].push(node.left.val, node.right.val);
      }
    }
    if (node.left) {
      collect(level + 1, node.left);
      collect(level + 1, node.right);
    }
  };

  const swapper = (level = 0, node) => {
    if (!node) return null;

    if (level % 2 !== 0) {
      node.val = values[level - 1].pop();
    }
    if (node.left) {
      swapper(level + 1, node.left);
      swapper(level + 1, node.right);
    }
  };

  collect(0, root);
  console.log(values);
  swapper(0, root);

  return root;
};

var isValidBSTArray = function (root) {
  let values = [];

  const helper = (root) => {
    if (root.left) {
      helper(root.left);
    }
    values.push(root.val);

    if (root.right) {
      helper(root.right);
    }
  };

  helper(root);

  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] >= values[i + 1]) {
      return false;
    }
  }

  return true;
};


var isValidBST = function (root, max = null, min = null) {
  let left;
  let right;
  if (min !== null && root.val <= min) {
    return false;
  }
  if (max !== null && root.val >= max) {
    return false;
  }
  if (root.left) {
    let newMax = max !== null ? Math.min(max, root.val) : root.val;
    left = isValidBST(root.left, newMax, min);
  }
  if (left === false) return false;
  if (root.right) {
    let newMin = min !== null ? Math.max(min, root.val) : root.val;

    right = isValidBST(root.right, max, newMin);
  }
  if (right === false) return false;

  return true;
};
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }


  function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }


  const values = [-10, -3, 0, 5, 9];
  let head = null;
  let current = null;
  
  for (let i = 0; i < values.length; i++) {
    const newNode = new ListNode(values[i]);
    if (head === null) {
      head = newNode;
      current = newNode;
    } else {
      current.next = newNode;
      current = newNode;
    }
  }

  // console.log(head)





  var sortedListToBST = function (head) {
    const values = [];
    while (head) {
      values.push(head.val);
      head = head.next;
    }
    let startIndex = Math.floor(values.length / 2);

    const tree = new TreeNode(values[startIndex]);
      console.log(values[startIndex-2])
    const makeTree = (node, type = "left", index) => {
      
      if (values[index-1]===undefined || values[index+1] === undefined) return;
      if (type == "left") {
        node.left = new TreeNode(values[index - 1]);
        makeTree(node.left, type, index - 1);
      } else {
        
        node.right = new TreeNode(values[index + 1]);
        makeTree(node.right, "right", index + 1);
      }

      return tree;
    };

    makeTree(tree, "left", startIndex);
    makeTree(tree, "right", startIndex);

    return tree;
  };

  console.log(sortedListToBST(head))
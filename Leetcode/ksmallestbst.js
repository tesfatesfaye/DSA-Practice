var kthSmallest = function (root, k) {
  const values = [];
  const traverser = (root) => {
    if (root.left) {
      traverser(root.left);
    }
    if (values.length !== k) {
      values.push(root.val);
      if (root.right) {
        traverser(root.right);
      }
    }
  };
  traverser(root);

  return values.pop();
};

// var kthSmallest = function (root, k) {
//   const heap = [];

//   const swapper = (i, j) => ([heap[i], heap[j]] = [heap[j], heap[i]]);
//   const children = (index, left = true) => {
//     let childIndex = null;
//     if (left) {
//       childIndex = index * 2 + 1;
//     } else {
//       childIndex = index * 2 + 2;
//     }
//     return heap[childIndex] !== undefined ? childIndex : index;
//   };
//   const parent = (index) => Math.floor((index - 1) / 2);
//   const insert = (value) => {
//     heap.push(value);
//     let index = heap.length - 1;

//     while (index) {
//       let parentI = parent(index);
//       if (heap[parentI] > heap[index]) {
//         swapper(parentI, index);
//         index = parentI;
//       } else {
//         break;
//       }
//     }
//   };
//   const remove = () => {
//     let value = null;
//     if (heap.length) {
//       swapper(0, heap.length - 1);

//       value = heap.pop();
//       let index = 0;
//       while (true) {
//         let left = children(index);
//         let right = children(index, false);
//         let smallest = heap[left] < heap[right] ? left : right;
//         if (heap[index] > heap[smallest]) {
//           swapper(index, smallest);
//           index = smallest;
//         } else {
//           break;
//         }
//       }
//     }
//     return value;
//   };

//   const traverser = (root) => {
//     if (root.left) {
//       traverser(root.left);
//     }
//     if (heap.length !== k) {
//       insert(root.val);
//       if (root.right) {
//         traverser(root.right);
//       }
//     }
//     return heap;
//   };

//   traverser(root);
//   let kthValue = null;
//   while (k) {
//     k--;
//     if (!k) {
//       kthValue = remove();
//     } else {
//       remove();
//     }
//   }

//   return kthValue;
// };

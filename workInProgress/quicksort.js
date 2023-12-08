const quicksort = (arr) => {
    if (arr.length < 2) return arr;
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
    }

console.log(quicksort([1, 5, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]));
//   };
 
// const bubbleSort=(arr)=>{
    
//     for(let i=0;i<arr.length;i++){

//         let noSwaps=true

//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//                 noSwaps=false


//             }


//         }
//             if(noSwaps) return arr

//     }

//     return arr



// }


// console.log(bubbleSort([5,1,2,5,6,3]))




// const selection=(arr)=>{

// for(let i=0;i<arr.length-1;i++){
//     let lowest=i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[lowest]){
//             lowest=j


//         }
  

//     }

//     [arr[lowest],arr[i]]=[arr[i],arr[lowest]]

// }


// return arr




// }

// console.log(selection([5,1,2,5,6,3]))




var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
        if (items.length > 1) {
        //index returned from partition
        if (left < right) { //more elements on the left side of the pivot
            let index = partition(items, left, right);
            quickSort(items, left, index - 1);
            quickSort(items, index+1, right);
        }
       
    return items;
}
// first call to quick sort
}
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]




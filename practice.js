
const pivot=(arr,left,right)=>{
    const swap=(arr,one,two)=>{
        [arr[one],arr[two]]=[arr[two],arr[one]]
    }
    let middle=Math.floor((left+right)/2)
    swap(arr,left,right)
    //swaps values 
    let p=right
    let j=left
    let i=left-1
    while(j<p){
        if(arr[j]<arr[p]){
            i++;
            swap(arr,i,j)
            }
       
            j++;
        
    }
    i++;
    swap(arr,i,p)
    return i
}

const quickSort=(arr,left=0,right=arr.length-1)=>{
    if(left<right){
        let pivotIndex=pivot(arr,left,right)
        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex+1,right)
    }
    return arr
}

console.log(quickSort([5,2,3,8,10,11,4,3,19,2,1,4]))















const quickSortMultiArray=(array)=>{
if(array.length<=1){
    return array;
}
let middle=Math.floor(array.length/2)
let pivot=array[middle]
const leftArray=[]
const rightArray=[]
for(let i=0;i<array.length;i++){
    if(i!==middle){
    array[i] <pivot ? leftArray.push(array[i]) : rightArray.push(array[i])
    }
    
}
    return[...quickSortMultiArray(leftArray),pivot,...quickSortMultiArray(rightArray)]    
}


// console.log(quickSortMultiArray([5,12,8,9,6,2,11,5,3,4]))




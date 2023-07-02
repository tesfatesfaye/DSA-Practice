const quickSort=(array)=>{
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
    return[...quickSort(leftArray),pivot,...quickSort(rightArray)]    
}


console.log(quickSort([5,12,8,9,6,2,11,5,3,4]))




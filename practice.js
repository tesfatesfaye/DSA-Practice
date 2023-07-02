const quickSort=(array)=>{
if(array.length<=1){
    return array;
}
let middle=Math.floor(array.length/2)
let pivot=array[middle]
let counter=0
const leftArray=[]
const rightArray=[]
while(counter<array.length){
    if(counter!==middle){
    array[counter] <pivot ? leftArray.push(array[counter]) : rightArray.push(array[counter])
    }
    counter++
}


    return[...quickSort(leftArray),pivot,...quickSort(rightArray)]    
}


console.log(quickSort([5,12,8,9,6,2,11,5,3,4]))




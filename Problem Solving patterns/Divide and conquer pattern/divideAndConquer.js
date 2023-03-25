//highly utilized for sorting algorithm 
function binarySearch(arr,val){
if(arr.length===0){
return null
}
let minValue=0
let maxValue=arr.length-1
while(minValue<=max){
    let middle=Math.floor(maxValue/2)
    let currentValue=arr[middle]
    if(currentValue<val){
        minValue=middle
    }
    else if(middle>val){
        maxValue=middle
    }
}



}
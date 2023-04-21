// on square complexity 
const insertionSort=(arr)=>{
let jValue=0
    for(let i=1;i<arr.length;i++){

    let current=arr[i]
    for(let j=i-1;j>=0 && arr[j] > current;j--){
        arr[j+1]=arr[j]
        jValue=j+1
    }
    arr[jValue]=current
}
return arr

}

console.log(insertionSort([1,2,3,4]))
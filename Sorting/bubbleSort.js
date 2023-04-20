const bubbleSort=(arr)=>{
    let temp=0
    let counter=0
    let newArray=[]
    for(let i=0;i<arr.length;i++){
       for(let j=0;j<arr.length-i;j++){
        counter++
        console.log(arr)
        if(arr[j]>arr[j+1]){
             temp=arr[j+1]
           arr[j+1]=arr[j]
            arr[j]=temp
        }
       
       } 
       
    }
    console.log(counter)
    return arr

}
    console.log(bubbleSort([1,2,5,4,3,19,12,11]))






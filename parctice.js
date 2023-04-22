const bubbleSort=(arr)=>{
    
    for(let i=0;i<arr.length;i++){

        let noSwaps=true

        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                noSwaps=false


            }


        }
            if(noSwaps) return arr

    }

    return arr



}


console.log(bubbleSort([5,1,2,5,6,3]))




const selection=(arr)=>{

for(let i=0;i<arr.length-1;i++){
    let lowest=i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[lowest]){
            lowest=j


        }
  

    }

    [arr[lowest],arr[i]]=[arr[i],arr[lowest]]

}


return arr




}

console.log(selection([5,1,2,5,6,3]))
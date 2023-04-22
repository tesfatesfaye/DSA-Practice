const insertionSort=(arr)=>{ //my solution

    for(let i=1;i<arr.length;i++){

        let value=arr[i]
        for(let j=i-1;j>=0 && arr[j]>value;j--){
            arr[j+1]=arr[j]
            arr[j]=value
        }

    }
    return arr

}

console.log(insertionSort([4,5,6,1,2,19]))

const insertionSort=(arr)=>{ 
    

    for(let i=1;i<arr.length;i++){

        let value=arr[i]
        for(let j=i-1;j>=0 && arr[j]>value;j--){
            [arr[j+1],arr[j]]=[arr[j],value]
            
        }

    }
    return arr

}


const insertionSortTwo=(arr)=>{
    for(let i=1;i<arr.length;i++){
        let position=i
        let value=arr[i]
        for(let j=i-1;j>=0 && arr[j]>value;j--){ 
         
            arr[j+1]=arr[j]
            position=j
        
        }
        arr[position]=value
        
        
    }
    return arr
    
}

console.log(insertionSortTwo([4,5,6,1,2,19]))
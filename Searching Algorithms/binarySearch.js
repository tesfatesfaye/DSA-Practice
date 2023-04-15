const binarySearch=(arr,value)=>{

    let left=0;
    let right=arr.length-1
    let counter=0
    while(left<=right){
        let middle= Math.floor((right+left)/2)
      
        if(arr[middle]===value){ 
            console.log(counter=counter+1)
            return middle
        }
        else if(arr[middle]< value){
            left=middle+1
            
        }

        else if(arr[middle]>value){
            right=middle-1
        }

        
    }
    
        return -1    


    }
    console.log(binarySearch([1,3,4,6,8,9,11,12,15,16,17,18,19],15))
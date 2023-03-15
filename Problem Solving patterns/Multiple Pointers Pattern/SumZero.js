function sumZero(arrayInput){
    if (arrayInput.length<2){
        return false
    }
    
    for(let i=0;i<arrayInput.length-1;i++){
        for(let j=1;j<arrayInput.length;j++){
            if(arrayInput[i]+arrayInput[j]===0){
                return true
            }
        }

    }

    return false

}

console.log(sumZero([1,0,-1]))
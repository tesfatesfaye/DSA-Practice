
// the multiple pointer pattern is ideal for comparing values in sorted/between arrays
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

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))

function sumZeroMultiplePointer(arrayInput){
 if(arrayInput.length<2){
    return "not enough inputs"
 }
 
let leftValue=0;
let rightValue=arrayInput.length-1

while(rightValue>leftValue){
    let sum=arrayInput[leftValue]+arrayInput[rightValue]
    if(sum===0){
        return[arrayInput[leftValue],arrayInput[rightValue]]
    }
    else if(sum>0){
        rightValue--
    }

    else{
        leftValue++
    }

}
 return undefined

}


console.log(sumZeroMultiplePointer([-4,-3,-2,-1,0,1,2,3,10]))
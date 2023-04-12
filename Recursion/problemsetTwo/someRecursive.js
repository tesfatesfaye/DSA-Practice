
const isOdd=(value)=>value%2===0 ? false : true

function someRecursive(arrayOfValues,isOdd){
   
    if(arrayOfValues.length===0) return false
    if(isOdd(arrayOfValues[arrayOfValues.length-1])){
            return true
    }
    arrayOfValues.pop()
    return someRecursive(arrayOfValues,isOdd)
}

console.log(someRecursive([2,8,4,6,8,9],isOdd))
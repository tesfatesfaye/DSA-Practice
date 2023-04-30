const isSubsequence=(stringOne,stringTwo)=>{
if(stringOne.length>stringTwo){
    return false
}
let leftPointer=0
let rightPointer=0

while(rightPointer<stringTwo.length){
    if(stringOne[leftPointer]===stringTwo[rightPointer]){
        if(leftPointer===stringOne.length-1){
            return true
        }
        leftPointer++
    }
    if(stringOne.length-leftPointer>stringTwo.length-rightPointer){
        return false
    }

    rightPointer++

}

return false

}


console.log(isSubsequence("abc","babc"))
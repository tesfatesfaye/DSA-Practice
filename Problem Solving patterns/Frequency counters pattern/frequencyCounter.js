const frequencyCounter=(numOne,numTwo)=>{
const numOneString=numOne.toString()
const numTwoString=numTwo.toString()
if(numOneString.length!==numTwoString.length){
    return false
}
let numOneStringHolder={}

for(let char of numOneString){
    numOneStringHolder[numOneString] ? numOneStringHolder[char]+=1 : numOneStringHolder[char]=1
}
console.table(numOneStringHolder)
for(let char of numTwoString){
    if(!numOneStringHolder[char]){
        return false
    }
    numOneStringHolder[char]--

}
 return true

}

console.log(frequencyCounter(123,312))
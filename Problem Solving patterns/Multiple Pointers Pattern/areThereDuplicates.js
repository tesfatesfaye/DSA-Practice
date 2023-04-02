const areThereDuplicates=(...inputs)=>{// frequency counter pattern
const inputHolder={}

for(let value of inputs){
    if(!inputHolder[value]){
        inputHolder[value]=1
    }
    else {
        return true
    }
}
    return false


}

console.log(areThereDuplicates(1,2,3,2))
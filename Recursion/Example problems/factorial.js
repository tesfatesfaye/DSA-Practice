const factorialLoop=(num)=>{
let total=1
    while(num>0){
    total=total*num
    num--
}
    return total
}



const factorialRecursive=(num)=>{
    if(num===1){
        return 1
    }
    else if(num>1){
 return num * factorialRecursive(num-1)
    }
}

console.log(factorialRecursive(4))
const productOfArray=(arrayInput)=>{

    if(arrayInput.length===0) return 1

    return arrayInput[0]*productOfArray(arrayInput.splice(1))


}

console.log(productOfArray([1,2,3,10]))
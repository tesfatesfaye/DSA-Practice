const capitalizeFirst=(arrayStrings)=>{
    let helperArray=[]

    const helperFunction=(arr)=>{
    if(arrayStrings.length===0){
        return ''
    }
    helperArray.push(arrayStrings[0][0].toUpperCase()+arrayStrings[0].slice(1))
    arrayStrings.shift()
    helperFunction(arr)
}
    helperFunction(arrayStrings)
    return helperArray
}

console.log(capitalizeFirst(['car','taco','banana']))
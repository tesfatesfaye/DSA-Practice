const flatten=(arr)=>{
let flatArray=[]

    for(let item of arr){
        if(Array.isArray(item)){
            flatArray=[...flatArray,...flatten(item)]
        }

        else{
            flatArray.push(item)
        }


    }

    return flatArray



}

const flattenHelper=(arr)=>{
let flatArray=[]

const helper=(arr)=>{
    for(let i of arr){
        if(Array.isArray(i)){
            helper(i)
        }

        else {
            flatArray.push(i)
        }
    
    
    }

    return flatArray
}
    helper(arr)
    return flatArray

}

console.log(flattenHelper([1,2,3,4,[5,[6]],9]))

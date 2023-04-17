const flatten=(arr)=>{
let flatArray=[]

    for(let item of arr){
        if(Array.isArray(item)){
            flatArray.push(...flatten(item))
        }

        else{
            flatArray.push(item)
        }
    }

    return flatArray



}

const flattenHelper=(arr,n)=>{
let flatArray=[]

const helper=(arr,n)=>{
    
    if(n>0){
    for(let i of arr){
        if(Array.isArray(i)){
            helper(i,n-1)
        }

        else {
            flatArray.push(i)
        }
    
    
    }
    }

    else{
        flatArray.push(...arr)
    }


}


    helper(arr)
    return flatArray

}

console.log(flattenHelper([1,2,3,4,[5,[6]],9]))

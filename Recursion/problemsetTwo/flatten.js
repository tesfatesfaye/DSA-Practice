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


const validAnagram=(stringOne,stringTwo)=>{
    if(stringTwo.length!==stringOne.length){
        return false
    }
    let stringOneHolder={}
    let stringTwoHolder={}
    
    for(let value of stringOne){
        stringOneHolder[value] ? stringOneHolder[value]++ : stringOneHolder[value]=1 
    }
    
      for(let value of stringTwo){
        stringTwoHolder[value] ? stringTwoHolder[value]++ : stringTwoHolder[value]=1 
    }
    
    for(let value in stringOneHolder){
        if(!(stringTwoHolder[value])){
            return false
        }
        
        if(stringOneHolder[value]!==stringTwoHolder[value]){
            return false
        }
        
    }
    return true
  }

console.log(validAnagram("hello","ollhe"))


// Rewrote the function and made it cleaner

const validAnagramTwo=(stringOne,stringTwo)=>{
    if(stringOne.length!==stringTwo.length){
        return false
    }
    const stringOneHolder={}
    for(let value of stringOne){
        stringOneHolder[value] ? stringOneHolder[value]++ : stringOneHolder[value]=1
    }
    for(let value of stringTwo){
        if(!stringOneHolder[value]){
            return false
     }

     stringOneHolder[value]-=1
    }
    return true

}

console.log(validAnagramTwo("helloh","ollhey"))

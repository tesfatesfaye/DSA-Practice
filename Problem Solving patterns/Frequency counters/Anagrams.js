function validAnagram(stringOne,stringTwo){
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

console.log(anagrams("hello","ollhe"))


// Rewrote the function and made it cleaner

function anagramsTwo(stringOne,stringTwo){
    if(stringOne.length!==stringTwo.length){
        return false
    }
    
    let stringOneHolder={}
  
    
    for(let i of stringOne){
    
        stringOneHolder[i] ? stringOneHolder[i]+=1 : stringOneHolder[i]=1
    }
    
    for(let i of stringTwo){
        if(!(stringOneHolder[i])){
            return false;
        }
        stringOneHolder[i] -=1
    }
    
 
    return true
    

}

console.log(anagramsTwo("",""))

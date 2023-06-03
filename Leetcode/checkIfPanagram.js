const checkIfPangram=(unLowered)=>{
    if(unLowered.length<26) return false // will return false if the length is less than the number of letters in the alphabet
      let alphabetObject={}
    for(let i=0;i<unLowered.length;i++){ 
        alphabetObject[unLowered[i]]=1
    }
    if(Object.keys(alphabetObject).length===26){ 
        // after every letter has been accounted for 
          return true
        }


    return false
} 
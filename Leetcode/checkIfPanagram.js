const checkIfPangram=(sentence)=>{
    if(sentence.length<26) return false // will return false if the length is less than the number of letters in the alphabet
      let alphabetObject={}
    for(let i=0;i<sentence.length;i++){ 
        alphabetObject[sentence[i]]=1
    }
    if(Object.keys(alphabetObject).length===26){ 
        // after every letter has been accounted for 
          return true
        }


    return false
} 
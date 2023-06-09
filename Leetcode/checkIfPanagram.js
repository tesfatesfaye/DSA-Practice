const checkIfPangram=(sentence)=>{
    if(sentence.length<26) return false // will return false if the length is less than the number of letters in the alphabet
      let alphabetObject={}
    for(let i=0;i<sentence.length;i++){ 
          if(!alphabetObject[sentence[i]]){
          alphabetObject[sentence[i]]=true
          }
    }
    if(Object.keys(alphabetObject).length===26){ 
        // after every letter has been accounted for 
          return true
        }


    return false
} 

const checkIfPangramTwo = (sentence) => {
    if (sentence.length < 26) return false;
    let alphabetSet = new Set();
    for (let i = 0; i < sentence.length; i++) {
      alphabetSet.add(sentence[i]);
      if (alphabetSet.size === 26) {
        return true;
      }
    }
    return false;
  }



  const checkIfPangramThree = (sentence) => {
    if (sentence.length < 26) return false;
    let alphabetSet = new Set();
    for (let i = 0; i < sentence.length; i++) {
      if(alphabetSet.size+sentence.length-(i)<26){
        return false
      }
      alphabetSet.add(sentence[i]);
      if (alphabetSet.size === 26) {
        return true;
      }
   
    }
    return false;
  }
  // comment out what the function above 
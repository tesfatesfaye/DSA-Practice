var letterCombinations = function(digits) {
    let obj={}
    let charIndex=97
    
    for(let i=2;i<10;i++){
        obj[i]=[]
        for(let j=0;j<(3+(i===7||i===9 ? 1 : 0));j++){
          obj[i].push(String.fromCharCode(charIndex))
            charIndex++
        }
    }
    if(digits.length<=1){
      return ( digits.length===0 ? digits=[''] : digits=obj[digits])
    } 
    let digitsArr=[]
    for(let i=0;i<digits.length;i++){
        for(let j=0;j<obj[digits[i+1]].length;j++){
            
        }

    }

};

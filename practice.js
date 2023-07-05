var plusOne = function(digits,end=digits.length-1) {
    if(digits[end]===9&&end===0){
        digits[0]=0
        digits.unshift(1)
        return digits
    }
    if(digits[end]===9){
        digits[end]=0
        plusOne(digits,end-1)
    }
    else{
        digits[end]=digits[end]+1
    }
   
   return digits
    

};

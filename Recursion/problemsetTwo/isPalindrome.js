function isPalindrome(stringInput){
    
    if(stringInput.length%2!==0){
        if(stringInput.length===1) return true
    }

    if(stringInput.length%2===0){
        if(stringInput.length===0) return true
    }

        if(stringInput[0]===stringInput[stringInput.length-1]){
            return isPalindrome(stringInput.slice(1,stringInput.length-1))
        }
            
        else{
            return false
        }
    



}

console.log(isPalindrome("mikkimjj"))

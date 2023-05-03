const longestPalindrome=(str)=>{
   
    if(str.length<=1){
        if(str.length===0){
            return undefined
        }
        return str
    }
    let longestStart=0
    let longestEnd=1
    let length=1
    let right=str.length-1


    const isPalindrome=(str,start=0,end=str.length-1)=>{
      
        if(start<end){
            if(str[start]===str[end]){
                return isPalindrome(str,start+1,end-1)
            }
            else{
                return false
            }
    
        }
    
        
        return true
    
    }
    for(let i=0;i<str.length;i++){
        if(str.length-i<length){
            return str.slice(longestStart,longestEnd)
        }
      
        right=str.length-1
        while(i<right){
               
            if(isPalindrome(str,i,right)){
                if(right+1-i>length){
                    if(right===str.length-1){
                        return str.slice(i,str.length)
                    }
                    longestStart=i
                    longestEnd=right+1
                    length=longestEnd-longestStart
                   
                }
                break;
            }
            else{
                right--
            }

        }
    }

         return str.slice(longestStart,longestEnd)
        
}




console.log(longestPalindrome("babbb"))









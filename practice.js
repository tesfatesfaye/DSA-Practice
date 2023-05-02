const longestPalindrome=(str)=>{
   
    if(str.length<=1){
        if(str.length===0){
            return undefined
        }
        return str
    }
    let left=0
    let right=str.length-1

let longest=[0,1,1]
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
        if(str.length-i<longest[2]){
            return str.slice(longest[0],longest[1])
        }
      
        right=str.length-1
        while(i<right){
               
            if(isPalindrome(str,i,right)){
                if(right+1-i>longest[2]){
                    if(right===str.length-1){
                        return str.slice(i,str.length)
                    }
                    longest[0]=i
                    longest[1]=right+1
                    longest[2]=longest[1]-longest[0]
                   
                }
                break;
            }
            else{
                right--
            }

        }
    }

         return str.slice(longest[0],longest[1])
        
}




console.log(longestPalindrome("babbb"))









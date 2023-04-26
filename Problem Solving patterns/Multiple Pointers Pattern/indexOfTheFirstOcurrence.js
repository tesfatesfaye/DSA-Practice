const strStr = (haystack, needle) =>{
    let k=0
    for(let i=0;i<haystack.length;i++){
        if((haystack.length-i)<(needle.length)){
            return -1
        }

        while(i+k<haystack.length){
            if(haystack[i+k]===needle[k]){
                k++
                if(k===needle.length){
                    return i
                }
            }
            else{
                k=0
                break;
            }
           }
    }

    
            return -1;

};

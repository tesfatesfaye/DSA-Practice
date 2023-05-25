const lengthOfLongestSubstring=(s)=>{
let obj={}
let maxLength=0
let currentLength=0
let lastValue=0

    for(let i=0;i <s.length;i++){
        if((Object.hasOwn(obj, s[i])===false)|| obj[s[i]]<lastValue){
            
            currentLength++
            maxLength=Math.max(maxLength,currentLength)
         
            obj[s[i]]=i
                   }
        else {
                   
            currentLength=i-obj[s[i]]
            lastValue=obj[s[i]]
            obj[s[i]]=i
        }
           
    }
    return maxLength



}

console.log(lengthOfLongestSubstring("pwwkew"))
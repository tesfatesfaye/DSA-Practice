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




// const lengthOfLongestSubstring =(s) =>{
//     let leftValue=0
//     let rightValue=0
//     let obj={}
//     let strLength=""
//     let str=""
//     while(rightValue<s.length){
        
//         if(!obj[s[rightValue]]){
//             obj[s[rightValue]]=1
//             str=str+s[rightValue]
//             strLength.length<str.length ? strLength=str : ""
//             rightValue ++
//         }

//         else{
//             obj={}
//             leftValue++
//             rightValue=leftValue
//             obj[s[rightValue]]=1
//             str=s[rightValue]
//             rightValue++


//         }
//     }

  
//     return strLength.length
// };

// console.log(lengthOfLongestSubstring("dvdf"))





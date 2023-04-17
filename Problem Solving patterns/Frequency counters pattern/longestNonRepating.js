const lengthOfLongestSubstring =(s) =>{
    let leftValue=0
    let rightValue=0
    let obj={}
    let strLength=""
    let str=""



    while(rightValue<s.length){
        
        if(!obj[s[rightValue]]){
            obj[s[rightValue]]=1
            str=str+s[rightValue]
            strLength.length<str.length ? strLength=str : ""
            rightValue ++
        }

        else{
            obj={}
            leftValue++
            rightValue=leftValue
            obj[s[rightValue]]=1
            str=s[rightValue]
            rightValue++


        }
        




    }

  

    return strLength.length
};

console.log(lengthOfLongestSubstring("dvdf"))

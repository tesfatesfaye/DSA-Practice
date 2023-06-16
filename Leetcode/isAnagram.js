const isAnagram = (s, t) =>{
    if(s.length!==t.length) return false
    let sObj={}
   
    for(let i in s){
        sObj[s[i]] ? sObj[s[i]]++ :sObj[s[i]]=1
    }

    for(let j in t){
       if(!sObj[t[j]]){
           return false
       }
       sObj[t[j]]--
       if(sObj[t[j]]===0){
           delete sObj[t[j]]
       }
    }

    if(Object.keys(sObj).length!==0){
        return false
    }
       
 
    return true
};
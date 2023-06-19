const isValid = (s) =>{
    if(s.length%2!==0 || s.length===0) return false
    let objOpen={"(":0,"[":0,"{":0}
    let objClose={")":0,"]":0,"}":0}
    let lastOpen=[]
    let converter={"(":")","{":"}","[":"]",")":"(","}":"{","]":"["}
    for(let i=0;i<s.length;i++){
        if(objOpen[s[i]]>=0){
            lastOpen.push(s[i])
            objOpen[s[i]]= objOpen[s[i]]+1
           
        }
        else{
         
            if(lastOpen.length===0||converter[s[i]]!==lastOpen[lastOpen.length-1]){
                return false
            }
            lastOpen.pop()
            objClose[s[i]]= objClose[s[i]]+1
        }
    }
    for(let i in objOpen){
        if(objOpen[i]!==objClose[converter[i]]){
            return false
        }
    }

     return true 
};

console.log(isValid("(("))
const findLongestSubstring=(str)=>{
if(str.length===0) return 0
let mainStr=""
let temp=""
let start=0
let place=0
let strHolder={}
while(place<str.length){
if(!strHolder[str[place]]){
    strHolder[str[place]]=1
    temp+=str[place]
   if(mainStr.length<temp.length){
        mainStr=temp
   }
    place++
}
else{
    temp=str[place]
    strHolder={}
    strHolder[str[place]]=1
    place++
}


}

return mainStr

}

console.log(findLongestSubstring("thisisawesome"))


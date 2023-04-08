const findLongestSubstring=(str)=>{ // uses the sliding window patter and the frequency counter pattern
if(str.length===0) return 0
let start=0
let temp=str[start]
let mainStr=temp
let place=1
let strHolder={}
strHolder[str[start]]=1
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
    start++
    place=start+1
    temp=str[start]
    strHolder={}
    strHolder[str[start]]=1
   
}


}

return mainStr.length

}

console.log(findLongestSubstring("thisishowwedoit"))


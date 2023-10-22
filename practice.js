var romanToInt = function (s) {
  let sym = {
    I: 1,
    V: 5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  };
  
  let total=0
   while(left<s.length){

      if(sym[s[left]]<sym[s[right]]){
        total=total+(sym[s[right]]-sym[s[left]])
        left=right+1
        right+=2
      }
      else{
       total=total+sym[s[left]]
        left++
        right++;
      }
         
   }

   return total

};

console.log(romanToInt("MCMXCIV"));


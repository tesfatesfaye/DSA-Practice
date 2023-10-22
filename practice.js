var romanToInt = function (s) {
  let ob = {
    I: 1,
    V: 5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  };
  let total=0
  for(let i=0;i<s.length;i++){
    if(ob[s[i]]<ob[s[i+1]]){
      total-=ob[s[i]]
    }
    else{
      total+=ob[s[i]]
    }
  }
   return total

};

console.log(romanToInt("MCMXCIV"));


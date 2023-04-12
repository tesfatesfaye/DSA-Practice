const objChecker=(item)=>typeof item==="object" && !Array.isArray(item)

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  





const nestedEvenSum=(obj)=>{
  let sum=0
    for(let value in obj){
         
        if(objChecker(obj[value])){
             sum=sum+nestedEvenSum(obj[value])
         }

        else if(obj[value]%2===0){
             sum=sum+obj[value]
        }

    }
   
    return sum



}


console.log(nestedEvenSum(obj2))
// const minOfSubarray=(nums)=>{
// const obj={}
// const copy=(()=>{
//     let array=[]
//     for()
// })

const array = [1, 4, 3, 7, 4, 5];
const findMinValueSubarrayLeft=(array)=>{
    const obj = {};
    const copyFunction = () => {
      let ar = [];
      for (let i of array) {
        ar.push(i);
        obj[i] ? (obj[i] = obj[i] + 1) : (obj[i] = 1);
      }
      return ar;
    };
    const copy = copyFunction().sort((a, b) => a - b);
    let leftPointer = 0;

    let answer = [];

    for (let i = 0; i < array.length; i++) {
      answer.push(copy[leftPointer]);
      obj[array[i]]--;
      while (obj[copy[leftPointer]] === 0) {
        leftPointer++;
      }
    }
    return answer
}


console.log(answer)

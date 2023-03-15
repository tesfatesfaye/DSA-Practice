
function sumOfNTwo(n){
    return n *(n+1)/2
}
let time3=performance.now()
sumOfNTwo(10000)
let time4=performance.now()
console.log(time2-time1)
console.log(time4-time3)
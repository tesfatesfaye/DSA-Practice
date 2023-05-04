

function Single(val=null,next=null){
    this.val= val
    this.next=next
}
const mergeSort=(arr)=>{

    if(arr.length<=1) return arr
    let mid=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))
    return merge(left,right)
}

let car=new Single(5,new Single(7, new Single(1, new Single(2, new Single (6, new Single(3,))))))
let arry=[]


while(car){
    arry.push(car.val)
    car=car.next
}

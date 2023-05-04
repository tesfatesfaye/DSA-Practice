function Single(val=null,next=null){
    this.val= val
    this.next=next
}
let head=new Single(5,new Single(7, new Single(1, new Single(2, new Single (6, new Single(3,))))))

const sortSinglyLinkedList=(head)=>{
    const merge=(arr,arrTwo)=>{
        let leftPointer=0
        let rightPointer=0
        let mergedArray=[]
        
                while(leftPointer<arr.length && rightPointer <arrTwo.length){
        
                    if(arr[leftPointer]<arrTwo[rightPointer]){
                        mergedArray.push(arr[leftPointer])
                        leftPointer++
                    }
        
                    else if(arr[leftPointer]>arrTwo[rightPointer]) {
                        mergedArray.push(arrTwo[rightPointer])
                        rightPointer++
        
                    }
        
                    else{
                        mergedArray.push(arrTwo[rightPointer],arr[leftPointer])
                        rightPointer++
                        leftPointer++
                    }
        
        
                }
        
                if(leftPointer===arr.length){
                    for( let i=rightPointer;i<arrTwo.length;i++){
                        mergedArray.push(arrTwo[i])
                    }
                
                }
                else if(rightPointer===arrTwo.length){
                        for( let i=leftPointer;i<arr.length;i++){
                            mergedArray.push(arr[i])
                        }
                    
                   
                }
        
        
        
                return mergedArray
        
        
        }
        
    const mergeSort=(arr)=>{
    
        if(arr.length<=1) return arr
        let mid=Math.floor(arr.length/2)
        let left=mergeSort(arr.slice(0,mid))
        let right=mergeSort(arr.slice(mid))
        return merge(left,right)
    }
    
  
    let newHead=head
    let sortedHead=head
    let arry=[]
    
    
    while(head){
        arry.push(head.val)
        head=head.next
    }
    
    
    arry=mergeSort(arry)
    for(let i of arry){
        newHead.val=i
        newHead=newHead.next
    }
    return sortedHead
}



let sortedList=sortSinglyLinkedList(head)
console.log(sortedList)
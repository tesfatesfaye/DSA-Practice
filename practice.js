class Node{
    constructor(val){
        this.val=val
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedLists{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0

    }
    push(value){
        let pushedValue=new Node(value)
        if(!this.tail){
            this.head=pushedValue
            this.tail=pushedValue
                        
        }
        else {
            this.tail.next=pushedValue
            pushedValue.prev=this.tail
            this.tail=pushedValue
            

        }
        
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
      
        let currentTail=this.tail
        let newTail=this.tail.prev
        currentTail.prev=null
        newTail.next=null
        this.tail=newTail
        this.length--
        if(this.length===0)this.head=0
        return  currentTail
    }
}


const doubleList=new DoublyLinkedLists()

doubleList.push(4)
// console.log(doubleList.head.next.next.prev.prev.val)
console.log(doubleList.length)
console.log(doubleList.pop())
console.log(doubleList)
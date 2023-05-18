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
        if(this.length===1){
            this.head=null
            this.tail=null
        }

       
        else{
            this.tail=currentTail.prev
            currentTail.prev=null
            this.tail.next=null
        // let newTail=currentTail.prev
        // currentTail.prev=null
        // newTail.next=null
        // this.tail=newTail
        
    }
    this.length--
        
    return  currentTail
}
    shift(){
        if(!this.head) return undefined
        let currentHead=this.head
        if(this.length===1){
            this.head=null
            this.tail=null
        }
        else{
            this.head=currentHead.next
            currentHead.next=null
            this.head.prev=null
           
        }
        this.length--
        return currentHead
    }
    unShift(value){
        let newNode=new Node(value)
        if(this.length===0){
            this.head=newNode
            this.tail=newNode
        }
        else{
            this.head.prev=newNode
            newNode.next=this.head
            this.head=newNode
            
        }
        this.length++
        return this
    }
    
}
const doubleList=new DoublyLinkedLists()

doubleList.push(4)
doubleList.push(5)
doubleList.push(6)
doubleList.push(7)
doubleList.push(8)
doubleList.push(9)
// console.log(doubleList.head.next.next.prev.prev.val)
console.log(doubleList.length)
doubleList.pop()
console.log(doubleList)
doubleList.pop()

doubleList.shift()
doubleList.unShift(9)
console.log(doubleList.head.val)
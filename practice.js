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
}

// const NodeTester=new Node(13)
// NodeTester.next=new Node(14)
// NodeTester.next.prev=NodeTester
// console.log(NodeTester.next.prev.val)
const doubleList=new DoublyLinkedLists()
doubleList.push(5)
doubleList.push(6)
doubleList.push(4)
console.log(doubleList.head.next.next.prev.prev.val)
console.log(doubleList.length)

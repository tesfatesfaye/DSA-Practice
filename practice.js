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
        if(!this.tail){
            let pushedValue=new Node(value)
            this.head=pushedValue
            this.tail=pushedValue
            this.length=1
            
        }
        else {
            let pushedValue=new Node(value)
            this.tail.next=pushedValue
            pushedValue.prev=this.tail
            this.tail=pushedValue
            

        }
        return this
    }
}

// const NodeTester=new Node(13)
// NodeTester.next=new Node(14)
// NodeTester.next.prev=NodeTester
// console.log(NodeTester.next.prev.val)
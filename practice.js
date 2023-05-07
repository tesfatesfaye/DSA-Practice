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
}

const NodeTester=new Node(13)
NodeTester.next=new Node(14)
NodeTester.next.prev=NodeTester
console.log(NodeTester.next.prev.val)
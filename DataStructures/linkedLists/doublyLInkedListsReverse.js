class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

const reverse=(head)=>{
    let current=head
    let next;
    let prev;
    while(current){
     
         next=current.next
         prev=current.prev
        current.prev=next
        current.next=prev
        current=next
    }
    console.log(next?.val)
    return prev.prev

}

let node1= new Node(1)
let node2= new Node(2)
let node3= new Node(3)

node1.prev=null
node1.next=node2
node2.prev=node1
node2.next=node3
node3.prev=node2
node3.next=null
// console.log(node1)
let mk=reverse(node1)
console.log(mk.val)

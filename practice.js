class SinglyLinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new SinglyLinkedList(3);
let node2 = new SinglyLinkedList(2);
let node3 = new SinglyLinkedList(0);
let node4 = new SinglyLinkedList(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;


// node1 is the head of the linked list
console.log(node1);


// const reverseList=(head,prev=null)=>{
//     if(head===null) return prev
//     const next=head?.next
//     head.next=prev
//     return reverseList(next,head)
// }

// const getValues=(head)=>{
//     let node=head
//     const list=[]
//     while(node){
//         list.push(node.val)
//         node=node.next
//     }
//     return list
// }

// console.log(getValues(node1))
// console.log(getValues(reverseList(node1)))

const hasCycle=(head)=>{
    let slow=head,fast=head
    while(fast?.next){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast) return true
    }
    return false
}

console.log(hasCycle(node1))
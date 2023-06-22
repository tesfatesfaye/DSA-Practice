
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}



var swapPairs = function(head) {
if(!head||!head.next){
   return head
}
let dummyNode=new ListNode(0)
dummyNode.next=head
while(head && head.next){
   let secondNode=head.next
   head.next=secondNode.next
   secondNode.next=head
   head=head.next
}

return dummyNode.next


};

let list=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,))))
// console.log(list)
console.log(swapPairs(list))

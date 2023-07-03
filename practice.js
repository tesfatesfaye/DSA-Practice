
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
 
 }

const reverseKGroup=(head,k)=>{
if(k===1) return head
let dummy=new ListNode(0,head)
let counter=0
let current=head
let prev=dummy
let next;
let starter=head
while(current?.next){
    let checker=current
   while(counter<k){
    if(checker){
        checker=checker.next
        counter++
    }
    else{
        return dummy.next
    }
   } 
  
  
    while(counter){
      next=current.next
      current.next=prev
      prev=current
      current=next
      counter--

    }
    

   }

   return dummy.next
}







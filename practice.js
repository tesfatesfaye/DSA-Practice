
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
 
 }
 const getKth=(curr,k)=>{
    while(curr && k){
        curr=curr.next
        k--
    }
    return curr
}

const reverseKGroup=(head,k)=>{
if(k===1) return head


let dummy=new ListNode(0,head)
let groupPrevious=dummy
    while(true){
        let kth=getKth(groupPrevious,k)
        if(!kth) break
       let groupNext=kth.next
        let prev=kth.next
        let current= groupPrevious.next
        let temp;
        while(current!==groupNext){
             temp=current.next
            current.next=prev
            prev=current
            current=temp

        }
        temp=groupPrevious.next
        groupPrevious.next=kth
        groupPrevious=temp


    }

   return dummy.next
}







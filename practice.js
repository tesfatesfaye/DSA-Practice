
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let head=new ListNode(1, new ListNode(2, new ListNode(3,new ListNode(4, new ListNode(5)))))


    const swapPairs=(head)=>{
       
        let dummy= new ListNode(0,head)
        let previous=dummy
        let current=head
        while(current && current.next){
            let nextPair=current.next.next
            let second=current.next
            second.next=current
            current.next=nextPair
            previous.next=second
            previous=current
            current=nextPair
        }

            
        return dummy.next

    }



console.log(swapPairs(head))


 const middleNode = (head) =>{
    let fast=head, slow=head
    while(fast?.next){
        fast=fast.next.next
        slow=slow.next
    }
    return slow

};
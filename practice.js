class  ListNode {
    constructor(val,next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
}
const swapNodes = (head, k) =>{
    let dummy =new ListNode(0);
    dummy.next=head
    let start;
    let left=dummy
    let right=dummy
    for(let i=0;i<k;i++){
        if(left?.next){
            left=left.next
        }
        
    }
    if(!left) return head
    start=left
    while(left){
        left=left.next
        right=right.next
    }

    [start.val,right.val]=[right.val,start.val]



    return head
};
let head=new ListNode(1, new ListNode(2, new ListNode(3,new ListNode(4, new ListNode(5)))))
console.log(swapNodes(head,2))

class ListNode {
    constructor(val, next){
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
}

let head=new ListNode(1, new ListNode(2, new ListNode(3,new ListNode(4, new ListNode(5)))))
let headT=new ListNode(1, new ListNode(2))
let headtT=new ListNode(1)


var removeNthFromEnd = function(head, n) {
let length=0
if(n===0){
    head.next=null
    return head
}
let node;
let removedNode=head
while(removedNode){
removedNode=removedNode.next
length ++

}
console.log(length)
length=length-n
if(length<0) return null
if(length===0){
    node=head.next
    head.next=null
    return node
}
removedNode=head
while(length>0){
    node=removedNode
    removedNode=removedNode.next
    length--

}
node.next=removedNode.next
removedNode.next=null

return head



};





const removeNthFromEndMemo= (head, n) => {
    let length=0
    let removedNode=head
    let memo={}
    while(removedNode){
        memo[length]=removedNode
        removedNode=removedNode.next
       length ++
          
    }
        length=length-n
        if(length===0){
            return head.next
        }
            memo[length-1].next=memo[length].next
            return head
       

    
    
    };
// 
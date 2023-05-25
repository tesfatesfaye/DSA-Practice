const removeNthFromEnd = (head, n) => {
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
    console.log(removeNthFromEnd(head,2))
    console.log(removeNthFromEnd(headT,1))
console.log(removeNthFromEnd(headtT,1))
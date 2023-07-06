var rotateRight = function(head, k) {
    if(!head) return head
    let values=[]
    let node=head
    while(node){
        values.push(node)
        node=node.next
    }
    k=k>=values.length ? (k%values.length) : k
    if(k<=0){
    return head
    }
    node=head
    values[values.length-k-1].next=null
    values[values.length-1].next=head
    return values[values.length-k]


};
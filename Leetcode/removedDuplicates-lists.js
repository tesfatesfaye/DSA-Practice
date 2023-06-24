const deleteDuplicates =  (head)=> {

    let node = head
    if (node) {
        while (node.next) {
            if (node.next.val === node.val) {
                node.next = node.next.next
            }
            else {
                node = node.next
            }
        }

    }

    return head
};
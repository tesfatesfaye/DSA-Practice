
class ListNode {
   constructor(val, next) {
       this.val = (val === undefined ? 0 : val)
       this.next = (next === undefined ? null : next)
   }

}
const swapPairs = (head) => {

   let dummy = new ListNode(0, head)
   let pre = dummy
   let curr = head
   while (curr?.next) {
       let nextPair = curr.next.next
       let secondNode = curr.next
       curr.next = nextPair
       secondNode.next = curr
       pre.next = secondNode
       pre = curr
       curr = nextPair

   }
   return dummy.next

}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

console.log(swapPairs(head))


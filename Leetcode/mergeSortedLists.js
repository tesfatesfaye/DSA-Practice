class  ListNode {
    constructor(val,next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
}

const mergeTwoLists = (list1, list2) => {

    if (list1 && list2) {
        const mergedList = new ListNode()
        let mergedListHolder = mergedList


        while (list1 && list2) {
            if (list1.val <= list2.val) {
                mergedListHolder.val = list1.val

                list1 = list1.next
                if (list1) {
                    mergedListHolder.next = new ListNode()
                    mergedListHolder = mergedListHolder.next
                }

            }
            else {
                mergedListHolder.val = list2.val
                list2 = list2.next
                if (list2) {
                    mergedListHolder.next = new ListNode()
                    mergedListHolder = mergedListHolder.next
                }

            }
        }
        if (list1) {
            mergedListHolder.next = list1
        }
        else {
            mergedListHolder.next = list2
        }
       return mergedList

    }
    else if (list1) {
        return list1
    }
    return list2
}
let right = new ListNode(2)
right.next = new ListNode(2)
right.next.next = new ListNode(3)

let left = new ListNode(1)
left.next = new ListNode(3)
left.next.next = new ListNode(4)

console.log(mergeTwoLists(left, right))

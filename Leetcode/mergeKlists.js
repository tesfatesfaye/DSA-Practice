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

const mergeKLists = (lists)=> {
    if(lists.length===0) return null
    if (lists.length===1) return lists[0]
    let middle=Math.floor(lists.length/2)
    let start=mergeKLists(lists.slice(0,middle))
    let end=mergeKLists(lists.slice(middle))
    return mergeTwoLists(start,end)
};
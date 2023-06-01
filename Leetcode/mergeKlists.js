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
    let mergedList=new ListNode(null)
    if(!lists) return mergeKLists
        for(i of lists){
            mergedList=mergeTwoLists(mergedList,i)

        }
    return mergedList
};
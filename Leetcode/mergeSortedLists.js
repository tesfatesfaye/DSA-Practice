class ListNode{
    constructor(val=null,next=null){ 
    this.val= val
    this.next=next
    }
}
const head=new ListNode(1,new ListNode(3, new ListNode(4, new ListNode(4, new ListNode (7, new ListNode(8))))))
const headTwo=new ListNode(2,new ListNode(6, new ListNode(8, new ListNode(9, new ListNode (10, new ListNode(12))))))

function mergeTwoLists(listOne, listTwo){
 const mergedList=new ListNode()
 let mergedListHolder=mergedList
 let oneHolder=listOne;
 let twoHolder=listTwo;
            while(oneHolder&&twoHolder){
                if(oneHolder.val<=twoHolder.val){
                    mergedListHolder.val=oneHolder.val
                    mergedListHolder.next=new ListNode()
                    mergedListHolder= mergedListHolder.next
                    oneHolder=oneHolder.next
                }
                else{
                    mergedListHolder.val=twoHolder.val
                    mergedListHolder.next=new ListNode()
                    mergedListHolder=mergedListHolder.next
                    twoHolder=twoHolder.next
                }
                

            }
            if(oneHolder){
                while(oneHolder){
                    mergedListHolder.val=oneHolder.val
                    mergedListHolder.next=new ListNode()
                    mergedListHolder=mergedListHolder.next
                    oneHolder=oneHolder.next
                }
            }

            else{
                while(twoHolder){
                    mergedListHolder.val=twoHolder.val
                    mergedListHolder.next=new ListNode()
                    mergedListHolder=mergedListHolder.next
                    twoHolder=twoHolder.next
                }
            }

            return mergedList

}

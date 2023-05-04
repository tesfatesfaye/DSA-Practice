class Single{
    constructor(val=null,next=null){ 
    this.val= val
    this.next=next
    }
}
const head=new Single(1,new Single(3, new Single(4, new Single(4, new Single (7, new Single(8))))))
const headTwo=new Single(2,new Single(6, new Single(8, new Single(9, new Single (10, new Single(12))))))

function mergeList(listOne, listTwo){
 const mergedList=new Single()
 let mergedListHolder=mergedList
 let oneHolder=listOne;
 let twoHolder=listTwo;
            while(oneHolder&&twoHolder){
                if(oneHolder.val<=twoHolder.val){
                    mergedListHolder.val=oneHolder.val
                    mergedListHolder.next=new Single()
                    mergedListHolder= mergedListHolder.next
                    oneHolder=oneHolder.next
                }
                else{
                    mergedListHolder.val=twoHolder.val
                    mergedListHolder.next=new Single()
                    mergedListHolder=mergedListHolder.next
                    twoHolder=twoHolder.next
                }
                

            }
            if(oneHolder){
                while(oneHolder){
                    mergedListHolder.val=oneHolder.val
                    mergedListHolder.next=new Single()
                    mergedListHolder=mergedListHolder.next
                    oneHolder=oneHolder.next
                }
            }

            else{
                while(twoHolder){
                    mergedListHolder.val=twoHolder.val
                    mergedListHolder.next=new Single()
                    mergedListHolder=mergedListHolder.next
                    twoHolder=twoHolder.next
                }
            }

            return mergedList

}
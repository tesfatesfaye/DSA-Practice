const addTwoNumbers=(l1,l2)=>{
    let sumNode=new ListNode()
    let head=sumNode
    let remainder=0
    while(l1&&l2){
        let sum=l2.val+l1.val+remainder
        console.log(sum)
        if(sum>=10){
             sum=sum-10
             remainder=1
        }
        else{
            remainder=0
        }
        l1=l1.next
        l2=l2.next
        sumNode.val=sum
        if((l1 ||l2) || remainder===1){
            sumNode.next=new ListNode()
            sumNode=sumNode.next
        }

    }
        while(l1){
            let sum=l1.val+remainder
            if(sum>=10){
                sum=sum-10
                remainder=1
            }
            else{
                remainder=0
            }
            sumNode.val=sum
            if(l1.next|| remainder){
                sumNode.next=new ListNode()
                sumNode=sumNode.next
            }
            l1=l1.next
            
        }

      
                while(l2){
            let sum=l2.val+remainder
            if(sum>=10){
                sum=sum-10
                remainder=1
            }
            else{
                remainder=0
            }
            sumNode.val=sum
            if(l2.next || remainder){
                sumNode.next=new ListNode()
                sumNode=sumNode.next
            }
            l2=l2.next

        }
    
            if(remainder) sumNode.val=remainder

            return head
    
}

let l1=new ListNode(2,new ListNode(4,new ListNode(3)))
let l2=new ListNode(5,new ListNode(6,new ListNode(4)))
let k=(addTwoNumbers(l1,l2))
console.log(k.next.next.val)
let l3= new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9)))))))
let l4= new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9))))
k=(addTwoNumbers(l3,l4))
console.log(k.next.next.next.next.next.next.next.val)
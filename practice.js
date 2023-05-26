class ListNode {
        constructor(val,next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        }}

// let addTwoNumbers = function(l1, l2) {
//     let first=l1
//     let second=l2
//     let stringOne=''
//     let stringTwo=''
//     while(first){
//         stringOne=stringOne+first.val
//         first=first.next
//     }
//     while(second){
//         stringTwo=stringTwo+second.val
//         second=second.next
//     }
//         stringOne=stringOne.split('')
//         stringOne=stringOne.reverse()
//         stringOne=stringOne.join('')
//         stringOne=parseInt(stringOne)
//         // console.log(stringOne)
//         stringTwo=stringTwo.split('')
//         stringTwo=stringTwo.reverse()
//         stringTwo=stringTwo.join('')
//         stringTwo=parseInt(stringTwo)
//         // console.log(stringTwo)
//         first=(stringOne+stringTwo).toString()
//         // console.log(first)
//         second=first.length-1
//         let newValue=new ListNode()
//         let head=newValue
//             while(second>=0){
//                 newValue.val=parseInt(first[second])
//                 newValue.next= new ListNode()
//                 newValue=newValue.next
//                 second--
//             }

//     return head

    
// };



// console.log(addTwoNumbers(new ListNode(0),new ListNode(0)))
// console.log(addTwoNumbers(l3,l4))
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
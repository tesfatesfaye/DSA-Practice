// function pivot(arr, start = 0, end = arr.length - 1) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     // We are assuming the pivot is always the first element
//     let pivot = arr[start];
//     let swapIdx = start;

//     for (let i = start + 1; i <= end; i++) {
//       if (pivot > arr[i]) {
//         swapIdx++;
//         swap(arr, swapIdx, i);
//       }
//     }

//     // Swap the pivot from the start the swapPoint
//     swap(arr, start, swapIdx);
//     return swapIdx;
//   }


/**
 * Definition for singly-linked list.
 * 
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 */


// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//      }

//      let k=new ListNode(1)
//        k.next=new ListNode(2)
//      k.next.next=new ListNode(3)
    
//      console.log(k.val)
// var isPalindrome = function(head) {

//     let reversed= new ListNode()
//     let current=head
//         while(current!==null){
            
//             reversed.val=current.val
//             reversed=reversed.next
//             current=current.next
//         }
//         current=head
    
//     let next;
//     let previous=null
//     while(current!==null){
//         next=current.next
//               current.next=previous
//         previous=current
//         current=next
//     }
//     console.log(head)
//     return previous

// };


// console.log(isPalindrome(k))
const rotate = (nums, k) =>{
    let newArray=[]
    let end=nums.length-k
   if(k>nums.length){
       k=k%(nums.length)
       
   }
   if(k>0){
       while(end<nums.length){
           newArray.push(nums[end])
            end++
       }
          for(let i=0;i<nums.length-k;i++){
              newArray.push(nums[i])
          }

          for(let i=0;i<newArray.length;i++){
              nums[i]=newArray[i]
          }

   }
     

};
let value=[1,2,3,4,5,6,7]
rotate(value,3)
console.log(value)
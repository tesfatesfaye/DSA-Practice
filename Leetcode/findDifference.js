
const findDifference=(nums1,nums2)=>{
    let answer=[[],[]]
    let objOne={}
    let objTwo={}
    for(let i=0;i<nums1.length;i++){
            let numsT='0'+nums1[i]
            
        if(!objOne[numsT]){
            objOne[numsT]=1
        }
    }
    for(let i=0;i<nums2.length;i++){
        let numsT='0'+nums2[i]
        if(!objTwo[numsT]){
             objTwo[numsT]=1

        }
    }
        for(let i in objOne){
            
            if(!objTwo[i]){
                let value=parseInt(i.slice(1))
                answer[0].push(value)
            }
            else{
                delete objTwo[i]
            }
        }
        for(let i in objTwo){
               let value=parseInt(i.slice(1))
                answer[1].push(value)
            
        }    
    

        return answer
    }


    console.log(findDifference([1,1,2,3],[2,4,4,6]))
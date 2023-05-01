const average = (salary) =>{
    let min=Infinity
    let max=0
    let sum=0
    for(let i=0;i<salary.length;i++){
        if(salary[i]<min){
            min=salary[i]
        }
        sum=sum+salary[i]
        if(salary[i]>max){
            max=salary[i]
        }
    }
  
    sum=(sum-(min+max))/(salary.length-2)
    
    return sum
};
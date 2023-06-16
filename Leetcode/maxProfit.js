const maxProfit = (prices)=> {
    let highPrice=0
    let end=prices.length-1
     for(let i=end;i>0;i--){
        let left=prices[i-1]
        if(prices[end]<=left){
             end=i-1
                    }
        else{
        highPrice=Math.max(highPrice,prices[end]-left)
        }
             
    }
       return highPrice

};

console.log(maxProfit(7,6,4,3,1))
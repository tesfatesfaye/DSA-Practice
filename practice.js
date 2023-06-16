var maxProfit = function(prices) {
    let highPrice=0
    let end=prices.length-1
    let counter=1
    for(let i=end;i>0;i--){
        highPrice=Math.max(highPrice,(prices[end]-prices[i-1]))
        if(prices[end]<prices[i-1]){
            end=i-1
        }

    }
      return highPrice

};
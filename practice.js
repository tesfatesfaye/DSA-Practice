var searchRange = function (nums, target) {

    let start = 0
    let end = nums.length - 1
    let index = null
    while (start <= end) {
        let center = Math.floor((start + end) / 2)
        if (nums[center] === target) {
            index = center
            break;
        }
        else if (nums[center] > target) {
            end = center - 1
        }
        else {
            start = center + 1
        }
    }
    if (index === null) return [-1, -1]

    start = index
    end = index

    while (true) {
        if ((start - 1) < 0) {
            break;
        }
        if (nums[start-1] === target) {
            start --
            
        }
        else {
            break
        }
       
    }



    while (true) {
        if (end + 1 > (nums.length - 1)) {
            break;
        }
        if (nums[end+1] === target) {
            end ++
           
        }
        else {
            break;
        }

    }
    return [start, end]
};

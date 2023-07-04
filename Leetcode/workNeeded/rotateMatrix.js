var rotate = function(matrix) {
    let holder=JSON.parse(JSON.stringify(matrix))
       for(let i=0;i<matrix.length;i++){
        let lastValue=matrix.length-1
        for(let j=0;j<matrix.length;j++){
            matrix[i][j]=holder[lastValue][i]
            lastValue--
        }

    }
    
    return matrix

};

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(rotate(matrix))
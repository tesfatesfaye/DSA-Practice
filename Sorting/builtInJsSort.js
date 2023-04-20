//Js has it's own sorting function

//To sort alphabetically

let variables=["Hello", "Tom", "How are you","John","Andrew","Micheal","Robert"]
console.log(variables.sort())

// to sort from longest to shortest

console.log(variables.sort((a,b)=>a.length-b.length))

// to sort from shortest to longest

console.log(variables.sort((a,b)=>b.length-a.length))


// to sort from highest to lowest in terms of numeric value

let numericVariables=[24,17,1,8,19,14,10,5,6]
console.log(numericVariables.sort((a,b)=>a-b))

//to sort from lowest to highest value

console.log(numericVariables.sort((a,b)=>b-a))
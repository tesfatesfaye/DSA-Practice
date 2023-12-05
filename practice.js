const checkAlmostEquivalentIII = (word1, word2) => {
  const frequencies=new Map()
  for(let i of word1){
    frequencies.has(i) ? frequencies.set(i,frequencies.get(i)+1) : frequencies.set(i,1)
  }
  for(let i of word2){
    frequencies.has(i)
      ? frequencies.set(i, frequencies.get(i) -1)
      : frequencies.set(i, -1);
  }

  for( let i of frequencies){
    if(Math.abs(frequencies.get(i[0]))>3)return false
  }
  return true
}

console.log(checkAlmostEquivalentIII("abaaacccc", "abcdeef"));
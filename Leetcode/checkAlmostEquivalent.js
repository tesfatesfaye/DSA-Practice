// two versions
const mapSetter = (map, word, set) => {
  for (let i of word) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
    set !== undefined ? set.add(i) : "";
  }
};

//version without sets
// const compare = (mapI, mapII, key) => {
//   let difference = 0;
//   if (mapII.has(key)) {
//     difference = Math.abs(mapI.get(key) - mapII.get(key));
//     mapII.delete(key);
//   } else {
//     difference = mapI.get(key);
//   }
//   mapI.delete(key);
//   return difference;
// };

// const checkAlmostEquivalent = (word1, word2) => {
//   const word1map = new Map();
//   const word2map = new Map();
//   mapSetter(word1map, word1);
//   mapSetter(word2map, word2);
//   for (let i of word1map) {
//     let value = compare(word1map, word2map, i[0]);
//     if (value > 3) return false;
//   }
//   for (let i of word2map) {
//     let value = compare(word2map, word1map, i[0]);
//     if (value > 3) return false;
//   }
//   return true;
// };

// console.log(checkAlmostEquivalent("abaaacccc", "abcdeef"));

//version with sets
const checkAlmostEquivalent = (word1, word2) => {
  const keys = new Set();
  const word1map = new Map();
  const word2map = new Map();
  mapSetter(word1map, word1, keys);
  mapSetter(word2map, word2, keys);
  for (let i of keys) {
    let difference = 0;
    if (word1map.has(i) && word2map.has(i)) {
      difference = Math.abs(word1map.get(i) - word2map.get(i));
    } else if (word1map.has(i)) {
      difference = word1map.get(i);
    } else {
      difference = word2map.get(i);
    }
    if (difference > 3) return false;
  }
  return true;
};

console.log(checkAlmostEquivalent("abaaacccc", "abcdeef"));

const checkAlmostEquivalentTwo = (word1, word2) => {
  const valuesCount = Array.from({ length: 26 }, () => 0);
  for (let i = 0; i < word1.length; i++) {
    valuesCount[word1[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  for (let i = 0; i < word2.length; i++) {
    valuesCount[word2[i].charCodeAt(0) - "a".charCodeAt(0)] -= 1;
  }
  for (let i = 0; i < valuesCount.length; i++) {
    if (Math.abs(valuesCount[i]) > 3) return false;
  }
  return true;
};

console.log(checkAlmostEquivalentTwo("abaaaccccc", "abcdeef"));

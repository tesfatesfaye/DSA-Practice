const numberOfMatches =  (n)=> {
  let matchCount = 0;
  while (n > 1) {
    if (n % 2 !== 0) {
      matchCount += (n - 1) / 2;
      n = Math.floor(n / 2) + 1;
    } else {
      matchCount += n / 2;
      n = n / 2;
    }
  }

  return matchCount;
};

console.log(numberOfMatches(14));

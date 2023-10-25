const numTrees = (n) => {
  let nFactorial = 1;
  let twoNFactorial = 1;
  for (let i = 1; i <= n * 2; i++) {
    twoNFactorial = twoNFactorial * i;
    if (i === n) {
      nFactorial = twoNFactorial;
    }
  }

  let value = twoNFactorial / (nFactorial * (n + 1) * nFactorial);

  return value;
};

console.log(numTrees(3));

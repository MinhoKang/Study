const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [M, N] = input.map(Number);

const NMinusNNums = Array.from({ length: N - M + 1 }).map((_, i) => i + M);

const isPrimeNumber = (number) => {
  const divisions = Array.from({ length: number })
    .map((_, i) => i + 1)
    .reduce((acc, cur) => {
      number % cur === 0 && acc.push(cur);
      return acc;
    }, []);

  return divisions.length === 2 ? true : false;
};

const primeNums = NMinusNNums.reduce((a, c) => {
  const isNumPrime = isPrimeNumber(c);
  isNumPrime && a.push(c);
  return a;
}, []);

const sumOfPrimeNums = primeNums.reduce((a,c) => a+c,0)

console.log(sumOfPrimeNums || -1)
primeNums[0] && console.log(primeNums[0]);

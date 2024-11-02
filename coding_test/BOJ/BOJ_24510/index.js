const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;

// const answer = rest.reduce((a, c) => {
//   const splitFor = c.split("for");
//   const splitWhile = c.split("while");

//   splitFor.forEach((a) => !a && a++);
//   splitWhile.forEach((a) => !a && a++);

//   return a;
// }, 0);

// console.log(answer);

let max = 0;
let count = 0;

for (line of rest) {
  const splitFor = line.split("");
  const splitWhile = line.split("");

  if (max < count) {
    max = count;
  }

  count = 0;
}

console.log(max);

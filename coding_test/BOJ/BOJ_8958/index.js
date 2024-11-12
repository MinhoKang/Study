const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;

let scores = "";

for (let i = 0; i < +T; i++) {
  const oxs = rest[i].split("");
  let score = 0;
  let chain = 1;
  for (let j = 0; j < oxs.length; j++) {
    const currentValue = oxs[j];
    const prevValue = oxs[j - 1];
    if (currentValue === "O" && currentValue === prevValue) {
      chain++;
    } else {
      chain = 1;
    }
    if (currentValue === "O") {
      score += chain;
    }
  }
  scores += score + "\n";
}

console.log(scores.trim());

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;

let DScore = 0;
let PScore = 0;

for (let i = 0; i < N; i++) {
  const diff = Math.abs(DScore - PScore);
  if (diff === 2) {
    break;
  }

  rest[i] === "D" ? DScore++ : PScore++;
}

console.log(`${DScore}:${PScore}`);

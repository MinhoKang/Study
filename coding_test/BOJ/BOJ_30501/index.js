const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = +input[0];

let him = undefined;

for (let i = 1; i <= N; i++) {
  const name = input[i];
  if (name.includes("S")) {
    him = name;
    break;
  }
}

console.log(him);

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;

const cases = rest.map((i) => i.split(" ").map(Number));

for (let i = 0; i < +T; i++) {
  const [A,B] = cases[i]
  const 

}

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, ...rest] = input;
let done = 0;
for (let i = 0; i < N[0]; i++) {
  const plan = rest[0];
  const real = rest[1];

  plan[i] <= real[i] && done++;
}

console.log(done);

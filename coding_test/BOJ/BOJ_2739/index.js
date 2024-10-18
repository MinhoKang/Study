const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

const N = Number(input[0]);

for (i = 1; i <= 9; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}

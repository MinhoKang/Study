const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

const n = Number(input);

let sum = 0;
for (i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

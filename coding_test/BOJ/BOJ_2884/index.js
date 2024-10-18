const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

const H = input[0];
const M = input[1];

if (M >= 45) {
  console.log(H, M - 45);
} else {
  console.log(H === 0 ? 23 : H - 1, 60 + M - 45);
}

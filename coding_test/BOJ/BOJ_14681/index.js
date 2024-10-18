const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n").map(Number);

const A = input[0];
const B = input[1];

if (A > 0 && B > 0) {
  console.log(1);
} else if (A < 0 && B > 0) {
  console.log(2);
} else if (A < 0 && B < 0) {
  console.log(3);
} else if (A > 0 && B < 0) {
  console.log(4);
}

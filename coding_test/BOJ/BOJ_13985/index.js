const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

const num1 = +input[0];
const num2 = +input[2];
const num3 = +input[4];

if (num1 + num2 === num3) {
  console.log("YES");
} else {
  console.log("NO");
}

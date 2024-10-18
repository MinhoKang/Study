const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

const A = input[0];
const B = input[1];
const C = input[2];

if (A === B && A === C && C === B) {
  console.log(10000 + A * 1000);
} else if (A !== B && A !== C && C !== B) {
  
  console.log(1000);
}

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const T = +input[0];
let answer = "";

for (i = 1; i <= T; i++) {
  const value = input[i].split(" ");
  answer += `Case #${i}: ${+value[0]} + ${+value[1]} = ${+value[0] + +value[1]} \n`;
}

console.log(answer);

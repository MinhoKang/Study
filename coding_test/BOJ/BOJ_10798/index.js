const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let answer = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < input[i].length; j++) {
    answer += input[j][i];
  }
}

console.log(answer)
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const N = +input;

let answer = "";

for (let i = 0; i < N; i++) {
  answer += `Hello World, Judge ${i + 1}! \n`;
}

console.log(answer.trim());

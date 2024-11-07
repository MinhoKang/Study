const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let answer = "";

for (let i = 1; i <= +input[0]; i++) {
  const [A, B] = input[i].split(",").map(Number);
  const sum = A + B;
  answer += sum + "\n";
}

console.log(answer.trim());

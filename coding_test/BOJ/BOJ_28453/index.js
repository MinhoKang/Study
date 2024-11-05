const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = +input[0];
const levels = input[1].split(" ").map(Number);

let answer = "";

for (let i = 0; i < N; i++) {
  const level = levels[i];

  if (level === 300) {
    answer += "1 ";
  } else if (level < 300 && level >= 275) {
    answer += "2 ";
  } else if (level < 275 && level >= 250) {
    answer += "3 ";
  } else if (level < 250) {
    answer += "4 ";
  }
}

console.log(answer.trim());

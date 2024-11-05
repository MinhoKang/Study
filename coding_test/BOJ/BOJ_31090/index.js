const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;

let answer = "";

for (let i = 0; i < T; i++) {
  const year = Number(rest[i]);
  const lastTwo = year % 100;
  if ((year + 1) % lastTwo === 0) {
    answer += "Good \n";
  } else {
    answer += "Bye \n";
  }
}

console.log(answer.trim());

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let answer = "";

for (let i = 0; i < input.length; i++) {
  const sum = input[i].reduce((a, c) => a + c);

  if (sum === 4) {
    answer += "E\n";
  } else if (sum === 0) {
    answer += "D\n";
  } else if (sum === 2) {
    answer += "B\n";
  } else if (sum === 1) {
    answer += "C\n";
  } else if (sum === 3) {
    answer += "A\n";
  }
}
console.log(answer.trim());

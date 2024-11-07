const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

let answer = "";

for (let i = 0; i < input.length; i += 10) {
  answer += input.slice(i, i + 10) + "\n";
}

console.log(answer);

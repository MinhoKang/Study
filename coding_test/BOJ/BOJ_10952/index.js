const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

let answer = "";

for (i = 0; i < input.length - 1; i++) {
  const value = input[i].split(" ");

  if (+value[0] === 0 && +value[1] === 0) {
    break; // A와 B가 둘 다 0이면 종료
  }

  answer += +value[0] + +value[1] + "\n";
}

console.log(answer.trim());

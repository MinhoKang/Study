const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;

let answer = "";

for (let i = 0; i < +N; i++) {
  const [x, f] = rest[i].split(" ");

  const line = f.repeat(Number(x));

  answer += `${line}\n`;
}

console.log(answer.trim());

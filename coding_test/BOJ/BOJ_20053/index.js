const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;
let answer = "";
for (let i = 0; i < +T * 2; i += 2) {
  const nums = rest[i + 1];
  const numArr = nums.split(" ").map(Number);

  const min = Math.min(...numArr);
  const max = Math.max(...numArr);

  answer += `${min} ${max}\n`;
}

console.log(answer.trim());

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;

let answer = "";

for (let i = 0; i < N; i++) {
  if (answer.length >= M) break;
  answer += N;
}

const answer2= answer.length >M ? answer.slice(0,M) : answer
console.log(answer2);

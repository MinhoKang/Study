const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const candi = [];

for (let i = 0; i < input.length; i++) {
  const sum = input[i].reduce((a, c) => a + c);
  candi.push(sum);
}
const winner = Math.max(...candi);
const who = candi.findIndex((i) => i === winner);

console.log(who + 1, winner);
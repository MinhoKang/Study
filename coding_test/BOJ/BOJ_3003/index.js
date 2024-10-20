const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const CHESS_NUMS = [1, 1, 2, 2, 2, 8];
let answer = ''

input.map((num, index) => {
  const diff = CHESS_NUMS[index] - num;
  answer += `${diff} `
});
console.log(answer)
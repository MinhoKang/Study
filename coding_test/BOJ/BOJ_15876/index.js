const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, k] = input;
let binaryLine = "";
let num = 0;
let index = k - 1;
let answer = [];

const toBinary = (n) => {
  if (n === 0) return "0";
  if (n === 1) return "1";

  return toBinary(Math.floor(n / 2)) + (n % 2);
};

while (binaryLine.length <= n * 5) {
  binaryLine += toBinary(num);

  num++;
}

while (answer.length !== 5) {
  answer.push(binaryLine[index]);

  index += n;
}

console.log(answer.join(" "));

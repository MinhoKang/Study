const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B] = input;

const AatB = (num1, num2) => {
  return (A + B) * (A - B);
};

console.log(AatB(A, B));

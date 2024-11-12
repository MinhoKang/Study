const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [X, Y] = input;

const reverse = (num) => {
  const numArr = num.toString().split("").map(Number);
  return +numArr.reverse().join("");
};
const reversedXY = reverse(X) + reverse(Y);

console.log(reverse(reversedXY));

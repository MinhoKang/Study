const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const N = +input;

const toBinary = (n) => {
  if (n === 0) return "0";
  if (n === 1) return "1";

  return toBinary(Math.floor(n / 2)) + (n % 2);
};

const binaryN = toBinary(N);
const binaryNArr = binaryN.split("");
const reverse = binaryNArr.reverse();
const answer = parseInt(reverse.join(""), 2);
console.log(answer);

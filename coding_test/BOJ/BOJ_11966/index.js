const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const N = +input;

const toBinary = (n) => {
  if (n === 0) return "0";
  if (n === 1) return "1";

  return toBinary(Math.floor(n / 2)) + (n % 2);
};

const nMinusOneBinary = toBinary(N - 1);
const is2Square = N === 1 ? true : !nMinusOneBinary.split("").includes("0");

console.log(is2Square ? 1 : 0);

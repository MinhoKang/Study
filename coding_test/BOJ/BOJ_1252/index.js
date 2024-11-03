const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

const [A, B] = input;

const toBinary = (n) => {
  if (n === 0) return "0";
  if (n === 1) return "1";

  return toBinary(Math.floor(n / 2)) + (n % 2);
};

const decimalA = BigInt("0b" + A, 2);
const decimalB = BigInt("0b" + B, 2);

const sum = decimalA + decimalB;

console.log(sum.toString(2));

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const decimalNumber = parseInt(input, 10); // 입력을 10진수로 변환

const toBinary = (n) => {
  if (n === 0) return "0";
  if (n === 1) return "1";

  return toBinary(Math.floor(n / 2)) + (n % 2);
};

console.log(toBinary(decimalNumber));

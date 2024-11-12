const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split("").map(Number));

console.log(input);

// const isPalindrome = (nums) => {
//   const numbers = nums.split("").map(Number);
//   console.log(numbers);
//   if (numbers[numbers.length - 1] === "0") return false;
// };

// console.log(isPalindrome(input[2]));

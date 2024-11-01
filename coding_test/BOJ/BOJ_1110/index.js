const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

let num = Number(input);
let count = 0;

while (true) {
  const sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  count++;

  if (num === Number(input)) break;
}

console.log(count);

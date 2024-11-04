const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const n = BigInt(input);

const quotient = n / 5n;
const rest = n % 5n;
console.log(((quotient % 5n) % 2n).toString());
if (((quotient % 5n) % 2n).toString() !== "0") {
  console.log(rest.toString());
} else {
  console.log(5 - Number(rest.toString()));
}

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let Quarter = 0,
  Dime = 0,
  Nickel = 0,
  Penny = 0;
for (let i = 1; i < input.length; i++) {
  let change = input[i];

  while (change > 0) {
    if (change >= 25) {
      const mok = Math.floor(change / 25);
      Quarter += mok;
      change -= mok * 25;
    } else if (change >= 10) {
      const mok = Math.floor(change / 10);
      Dime += mok;
      change -= mok * 10;
    } else if (change >= 5) {
      const mok = Math.floor(change / 5);
      Nickel += mok;
      change -= mok * 5;
    } else if (change >= 1) {
      const mok = Math.floor(change / 1);
      Penny += mok;
      change -= mok;
    }
  }
  console.log(Quarter, Dime, Nickel, Penny);
  Quarter = 0;
  Dime = 0;
  Nickel = 0;
  Penny = 0;
}

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;

let sum = 0;

for (let i = 0; i < +T; i++) {
  const [a, b] = rest[i].split(" ").map(Number);
  let first = 0;
  if (a === 1) {
    first += 500;
  } else if (a === 2 || a === 3) {
    first += 300;
  } else if (a > 3 && a <= 6) {
    first += 200;
  } else if (a > 6 && a <= 10) {
    first += 50;
  } else if (a > 10 && a <= 15) {
    first += 30;
  } else if (a > 15 && a <= 21) {
    first += 10;
  }
  let second = 0;
  if (b === 1) {
    second += 512;
  } else if (b > 1 && b <= 3) {
    second += 256;
  } else if (b > 3 && b <= 7) {
    second += 128;
  } else if (b > 7 && b <= 15) {
    second += 64;
  } else if (b > 15 && b <= 31) {
    second += 32;
  }

  console.log((first + second) * 10000);
}

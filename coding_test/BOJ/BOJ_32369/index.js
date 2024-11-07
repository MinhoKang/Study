const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, A, B] = input;

let good = 1,
  bad = 1,
  temp = 0;

for (let i = 0; i < N; i++) {
  good += A;
  bad += B;
  if (good < bad) {
    temp = good;
    good = bad;
    bad = temp;
  }
  if (good === bad) {
    bad--;
  }
}

console.log(good, bad);

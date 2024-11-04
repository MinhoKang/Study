const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [S, F] = input;

const diff = F - S;
let fine = 0;

if (F - S <= 0) {
  console.log("Congratulations, you are within the speed limit!");
} else if (F - S > 0) {
  if (diff > 1 && diff <= 20) {
    fine += 100;
  } else if (diff >= 21 && diff <= 30) {
    fine += 270;
  } else if (diff >= 31) {
    fine += 500;
  }
  console.log(`You are speeding and your fine is $${fine}.`);
}

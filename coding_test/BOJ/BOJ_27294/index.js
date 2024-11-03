const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [T, S] = input;

// 아침 => T >=0 && T <=11
// 점심 => T>=12 && T <=16
// 저녁 => T>=17

if (S === 1 || T < 12 || T > 16) {
  console.log(280);
} else if (S === 0 && T >= 12 && T <= 16) {
  console.log(320);
}

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

let max = 0;
let hall = "";

for (let i = 0; i < input.length; i++) {
  const [title, num] = input[i];

  if (+num > max) {
    max = +num;
    hall = title;
  }
}
console.log(hall);

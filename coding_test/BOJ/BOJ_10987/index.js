const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("");

const count = input.reduce((a, c) => {
  ["a", "e", "i", "o", "u"].includes(c) && a++;

  return a;
}, 0);

console.log(count);

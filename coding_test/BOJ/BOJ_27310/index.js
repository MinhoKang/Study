const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("");

let under = 0;
let col = 0;

input.forEach((i) => {
  if (i === ":") {
    col++;
  } else if (i === "_") {
    under++;
  }
});

console.log(input.length + col + under * 5);

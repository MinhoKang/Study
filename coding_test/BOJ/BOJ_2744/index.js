const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("");

const reversed = input.reduce((a, c) => {
  if (c === c.toUpperCase()) {
    a.push(c.toLowerCase());
  } else if (c === c.toLowerCase()) {
    a.push(c.toUpperCase());
  }

  return a;
}, []);

console.log(reversed.join(""));

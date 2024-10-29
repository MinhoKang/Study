const fs = require("fs");
const input = +fs.readFileSync("./input.txt").toString().trim();

const re = (input) => {
  if (input === 1 || input === 0) return 1;

  return input * re(input - 1);
};

console.log(re(input));

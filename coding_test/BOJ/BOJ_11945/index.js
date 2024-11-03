const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;

const reverse = rest.reduce((a, c) => {
  const revered = c.split("").reverse().join("");
  a.push(revered);

  return a;
}, []);

console.log(reverse.join("\n"));

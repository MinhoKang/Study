const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(""));

const lines = input.reduce((a, c) => {
  if (c.join("") === "END") return a;
  const reverse = c.reverse().join("");
  a.push(reverse);
  return a;
}, []);

console.log(lines.join("\n"));

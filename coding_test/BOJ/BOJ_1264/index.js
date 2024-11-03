const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split("").map((a) => a.toLowerCase()));

const aeiou = input.reduce((a, c) => {
  if (c[0] === "#") return a;
  const count = c.reduce((q, e) => {
    ["a", "e", "i", "o", "u"].includes(e) && q++;

    return q;
  }, 0);

  a.push(count);
  return a;
}, []);

console.log(aeiou.join("\n"));

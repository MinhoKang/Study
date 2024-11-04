const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("");

const mobis = ["M", "O", "B", "I", "S"];

const isMobis = input.reduce((a, c) => {
  if (mobis.includes(c.toUpperCase()) && !a.includes(c)) {
    a.push(c);
  }
  return a;
}, []);

console.log(isMobis.length === 5 ? "YES" : "NO");

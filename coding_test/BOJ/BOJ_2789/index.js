const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const censorship = "CAMBRIDGE".split("");

const word = input.split("").reduce((a, c) => {
  if (!censorship.includes(c)) {
    a.push(c);
  }
  return a;
}, []);

console.log(word.join(""));

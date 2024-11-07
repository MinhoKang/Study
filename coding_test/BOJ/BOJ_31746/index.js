const fs = require("fs");
const input = +fs.readFileSync("./input.txt").toString().trim();

const howMany = input % 2;
const line = "SciComLove";

if (howMany === 1) {
  const lineArr = line.split("");
  console.log(lineArr.reverse().join(""));
} else {
  console.log(line);
}

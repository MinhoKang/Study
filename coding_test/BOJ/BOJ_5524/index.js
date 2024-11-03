const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;

rest.forEach((i) => {
  const lower = i
    .split("")
    .map((a) => a.toLowerCase())
    .join("");

  console.log(lower);
});

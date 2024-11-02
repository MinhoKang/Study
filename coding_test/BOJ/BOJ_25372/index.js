const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;

rest.forEach((i) =>
  i.length >= 6 && i.length <= 9 ? console.log("yes") : console.log("no")
);

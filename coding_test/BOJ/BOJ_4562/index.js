const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, ...rest] = input;

rest.forEach((i) => {
  const [a, b] = i.split(" ").map(Number);

  if (a < b) {
    console.log("NO BRAINS");
  } else {
    console.log("MMM BRAINS");
  }
});

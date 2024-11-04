const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const firstThree = input.slice(0, 3);

if (firstThree === "555") {
  console.log("YES");
} else {
  console.log("NO");
}

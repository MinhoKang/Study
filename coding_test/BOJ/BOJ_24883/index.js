const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

if (input === "N" || input === "n") {
  console.log("Naver D2");
} else {
  console.log("Naver Whale");
}

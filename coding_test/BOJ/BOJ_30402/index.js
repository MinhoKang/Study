const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "))
  .flat();

for (let i = 0; i < input.length; i++) {
  if (input[i] === "w") {
    console.log("chunbae");
    break;
  } else if (input[i] === "b") {
    console.log("nabi");
    break;
  } else if (input[i] === "g") {
    console.log("yeongcheol");
    break;
  }
}

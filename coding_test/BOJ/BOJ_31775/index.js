const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.charAt(0));

const abc = input.sort();

const first = abc[0] === "k";
const second = abc[1] === "l";
const third = abc[2] === "p";

if (first && second && third) {
  console.log("GLOBAL");
} else {
  console.log("PONIX");
}

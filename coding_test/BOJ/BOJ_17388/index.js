const { log } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sum = input.reduce((a, c) => a + c);

if (sum >= 100) {
  console.log("OK");
} else {
  const low = Math.min(...input);

  const index = input.findIndex((a) => a === low);

  if (index === 0) {
    console.log("Soongsil");
  } else if (index === 1) {
    console.log("Korea");
  } else {
    console.log("Hanyang");
  }
}

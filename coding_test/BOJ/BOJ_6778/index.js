const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [antenna, eyes] = input;

if (antenna >= 3 && eyes <= 4) {
  console.log("TroyMartian");
}
if (antenna <= 6 && eyes >= 2) {
  console.log("VladSaturnian");
}
if (antenna <= 2 && eyes <= 3) {
  console.log("GraemeMercurian");
}

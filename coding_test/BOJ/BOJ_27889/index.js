const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

if (input === "NLCS") {
  console.log("North London Collegiate School");
} else if (input === "BHA") {
  console.log("Branksome Hall Asia");
} else if (input === "KIS") {
  console.log("Korea International School");
} else if (input === "SJA") {
  console.log("St. Johnsbury Academy");
}

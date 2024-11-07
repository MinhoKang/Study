const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

const [lv, judge] = input;

if (judge === "miss") return console.log(0);

if (judge === "perfect") {
  console.log(+lv * 1000);
} else {
  if (judge === "bad") {
    console.log(+lv * 200);
  } else if (judge === "cool") {
    console.log(+lv * 400);
  } else if (judge === "great") {
    console.log(+lv * 600);
  }
}

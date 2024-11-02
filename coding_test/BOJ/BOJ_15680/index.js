const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

if(+input ===1) {
  console.log('Leading the Way to the Future')
} else {
  console.log("YONSEI")
}

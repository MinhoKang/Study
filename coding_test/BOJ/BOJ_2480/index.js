const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

const [first, second, third] = input;

if (first === second && first === third) {
  console.log(10000 + first * 1000);
} else if (first !== second && first !== third && second !== third) {
  const large = Math.max(...input);
  console.log(large * 100);
} else {
  const sameNum =
    first === second
      ? first
      : second === third
      ? second
      : first === third && third;

  console.log(1000 + sameNum * 100);
}

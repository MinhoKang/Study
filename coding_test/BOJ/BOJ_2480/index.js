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

// const fs = require("fs");
// const input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

// const [first, second, third] = input;

// // 같은 숫자가 세 개일 경우
// if (first === second && second === third) {
//   console.log(10000 + first * 1000);
// }
// // 모두 다른 숫자일 경우
// else if (first !== second && first !== third && second !== third) {
//   console.log(Math.max(...input) * 100);
// }
// // 두 개의 숫자가 같은 경우
// else {
//   const sameNum = first === second || first === third ? first : second;
//   console.log(1000 + sameNum * 100);
// }

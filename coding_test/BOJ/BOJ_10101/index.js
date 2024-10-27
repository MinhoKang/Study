const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [first, second, third] = input;
const sum = input.reduce((a, c) => a + c);

const isTriangle = () => {
  if (sum !== 180) {
    return console.log("Error");
  } else if (first === second && first === third) {
    return console.log("Equilateral");
  } else if (first !== second && first !== third && second !== third) {
    return console.log("Scalene");
  } else return console.log("Isosceles");
};

isTriangle();

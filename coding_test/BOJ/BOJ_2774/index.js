const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [T, ...rest] = input;

rest.forEach((i) => {
  const arr = i.toString().split("");
  const newArr = new Set([...arr]);

  console.log(newArr.size);
});

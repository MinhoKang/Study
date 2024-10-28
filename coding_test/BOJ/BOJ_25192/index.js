const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;
// console.log(newArr.indexOf("ENTER"));
const firstEnterIndex = rest.indexOf("ENTER");
const newArr = rest.slice(firstEnterIndex);

console.log(newArr);

const hello = newArr.reduce((a, c) => {
  if (c === "ENTER") {
    return a;
  } else {
    a.push(c);
    return a;
  }
}, []);

console.log(new Set([...hello]).size);

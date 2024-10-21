const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const arr = input.map((i) => i.split(" "));
// let obj = {};

// console.log(
//   arr
//     .map((i) => i.map(Number))
//     .map((j, i) => {
//       obj = { ...obj, [j[0]]: (obj[j[0]] || 0) + 1 };
//       obj = { ...obj, [j[1]]: (obj[j[1]] || 0) + 1 };
//     })
// );
// console.log(obj)
console.log(arr);

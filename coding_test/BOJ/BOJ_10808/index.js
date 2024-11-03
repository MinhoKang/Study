const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("");

const arr = Array.from({ length: 26 }).fill(0);

input.forEach((i) => arr[i.charCodeAt() - 97]++);
console.log(arr.join(" "));

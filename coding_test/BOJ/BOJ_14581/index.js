const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

console.log(`:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`);

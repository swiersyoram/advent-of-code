import { getInput } from "../utils/utils.js";

const input = getInput("./input.txt").map((line) =>
  line.split("").map((v) => Number(v))
);
const width = input[0].length;
const height = input.length;

let total = 0;
// console.log(width, height);
const visible = (y, x) => {
  const column = [...input].flatMap((v) => v[x]);
  if (
    Math.max(...input[y].slice(0, x)) < input[y][x] ||
    x === 0 ||
    x === width ||
    y === 0 ||
    y === height
  ) {
    total += 1;
    return;
  } else if (Math.max(...input[y].slice(x + 1, width)) < input[y][x]) {
    total += 1;
    console.log("yes");
    return;
  } else if (Math.max(...column.slice(0, y)) < input[y][x]) {
    total += 1;
    return;
  } else if (Math.max(...column.slice(y + 1, height)) < input[y][x]) {
    total += 1;
    return;
  }
};

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) visible(i, j);
}

console.log(total);

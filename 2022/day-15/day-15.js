import { getInput } from "../utils/utils.js";

const input = getInput("./input.txt").map((x) =>
  x
    .split(/=|,|:/)
    .filter((x) => !isNaN(x))
    .map((x) => Number(x))
);
// console.log(input[0]);
const knownY = 2000000;
let answer = 0;
const intervals = [];
// calculate manhattan distance
const calcManhattan = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

const noBeacon = (line) => {
  const md = calcManhattan(line[0], line[1], line[2], line[3]);
  //   console.log(md);
  const distanceToKnownY = Math.abs(line[1] - knownY);
  //   console.log(distanceToKnownY);
  const maxX = md - distanceToKnownY;
  if (maxX >= 0) intervals.push([line[0] - maxX, line[0] + maxX]);
};

input.forEach((line) => noBeacon(line));

// intervals min and max
const min = Math.min(...intervals.map((x) => x[0]));
const max = Math.max(...intervals.map((x) => x[1]));

for (let index = min; index < max; index++) {
  const element = index;
  const isInRange = intervals.some((x) => element >= x[0] && element <= x[1]);

  if (isInRange) {
    answer++;
  }
}
console.log(intervals);
console.log(answer);

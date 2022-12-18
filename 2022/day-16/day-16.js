import { getInput } from "../utils/utils.js";
import { shuffle } from "./utils.js";
// [ 'KC', 0, 'AC', 'AA' ],
const input = getInput("./input.txt").map((line) => line.split(/ |=|;/));

const valves = input.map((line, index) => [
  index,
  line[1],
  Number(line[5]),
  ...line.splice(11).map((v) => v.replace(/,/g, "")),
]);
const total = [];

for (let index = 0; index < 1000; index++) {
  let time = 30;
  let totalPressure = 0;
  let pressure = 0;
  let newPressure = 0;
  let valve = valves[0];
  let move = true;
  const openValves = [];

  for (let i = 1; i <= time; i++) {
    pressure = newPressure;
    if (move) {
      //   console.log("move");
      const options = valve.slice(3);

      const filteredOptions = valves.filter((v) => options.includes(v[1]));
      // console.log(shuffle(filteredOptions));

      const choice = shuffle(filteredOptions)[0];

      valve = choice;
      //   console.log(choice);

      if (
        choice[2] !== 0 &&
        openValves.filter((ov) => ov[0] === choice[0]).length === 0
      ) {
        openValves.push(choice);
        move = false;
      }
    } else {
      //   console.log("open valve");
      newPressure += valve[2];
      move = true;
    }
    // console.log(pressure);
    totalPressure += pressure;
  }
  total.push(totalPressure);
}

console.log(total.reduce((a, b) => (a > b ? a : b)));
//1651

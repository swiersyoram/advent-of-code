import { getInput } from "../utils/utils.js";
import { getIntructions } from "./utils.js";
//             [C]         [N] [R]
// [J] [T]     [H]         [P] [L]
// [F] [S] [T] [B]         [M] [D]
// [C] [L] [J] [Z] [S]     [L] [B]
// [N] [Q] [G] [J] [J]     [F] [F] [R]
// [D] [V] [B] [L] [B] [Q] [D] [M] [T]
// [B] [Z] [Z] [T] [V] [S] [V] [S] [D]
// [W] [P] [P] [D] [G] [P] [B] [P] [V]
//  1   2   3   4   5   6   7   8   9
const input = getInput("./input.txt");
const instructions = getIntructions(input);
const crates = [
  [],
  ["W", "B", "D", "N", "C", "F", "J"],
  ["P", "Z", "V", "Q", "L", "S", "T"],
  ["P", "Z", "B", "G", "J", "T"],
  ["D", "T", "L", "J", "Z", "B", "H", "C"],
  ["G", "V", "B", "J", "S"],
  ["P", "S", "Q"],
  ["B", "V", "D", "F", "L", "M", "P", "N"],
  ["P", "S", "M", "F", "B", "D", "L", "R"],
  ["V", "D", "T", "R"],
];

const moveCrates = (instructions) => {
  instructions.forEach((instruction) => {
    for (let i = 0; i < instruction[0]; i++) {
      // cut last item or array and return it
      const crate = crates[instruction[1]].pop();
      // add crate to the end of the array
      crates[instruction[2]].push(crate);
    }
  });
};

// moveCrates(instructions);
// console.log(crates);
// const answer = crates.map((cs) => cs[cs.length - 1]).join("");
// console.log(answer);

// part 2

const moveCrates2 = (instructions) => {
  instructions.forEach((instruction) => {
    const stack = [];
    for (let i = 0; i < instruction[0]; i++) {
      // cut last item or array and return it
      const crate = crates[instruction[1]].pop();
      stack.unshift(crate);
      // add crate to the end of the array
    }
    crates[instruction[2]] = [...crates[instruction[2]], ...stack];
  });
};
moveCrates2(instructions);
// console.log(crates);
const answer2 = crates.map((cs) => cs[cs.length - 1]).join("");
console.log(answer2);

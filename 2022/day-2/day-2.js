import { getInput } from "../utils/utils.js";
import { mapRpc, mapRpc2 } from "./utils.js";

/*
rock A X 1
paper B Y 2
scissors C Z 3
los 0
draw 3
win 6
*/
const input = getInput("./input.txt").map((item) => item.split(" "));

const rpc = (input) => {
  const mapped = mapRpc(input);
  if (mapped[0] === mapped[1]) {
    // console.log("draw");
    return mapped[1] + 3;
  }
  if (mapped[0] - mapped[1] === -1 || mapped[0] - mapped[1] === 2) {
    // console.log("win");
    return mapped[1] + 6;
  } else {
    // console.log("los");
    return mapped[1];
  }
};

const answer1 = input.reduce((a, b) => a + rpc(b), 0);
console.log(answer1);

/*
rock A X 1 lose
paper B Y 2 draw  
scissors C Z 3 win
*/

const rpc2 = (input) => {
  const mapped = mapRpc2(input);
  if (mapped[0] === mapped[1]) {
    // console.log("draw");
    return mapped[1] + 3;
  }
  if (mapped[0] - mapped[1] === -1 || mapped[0] - mapped[1] === 2) {
    // console.log("win");
    return mapped[1] + 6;
  } else {
    // console.log("los");
    return mapped[1];
  }
};
const answer2 = input.reduce((a, b) => a + rpc2(b), 0);
console.log(answer2);

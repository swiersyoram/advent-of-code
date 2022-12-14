export const getIntructions = (input) => {
  const instructions = [];
  input.forEach((line) => {
    const numbers = [];
    let number = "";
    for (let i = 0; i < line.length; i++) {
      if (Number(line[i]) || line[i] === "0") {
        number += line[i];
      } else {
        if (number) {
          numbers.push(Number(number));
          number = "";
        }
      }
    }
    if (number) {
      numbers.push(Number(number));
    }
    instructions.push(numbers);
  });
  return instructions;
};

export const mapRpc = (input) => {
  const mapped = [];
  switch (input[0]) {
    case "A":
      mapped.push(1);
      break;
    case "B":
      mapped.push(2);
      break;
    case "C":
      mapped.push(3);
      break;
  }
  switch (input[1]) {
    case "X":
      mapped.push(1);
      break;
    case "Y":
      mapped.push(2);
      break;
    case "Z":
      mapped.push(3);
      break;
  }
  return mapped;
};

export const mapRpc2 = (input) => {
  const mapped = [];
  switch (input[0]) {
    case "A":
      mapped.push(1);
      break;
    case "B":
      mapped.push(2);
      break;
    case "C":
      mapped.push(3);
      break;
  }
  switch (input[1]) {
    case "X":
      if (input[0] === "A") mapped.push(3);
      if (input[0] === "B") mapped.push(1);
      if (input[0] === "C") mapped.push(2);

      break;
    case "Y":
      if (input[0] === "A") mapped.push(1);
      if (input[0] === "B") mapped.push(2);
      if (input[0] === "C") mapped.push(3);

      break;
    case "Z":
      if (input[0] === "A") mapped.push(2);
      if (input[0] === "B") mapped.push(3);
      if (input[0] === "C") mapped.push(1);

      break;
  }
  return mapped;
};

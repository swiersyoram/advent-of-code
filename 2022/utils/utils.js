import { readFileSync } from "fs";

export const getInput = (input) => readFileSync(input, "utf-8").split(/\n/);

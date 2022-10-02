import chalk from "chalk"
import errorMessages from "../constants/errorMessages.js";

export function caNotTwoComands() {
  console.log(`❌ ${chalk.red(errorMessages.caNotTwoComands)}` + '\n');
  process.exit(1);
}
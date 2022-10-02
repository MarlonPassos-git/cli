import figlet from 'figlet';
import gradient from 'gradient-string';
import chalk from "chalk"
import { libName } from "../constants/commons.js";
import messages from "../constants/messages.js";

export function welcome () {
  console.clear();
  figlet(libName, (_, data) => {
    console.log(`${gradient.pastel.multiline(data)}\n`);
    console.log(chalk.green(messages.welcomePhase));
  })
}
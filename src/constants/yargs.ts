import yargs from "yargs";
import { questions } from "./messages";

const {
  whatDoYouWantToDo: {
    choices: [
      createComponete, 
      login
    ]
  }
} = questions;

export const argv = await yargs(process.argv.slice(2)).options({
  createComponent: {
    type: "string",
    default: "",
    description: createComponete
  },
  login: {
    type: "boolean",
    default: false,
    description: login,
  },
}).argv

export type Args = typeof argv

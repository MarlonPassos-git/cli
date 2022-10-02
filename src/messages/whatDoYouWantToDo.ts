import inquirer from "inquirer";
import { questions } from "../constants/messages.js";

const { whatDoYouWantToDo: { choices, message } } = questions

export async function whatDoYouWantToDo() { 
  const { whatDoYouWantToDo } = await inquirer.prompt([
    {
      type: "list",
      name: "whatDoYouWantToDo",
      message: message,
      choices: choices,
    },
  ]);

  return whatDoYouWantToDo
}
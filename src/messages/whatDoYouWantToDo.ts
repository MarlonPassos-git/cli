import inquirer from "inquirer";
import { tasks, Tasks } from "../constants/commons";
import { questions } from "../constants/messages";
const { LOGIN, CREATE_COMPONENT } = tasks;

const {
  whatDoYouWantToDo: {
    choices,
    message
  }
} = questions

export async function whatDoYouWantToDo(): Promise<Tasks> { 
  const { whatDoYouWantToDo } = await inquirer.prompt([
    {
      type: "list",
      name: "whatDoYouWantToDo",
      message: message,
      choices: choices,
    },
  ]);

  if (whatDoYouWantToDo === choices[0]) return CREATE_COMPONENT;
  else if (whatDoYouWantToDo === choices[1]) return LOGIN;

  throw new Error("whatDoYouWantToDo: Invalid choice");
}
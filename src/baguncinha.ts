#! /usr/bin/env node
import messages from "./constants/messages.js";
import { cli } from "./utils/cli.js";
import { isVtexCli } from "./utils/isVtexCli.js";
import chalk from "chalk"
import inquirer from "inquirer";
import gradient from "gradient-string"
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import figlet from 'figlet';

chalk;
inquirer;
gradient;
chalkAnimation


async function aksName() {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      default() { 
        return "John Doe"
      }
    },
  ]);

  console.log(`Hello ${name}!`)
}

async function question1() {
  const { question1 } = await inquirer.prompt([
    {
      type: "list",
      name: "question1",
      message: "What is your name?",
      choices: [
        "John Doe",
        "Jane Doe",
        "John Smith",
        "Jane Smith",
      ],
    },
  ]);

  return question1
}

async function main() {




  await cli("vtex whoami");
  await isVtexCli();

 
 
}




let playerName: string
const sleep = (ms = 2000) => new Promise(r => setTimeout(r, ms))

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("Welcome to the VTEX CLI!");

  await sleep()
  rainbowTitle.stop()

  console.log(`
  ${chalk.bgBlue("HOW TO PLAY")}
  I am a process on your compouter
  `)
}

function winner() {
  console.clear();
  figlet(`Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, (_, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Programming isn't about what you know; it's about making the command line look cool`
      )
    );
    process.exit(0);
  })
}

async function handleAnswer(isCorrect: boolean) {
  const spiner = createSpinner("Loading... ").start();
  await sleep()

  if (isCorrect) {
    spiner.success({
      text: "Correct!",
    })
  } else {
    spiner.error({
      text: "Game Over!",
    })
    process.exit(1)
  }
}

await welcome()
await aksName()
const a = await question1()
await handleAnswer(true)
await winner()
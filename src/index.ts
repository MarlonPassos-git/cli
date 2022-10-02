#! /usr/bin/env node
import yargs, { showHelp } from "yargs"
import messages from "./constants/messages";
import { cli } from "./utils/cli";
import { isVtexCli } from "./utils/isVtexCli";

async function main() {
  console.log("Verificando se esta instalado o VTEX CLI");
  const a = await cli("ls")
  console.log(a)
  await isVtexCli();

  console.log("1")
  console.log("2")

  yargs
    .usage(messages.help)
    .option("l", {
      alias: "languages",
      describe: "List all supported languages.",
      type: "boolean",
      demandOption: false,
    })
    .help(true)
    .argv;

  const isThereAnyArgument = (await yargs.argv)._.length >= 1

  if(!isThereAnyArgument) {
    showHelp()
    return
  }
    console.log("1")
  console.log(yargs.argv)

}

main()

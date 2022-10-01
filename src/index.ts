#! /usr/bin/env node
import yargs, { showHelp } from "yargs"
import exec from "child_process";
import messages from "./constants/messages";
import { isVtexCli } from "./utils/isVtexCli";

exec.exec(`node dist/src/test1.js`, (error, stdout, stderr) => {




  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});



async function main() {
  await isVtexCli();

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

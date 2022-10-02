#!/usr/bin/env node

import { welcome } from "./messages/welcome.js";
import { whatDoYouWantToDo } from "./messages/whatDoYouWantToDo.js";
import { sleep } from "./utils/sleep.js";
import { login } from "./tasks/login.js";
import { createComponent } from "./tasks/createComponent.js";
import { argv } from "./constants/yargs.js";
import { hasTwoComands } from "./utils/hasTwoComands.js";
import { caNotTwoComands } from "./messages/caNotTwoComands.js";

welcome();
await sleep(1000);

if (hasTwoComands(argv)) caNotTwoComands();

if (argv.login) await login();
if (argv.createComponent)  await createComponent();


console.log("main1")

console.log(argv)
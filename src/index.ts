#!/usr/bin/env node

import { welcome } from "./messages/welcome";
import { whatDoYouWantToDo } from "./messages/whatDoYouWantToDo";
import { sleep } from "./utils/sleep";
import { login } from "./tasks/login";
import { createComponent } from "./tasks/createComponent";
import { argv } from "./constants/yargs";
import { hasTwoComands } from "./utils/hasTwoComands";
import { caNotTwoComands } from "./messages/caNotTwoComands";
import { tasks} from "./constants/commons";
const { CREATE_COMPONENT, LOGIN } = tasks;



welcome();
await sleep(1000);
if (hasTwoComands(argv)) caNotTwoComands();


if (argv[LOGIN]) await login();
else if (argv[CREATE_COMPONENT]) await createComponent(argv[CREATE_COMPONENT]);
else { 
  const result = await whatDoYouWantToDo()
  
  const isCreateComponent = result === CREATE_COMPONENT
  const isLogin = result === LOGIN
  
  
  if (isCreateComponent) await createComponent();
  else if (isLogin) await login();
}










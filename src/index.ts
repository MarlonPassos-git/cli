import { welcome } from "./messages/welcome.js";
import { whatDoYouWantToDo } from "./messages/whatDoYouWantToDo.js";
import { sleep } from "./utils/sleep.js";


welcome();
await sleep(1000)
const a = await whatDoYouWantToDo()
console.log(a)

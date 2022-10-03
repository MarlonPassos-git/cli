import { createSpinner } from "nanospinner";
import { isVtexCli } from "../utils/isVtexCli";
import messages from "../constants/messages";

export async function login() {
    const spiner = createSpinner(messages.verificaVtex).start();

    await isVtexCli().then(() => { 
        spiner.success({
            text: messages.vtexEncontrado,
        });
    }).catch((err) => { 
        spiner.error({
            text: err.message,
        });
        throw err;
    })

    // ----------------------------

    

    console.log("login");

    process.exit(0);
}

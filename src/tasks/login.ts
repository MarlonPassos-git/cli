import { createSpinner } from "nanospinner";
import { isVtexCli } from "../utils/isVtexCli";
import messages from "../constants/messages";
import { isVtexProject } from "../utils/isVtexProject";
import { getAccountName } from "../utils/getAccountName";

export async function login() {
    const spiner1 = createSpinner(messages.verificaVtex).start();

    await isVtexCli().then(() => { 
        spiner1.success({
            text: messages.vtexEncontrado,
        });
    }).catch((err) => { 
        spiner1.error({
            text: err.message,
        });
        throw err;
    })

    // ----------------------------
    const spiner2 = createSpinner(messages.vtexProjetct).start();
    await isVtexProject().then(() => { 
        spiner2.success({
            text: messages.vtexProjetctFound,
        });
    }).catch((err) => { 
        spiner2.error({
            text: err.message,
        });
        throw err;
    })

    // ----------------------------
    const accountName = await getAccountName()
    console.log(accountName)
    process.exit(0);
}

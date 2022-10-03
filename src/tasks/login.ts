import { createSpinner } from "nanospinner";
import { isVtexCli } from "../utils/isVtexCli";
import messages from "../constants/messages";
import { isVtexProject } from "../utils/isVtexProject";
import { getAccountName } from "../utils/getAccountName";
import { cli } from "../utils/cli";
import { getCurrentBranchGit } from "../utils/getCurrentBranchGit";
import { getCodeTarefa } from "../utils/getCodeTarefa";
import { criaWorkspace } from "../utils/criaWorkspace";

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
    

    const spiner3 = createSpinner(messages.vtexLogin).start();

    await cli("vtex login " + accountName).then(() => { 
        spiner3.success({
            text: messages.vtexLoginSuccess + "em " + accountName,
        });
    }).catch((err) => { 
        spiner3.error({
            text: "Erro ao fazer login",
        });
        throw err;
    })

    // ----------------------------

    const currentBranch = await getCurrentBranchGit()
    const tarefaCode = getCodeTarefa(currentBranch)
    const spiner4 = createSpinner(messages.vtexLogin).start();

    await criaWorkspace(tarefaCode).then(() => { 
        spiner4.success({
            text: "criado workspace " + tarefaCode,
        });
    }).catch((err) => { 
        spiner4.error({
            text: "Erro ao criar workspace",
        });
        throw err;
    })

    process.exit(0);
}

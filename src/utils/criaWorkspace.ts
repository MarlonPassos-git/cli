import { spawn } from "child_process";

export const FRASE_POSSO_ESCREVE = "Do you wish to create it?"
export const FRASE_SUCESSO = "Workspace change: You are now using the"
export const FRASE_ERRO = "Failed to create workspace"

export const isFraseInput = (str: string) => str.includes(FRASE_POSSO_ESCREVE)
export const isFraseSucesso = (str: string) => str.includes(FRASE_SUCESSO)
export const isFraseErro = (str: string) => str.includes(FRASE_ERRO)

export async function criaWorkspace(workspaceName: string) {
  const command = `vtex workspace use ${workspaceName}`
  console.log("1")
  return new Promise((resolve, reject) => {
    const child = spawn(command, { shell: true })

    child.stdout.on("data", (data) => { 
      const output = data.toString()
      console.log(output)
      if (isFraseInput(output)) { 
        console.log("b")
        child.stdin.write('Y')
      } 
      if (isFraseSucesso(output)) { 
        console.log("resolve")
        resolve(true)
        child.stdin.end()
      }
      if (isFraseErro(output)) {
        console.log("reject")
        reject(false)
        child.stdin.end()
      }
    });
  });
}

criaWorkspace("valido12").then((res) => console.log("sucess", res)).catch((err) => console.log("error", err))

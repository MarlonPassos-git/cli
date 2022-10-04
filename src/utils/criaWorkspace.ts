import { spawn } from "child_process";

export const FRASE_POSSO_ESCREVE = "Do you wish to create it?"
export const FRASE_SUCESSO = "Workspace change: You are now using the"
export const FRASE_ERRO = "Failed to create workspace"

export const isFraseInput = (str: string) => str.includes(FRASE_POSSO_ESCREVE)
export const isFraseSucesso = (str: string) => str.includes(FRASE_SUCESSO)
export const isFraseErro = (str: string) => str.includes(FRASE_ERRO)

export async function criaWorkspace(workspaceName: string) {
  const command = `vtex workspace use ${workspaceName}`

  return new Promise((resolve, reject) => {
    const child = spawn(command, { shell: true })

    child.stdout.on("data", (data) => { 
      const output = data.toString()

      if (isFraseInput(output)) { 
        child.stdin.write('Y')
      } 
      if (isFraseSucesso(output)) { 
        resolve(true)
        child.stdin.end()
      }
      if (isFraseErro(output)) {
        reject(false)
        child.stdin.end()
      }
    });
  });
}

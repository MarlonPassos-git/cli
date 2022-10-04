import { cli } from "./cli";

export async function getCurrentBranchGit() {
  const { stdout, error } = await cli("git rev-parse --abbrev-ref HEAD");

  if (error) { 
    throw new Error("Repositório não encontrado");
  }
  // TODO: LIDA COM O ERRO DE NÃO TER O GIT

  return stdout;  
}

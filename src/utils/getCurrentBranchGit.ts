import { cli } from "./cli";

export async function getCurrentBranchGit() {
  const { stdout } = await cli("git rev-parse --abbrev-ref HEAD");

  // TODO: LIDA COM O ERRO DE NÃO TER O GIT

  return stdout;  
}

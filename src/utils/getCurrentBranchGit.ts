import { cli } from "./cli";

export async function getCurrentBranchGit() {
  const { stdout, stderr } = await cli("git rev-parse --abbrev-ref HEAD");

  if (stderr) { 
    throw new Error("Repositório não encontrado");
  }

  return stdout;  
}

import { cli } from "./cli";

export async function criaWorkspace(workspaceName: string) {
  await cli(`vtex use ${workspaceName} -y`);
}

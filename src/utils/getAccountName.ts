import { getManifestRootAndInsideDirerectories } from "./getManifestRootAndInsideDirerectories";
import { readFile  } from 'node:fs/promises';

export async function getAccountName() {
  const [manifestPath] = await getManifestRootAndInsideDirerectories()

  const files = await readFile (manifestPath, { encoding: 'utf-8' });
  // TODO: LIDA COM O ERRO DE NÃO TER O MANIFEST  
  return JSON.parse(files).vendor;
}

getAccountName()
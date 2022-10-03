import { getDirectoriesRoot } from "./getDirectoriesRoot";
import { hasManisfest } from "./hasManisfest";

export async function getManifestRootAndInsideDirerectories() {
  const manifestList = [];
  const dirs = getDirectoriesRoot();
  const manifestRoot = await hasManisfest("./");
  manifestList.push(...manifestRoot);

  for (const dir of dirs) {
    const manifestInsideDir = await hasManisfest("./" + dir + "/");

    manifestList.push(...manifestInsideDir);
  }

  return manifestList;
}

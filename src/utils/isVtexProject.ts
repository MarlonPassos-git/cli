import errorMessages from "../constants/errorMessages";
import { getManifestRootAndInsideDirerectories } from "./getManifestRootAndInsideDirerectories";


export async function isVtexProject() {
  const manifestList = await getManifestRootAndInsideDirerectories();

  if (manifestList.length === 0) {
    throw new Error(errorMessages.notVtexProject);
  }
}


getManifestRootAndInsideDirerectories()
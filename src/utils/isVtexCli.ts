import errorMessages from "../constants/errorMessages";
import { cli } from "./cli";

export async function isVtexCli() {
  const result = await cli("vtex")

  if (!result.stdout.includes("vtex")) {
    throw new Error(errorMessages.vtexNotFound);
  }
}

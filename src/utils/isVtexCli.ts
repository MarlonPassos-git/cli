import errorMessages from "../constants/errorMessages.js";
import { cli } from "./cli.js";

export async function isVtexCli() {
  const result = await cli("vtex")

  if (!result.stdout.includes("vtex")) {
    throw new Error(errorMessages.vtexNotFound);
  }
}

import path from "path";
import fs from "fs";

export function getDirectoriesRoot() {

  return fs
    .readdirSync(".")
    .filter(file => fs.statSync(path.join('.', file)).isDirectory());
}

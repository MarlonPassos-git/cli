import { readdir } from "fs/promises";

export async function hasManisfest(dir: string) {
  const manifestList = [];
  const files = await readdir(dir);

  for (const file of files) {
    const isManifest = file.includes("manifest.json");

    if (isManifest) {
      manifestList.push(dir + file);
    }
  }

  return manifestList;
}

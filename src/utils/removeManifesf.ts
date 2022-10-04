export function removeManifesf(manifestList: string[]) {
  return manifestList.map((manifest) => manifest.replace("/manifest.json", ""));
}
  

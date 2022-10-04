import inquirer from "inquirer";
import { getManifestRootAndInsideDirerectories } from "../utils/getManifestRootAndInsideDirerectories";
import { removeManifesf } from "../utils/removeManifesf";

export async function createComponent(name?: string) {
  let componentName = name;

  if (!name) { 
    const prompt = await inquirer.prompt([
      {
        type: "input",
        name: "componentName",
        message: "Qual o nome do componente?",
      },
    ]);
    componentName = prompt.componentName;
  }


  const manifestPathList = await getManifestRootAndInsideDirerectories()
  const diretoriosQueTemManifest = removeManifesf(manifestPathList)
  console.log(diretoriosQueTemManifest);
  
}
  



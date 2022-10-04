import inquirer from "inquirer";
import { CreateComponent } from "../utils/CreateComponent";
import { getDiretoriesWithHasFolderReact } from "../utils/getDiretoriesWithHasFolderReact";
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
  const listaPossiveisLocais = getDiretoriesWithHasFolderReact(diretoriosQueTemManifest)
  
  const { whereDoYouWantToCreate } = await inquirer.prompt([
    {
      type: "list",
      name: "whereDoYouWantToCreate",
      message: "Onde você quer criar o componente?",
      choices: listaPossiveisLocais,
    },
  ]);
  const maquinaQueVaiCriar = new CreateComponent({
    name: componentName as string,
    path: whereDoYouWantToCreate
  })

  maquinaQueVaiCriar.create()
  console.log(whereDoYouWantToCreate);

}
  



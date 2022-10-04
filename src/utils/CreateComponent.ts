import fs from "fs/promises";

interface ICreateComponent { 
  name: string;
  path: string;
}

const TEMPLATE = 
`import React from "react";

export const componentName = () => {
  return <></>;
};
`;

const TEMPLATE_ARQUIVO_EXPORTACAO_VTEX =
`
export { componentName as default } from "./components/componentName";
`

export class CreateComponent { 
  
  private name: string;
  private path: string;
  private nomeEmMaisculo: string;
  private pathComponent: string;
  
  constructor({ name, path }: ICreateComponent) {
    this.name = name;
    this.path = path;
    this.nomeEmMaisculo = name.charAt(0).toUpperCase() + name.slice(1);
    this.pathComponent = `${this.path}/react/components/${this.nomeEmMaisculo}`;
  }
  
  public async create() {
    await this.createFolder();
    await this.createFileInsideComponent()
    await this.arquivoExportacaoVtex();
    await this.adiconaConfiguracaoNoInterfacejson();
  }

  async createFileInsideComponent() {
    const path = `${this.pathComponent}/index.tsx`;
    await fs.writeFile(path, TEMPLATE.replace(/componentName/g, this.nomeEmMaisculo));
  }

  async createFolder() {
    await fs.mkdir(this.pathComponent);
  }

  async arquivoExportacaoVtex() { 
    const path = `${this.path}/react/${this.nomeEmMaisculo}.ts`;
    
    await fs.writeFile(path, TEMPLATE_ARQUIVO_EXPORTACAO_VTEX.replace(/componentName/g, this.nomeEmMaisculo));
  }

  async adiconaConfiguracaoNoInterfacejson() { 
    const path = `${this.path}/store/interfaces.json`;
    const interfaceJson = await fs.readFile(path, "utf-8");
    const interfaceJsonParse = JSON.parse(interfaceJson);

    const data = {
      ...interfaceJsonParse,
      ...formataConfiguraInterface(this.nomeEmMaisculo)
    }
    await fs.writeFile(path, JSON.stringify(data, null, 2));
  }
}

function formataConfiguraInterface(componentName: string) { 
  const componenteJsonName = formataNomeParaNomeDoArquivo(componentName);

  return {
    [componenteJsonName]: {
      "component": componentName
    },
  }
}

// Se receber um nome assim : ComponenteBase -> componente-base

function formataNomeParaNomeDoArquivo(componentName: string) {
  return componentName.split(/(?=[A-Z])/).join("-").toLowerCase();
}

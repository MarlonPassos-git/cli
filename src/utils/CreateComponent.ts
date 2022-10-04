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

    // todo: verifica se pessoa tem o diretorio components
    this.pathComponent = `${this.path}/react/components/${this.nomeEmMaisculo}`;
  }
  
  public async create() {
    // todo: envolver isso em um try catch

    await this.createFolder();
    await this.createFileInsideComponent()
    await this.arquivoExportacaoVtex();
    await this.adiconaConfiguracaoNoInterfacejson();
  }

  async createFileInsideComponent() {
    const path = `${this.pathComponent}/index.tsx`;
    // todo: lidar com erros

    // todo: extrair isso para uma função separada
    await fs.writeFile(path, TEMPLATE.replace(/componentName/g, this.nomeEmMaisculo));
  }

  async createFolder() {
    await fs.mkdir(this.pathComponent);
    //todo criar uma mensagem caso ocorra algum erros ao criar a pasta
  }

  async arquivoExportacaoVtex() { 
    const path = `${this.path}/react/${this.nomeEmMaisculo}.ts`;
    
    await fs.writeFile(path, TEMPLATE_ARQUIVO_EXPORTACAO_VTEX.replace(/componentName/g, this.nomeEmMaisculo));
  }

  async adiconaConfiguracaoNoInterfacejson() { 
    const path = `${this.path}/store/interfaces.json`;
    const interfaceJson = await fs.readFile(path, "utf-8");
    // todo: lidar caso não ache esse arquivo
    const interfaceJsonParse = JSON.parse(interfaceJson);
    
    // todo: Verifica se já existe essa configuração e informar a pessoa que estamos sobrescrevendo
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

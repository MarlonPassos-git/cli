import { existsSync } from 'fs';

export function getDiretoriesWithHasFolderReact(list: string[]) {
  return list.filter((diretory) => {
    return existsSync(`${diretory}/react`);
  });
  
}

import { getDirectoriesRoot } from "./getDirectoriesRoot";

const directoriesList = [
  '.git',
  '.github',
  '.vscode',
  'coverage',
  'dist',
  'docs',
  'node_modules',
  'src' 
]

describe('unit - getDirectoriesRoot', () => {

  it("should return an array with the directories", () => {
    const result = getDirectoriesRoot();

    expect(result).toEqual(directoriesList);
  });

});
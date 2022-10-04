import * as cli  from './cli'
import { getCurrentBranchGit } from './getCurrentBranchGit'
const mockCli = jest.spyOn(cli, "cli")


describe('unit - getCurrentBranchGit', () => {
  it("Se não existir deve retornar um erro de errorMessages", async () => {
    mockCli.mockResolvedValue({ stderr: "error", stdout: "", error: null });

    await expect(() => getCurrentBranchGit()).rejects.toThrow()
  })

  it("não deve fazer deve dar erro existir algum texto da vtex", async () => {
    const branchName = "hotfix/AEBE-19"
    mockCli.mockResolvedValue({ stderr: "", stdout: branchName, error: null });

    expect(await getCurrentBranchGit()).toEqual(branchName)
   });
});


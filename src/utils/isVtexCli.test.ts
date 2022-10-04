import { isVtexCli } from './isVtexCli'
import errorMessages from '../constants/errorMessages'
import * as cli from './cli'

const mockCli = jest.spyOn(cli, "cli")

describe('unit - isVtexCli', () => {
  it("Se não existir deve retornar um erro de errorMessages", async () => {
    mockCli.mockResolvedValue({ stderr: "", stdout: "error", error: null });

    await expect(() => isVtexCli()).rejects.toThrowError(errorMessages.vtexNotFound)
  })

  it("não deve fazer deve dar erro existir algum texto da vtex", async () => {
    mockCli.mockResolvedValue({ stderr: "", stdout: "vtex", error: null });

    expect(await isVtexCli()).toBeUndefined()
   });
});

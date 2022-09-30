import { isVtexCli } from './isVtexCli'
import errorMessages from '../constants/errorMessages'
import * as cli  from './cli'

describe('unit - isVtexCli', () => {
  it("Se não existir deve retornar um erro de errorMessages", async () => {

    jest
      .spyOn(cli, "cli")
      .mockResolvedValue({ stderr: "", stdout: "error", error: null });


    await expect(() => isVtexCli()).rejects.toThrowError(errorMessages.vtexNotFound)
  })

  it("não deve fazer deve dar erro existir algum texto da vtex", async () => {
    jest
      .spyOn(cli, "cli")
      .mockResolvedValue({ stderr: "", stdout: "vtex", error: null });

    expect(await isVtexCli()).toBeUndefined()
   });
});

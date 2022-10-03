import { isVtexProject } from './isVtexProject'
import * as util from "./getManifestRootAndInsideDirerectories";
import errorMessages from '../constants/errorMessages';


const listManifest = [ './manifest.json', './src/manifest.json' ]
const mockUtil = jest.spyOn(util, "getManifestRootAndInsideDirerectories")
describe('unit - isVtexProject', () => {
  it("Deve dar uma erro se não retorna nada", async () => {
    mockUtil.mockResolvedValue([]);
    await expect(() => isVtexProject()).rejects.toThrowError(errorMessages.notVtexProject);
  })

  it("Não deve dar uma erro se não retorna nada", async () => {
    mockUtil.mockResolvedValue(listManifest as unknown as never[]);



    expect(await isVtexProject()).toBeUndefined()
  })
});

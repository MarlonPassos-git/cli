import { isVtexCli } from './isVtexCli'
import errorMessages from '../constants/errorMessages'
describe('unit - isVtexCli', () => {
  it("Se não existir deve retornar um erro de errorMessages", async () =>  { 
    await expect(() => isVtexCli()).rejects.toThrowError(errorMessages.vtexNotFound)
  })
});
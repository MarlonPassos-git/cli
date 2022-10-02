import { hasTwoComands } from './hasTwoComands'
import { Args } from '../constants/yargs.js'
 
describe('unit - hasTwoComands', () => {
  it('Se não tem nenhum dos dois comandos deve ser false ', () => {
    const args = {
      login: false,
      createComponent: "",
    } as Args 

    expect(hasTwoComands(args)).toEqual(false)
  })

  it('Se tiver um dos deles de ser false', () => {
    const args = {
      login: false,
      createComponent: "blabla",
    } as Args 

    expect(hasTwoComands(args)).toEqual(false)
  })

  it('Se tiver os dois valores devemos deve ser true', () => {
    const args = {
      login: true,
      createComponent: "blabla",
    } as Args 

    expect(hasTwoComands(args)).toEqual(true)
  })
})

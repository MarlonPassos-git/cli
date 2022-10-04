import {
  isFraseInput,
  isFraseErro,
  isFraseSucesso,
  FRASE_POSSO_ESCREVE,
  FRASE_ERRO,
  FRASE_SUCESSO,
  criaWorkspace,
} from "./criaWorkspace";


describe("Unit - criaWorkspace", () => {
  describe('unit - isFraseInput', () => {
    it('should return true when the string contains "Do you wish to create it?"', () => {
      expect(isFraseInput(FRASE_POSSO_ESCREVE)).toBe(true);
    })
    it('should return false when the string does not contain "Do you wish to create it?"', () => {
      expect(isFraseInput("Dos yous  wish s to create sas it?")).toBe(false);
    })
  });

  describe('unit - isFraseErro', () => {
    it('should return true when the string contains "Failed to create workspace"', () => {
      expect(isFraseErro(FRASE_ERRO)).toBe(true);
    })
    it('should return false when the string does not contain "Failed to create workspace"', () => {
      expect(isFraseErro("Failed asto ascreate 12workspace")).toBe(false);
    })
  });

  describe('unit - isFraseSucesso', () => {
    it('should return true when the string contains "Workspace change: You are now using the"', () => {
      expect(isFraseSucesso(FRASE_SUCESSO)).toBe(true);
    })
    it('should return false when the string does not contain "Workspace change: You are now using the"', () => {
      expect(isFraseSucesso("Workspaceas change: You asare now asusing asthe")).toBe(false);
    })
  });

  describe('unit - criaWorkspace', () => {  

    it('should return false when the workspace is not created', async () => {
      const workspaceName = "teAAAste252";
      
      await expect(() => criaWorkspace(workspaceName)).rejects.toEqual(false);
    })

    it.todo('should return true when the workspace is created');
    
  });

});
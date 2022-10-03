export default {
  help: "Para use o VAL você precisa passar pelo menos algum argumento",
  welcomePhase: "Conjunto de ferramente para facilita seu dia a dia de trabalho com VTEX IO", 
  verificaVtex: "Verificando se você tem o VTEX CLI instalado",
  vtexEncontrado: "VTEX CLI encontrado",
}

export const questions = {
  whatDoYouWantToDo: {
    message: "O que você deseja fazer?",
    choices: [
      "Criar um novo Componente",
      "Fazer login Automaticamente nesse projeto",
    ]
  },
}

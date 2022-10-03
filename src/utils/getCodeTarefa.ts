export function getCodeTarefa(str: string) {
  // dado a string "bugfix/AEBE-27aaaa" retorna "AEBE-27"

  const regex = /([A-Z]{4}-\d{1,})/g;
  const result = str.match(regex);

  if (result) {
    return result[0];
  }

  throw new Error("Nome da branch não segue o padrão das tarefas do Jira");
}

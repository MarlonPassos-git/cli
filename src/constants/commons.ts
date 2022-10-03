export const libName = "vtex-io-tools";

export const tasks = {
  CREATE_COMPONENT: "createComponent",
  LOGIN: "login",
} as const

export type Tasks = typeof tasks[keyof typeof tasks];
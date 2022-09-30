import path from "path";
import { exec, ExecException } from "child_process";
import { BASE_SCRIPT } from "../index.test";

type CliResult = {
  error: ExecException | null;
  stdout: string;
  stderr: string;
};
export function cli(command: string): Promise<CliResult> {

  return new Promise<CliResult>(resolve => {
    const comand = `node ${path.resolve(BASE_SCRIPT)} ${command}`;

    exec(comand, (error, stdout, stderr) => {
      resolve({
        error,
        stdout,
        stderr
      });
    });
  });
}

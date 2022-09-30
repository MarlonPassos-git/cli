import { exec, ExecException } from "child_process";

type CliResult = {
  error: ExecException | null;
  stdout: string;
  stderr: string;
};
export function cli(command: string): Promise<CliResult> {

  return new Promise<CliResult>(resolve => {
    const comand = `${command}`;

    exec(comand, (error, stdout, stderr) => {
      resolve({
        error,
        stdout,
        stderr
      });
    });
  });
}

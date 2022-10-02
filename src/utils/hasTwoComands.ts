import { Args } from "../constants/yargs";

export function hasTwoComands(args: Args): boolean {
  return !!args?.login && !!args?.createComponent;	
  
}

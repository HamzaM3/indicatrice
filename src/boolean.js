import indicatorSymbol from "./indicatorSymbol";
import { ValidationError } from '../src/ValidationError';
import { stringify } from "./stringify";

export const boolean = val => {
  if (typeof val === 'boolean') return val
  throw new ValidationError(`input value is not a boolean but of type ${ typeof val }. (value: ${ stringify(val) })`);
}

boolean[indicatorSymbol] = true;

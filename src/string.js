import indicatorSymbol from "./indicatorSymbol";
import { ValidationError } from '../src/ValidationError';
import { stringify } from "./stringify";

export const string = val => {
  if (typeof val === 'string') return val
  throw new ValidationError(`input value is not a string but of type ${ typeof val }. (value: ${ stringify(val) })`);
}

string[indicatorSymbol] = true;

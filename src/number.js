import indicatorSymbol from "./indicatorSymbol";
import { stringify } from "./stringify";
import { ValidationError } from './ValidationError'


export const number = val => {
  if (typeof val === 'number') return val
  throw new ValidationError(`input value is not a number but of type ${ typeof val }. (value: ${ stringify(val) })`);
}

number[indicatorSymbol] = true;

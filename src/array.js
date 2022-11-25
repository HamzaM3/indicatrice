import indicatorSymbol from "./indicatorSymbol";
import { ValidationError } from '../src/ValidationError';
import { stringify } from "./stringify";

export const array = indicator => {
  return val => {
    array.type(val);
    for (const elem of val) {
      indicator(elem);
    }
    return val;
  }
}

array.type = val => {
  if (Array.isArray(val)) return val
  throw new ValidationError(`input value is not an array: (typeof: ${ typeof val }) (value: ${ stringify(val) })`);
}

array[indicatorSymbol] = true;

array.type[indicatorSymbol] = true;

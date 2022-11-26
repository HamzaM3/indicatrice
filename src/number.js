import indicatorSymbol from "./indicatorSymbol";
import { ValidationError } from './ValidationError'


export const number = (val, path, originalValue) => {
  if (typeof val === 'number') return val
  throw new ValidationError({ errorType: 'WRONG_TYPE', type: 'number', value: val, path, originalValue });
}

number[indicatorSymbol] = true;

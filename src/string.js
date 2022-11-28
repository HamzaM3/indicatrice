import indicatorSymbol from "./indicatorSymbol";
import { ValidationError } from './ValidationError';

export const string = (val, path, originalValue) => {
  if (typeof val === 'string') return val
  throw new ValidationError({ errorType: 'WRONG_TYPE', type: 'string', value: val, path, originalValue });
}

string[indicatorSymbol] = true;

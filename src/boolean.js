import indicatorSymbol from "./indicatorSymbol";
import { ValidationError } from './ValidationError';

export const boolean = (val, path, originalValue) => {
  if (typeof val === 'boolean') return val
  throw new ValidationError({ errorType: 'WRONG_TYPE', type: 'boolean', value: val, path, originalValue});
}

boolean[indicatorSymbol] = true;

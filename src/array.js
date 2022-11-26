import indicatorSymbol from "./indicatorSymbol";
import { ValidationError } from '../src/ValidationError';
import { stringify } from "./stringify";

export const array = indicator => {
  return (val, path='.') => {
    array.type(val, path);
    for (let i = 0; i < val.length; i++) {
      indicator(val[i], `${path}[${i}]`);
    }
    return val;
  }
}

array.type = (val, path, originalValue) => {
  if (Array.isArray(val)) return val
  throw new ValidationError({ errorType: 'WRONG_TYPE', type: 'array', value: val, path, originalValue });
}

array[indicatorSymbol] = true;

array.type[indicatorSymbol] = true;

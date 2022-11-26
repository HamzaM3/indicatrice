import indicatorSymbol from "./indicatorSymbol";
import { ValidationError } from '../src/ValidationError';
import { stringify } from "./utils";

export const array = indicator => {
  const res = (val, path=[], originalValue) => {
    originalValue = originalValue === undefined ? val : originalValue;
    array.type(val, path);
    for (let i = 0; i < val.length; i++) {
      indicator(val[i], [...path, i], originalValue);
    }
    return val;
  }

  res[indicatorSymbol] = true;
  return res;
}

array.type = (val, path, originalValue) => {
  if (Array.isArray(val)) return val
  throw new ValidationError({ errorType: 'WRONG_TYPE', type: 'array', value: val, path, originalValue });
}

array.type[indicatorSymbol] = true;

import indicatorSymbol from "./indicatorSymbol";
import { ValidationError } from '../src/ValidationError';

export const object = fields => {
  const res = (val, path=[], originalValue) => {
    originalValue = originalValue === undefined ? val : originalValue;

    object.type(val, path, originalValue);

    if (Object.keys(val).length !== Object.keys(fields).length)
      throw new ValidationError({ errorType: 'WRONG_NUMBER_FIELD', expected: Object.keys(fields), received: Object.keys(val), path, originalValue });

    for (const key of Object.keys(fields)) {
      if (!fields[key][indicatorSymbol])
        throw new ValidationError({ errorType: 'FIELD_IS_NOT_AN_INDICATOR', path: [...path, key] });

      fields[key](val[key], [...path, key], originalValue);
    }

    return val;
  }

  res[indicatorSymbol] = true;
  return res;
}

object.type = (val, path, originalValue) => {
  if (typeof val === 'object' && val !== null && !Array.isArray(val)) return val
  throw new ValidationError({ errorType: 'WRONG_TYPE', type: 'non-array object', value: val, path, originalValue });
}

object.type[indicatorSymbol] = true;

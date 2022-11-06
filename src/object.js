import indicatorSymbol from "./indicatorSymbol";

export const object = fields => {
  return val => {
    object.type(val);

    if (Object.keys(val).length !== Object.keys(fields).length)
      throw new Error(`input value doesn't have the right number of fields`);

    for (const key of Object.keys(fields)) {
      if (!fields[key][indicatorSymbol]) new Error('field is not an indicator function');

      fields[key](val[key]);
    }

    return val;
  }
}

object.type = val => {
  if (typeof val === 'object' && val !== null && !Array.isArray(val)) return val
  throw new Error(`input value is not an object`);
}

object[indicatorSymbol] = true;

object.type[indicatorSymbol] = true;

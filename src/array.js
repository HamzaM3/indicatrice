import indicatorSymbol from "./indicatorSymbol";

export const array = validator => {
  return val => {
    array.type(val);
    for (const elem of val) {
      validator(elem);
    }
    return val;
  }
}

array.type = val => {
  if (Array.isArray(val)) return val
  throw new Error(`input value is not an array`);
}

array[indicatorSymbol] = true;

array.type[indicatorSymbol] = true;

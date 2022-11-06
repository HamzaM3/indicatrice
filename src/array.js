import indicatorSymbol from "./indicatorSymbol";

export const array = val => {
  if (Array.isArray(val)) return val
  throw new Error(`input value is not an array`);
}

array.type = val => {
  if (Array.isArray(val)) return val
  throw new Error(`input value is not an array`);
}

array[indicatorSymbol] = true;

array.type[indicatorSymbol] = true;

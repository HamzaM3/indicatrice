import indicatorSymbol from "./indicatorSymbol";

export const string = val => {
  if (typeof val === 'string') return val
  throw new Error(`input value is not a string`);
}

string[indicatorSymbol] = true;

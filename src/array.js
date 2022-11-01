export const array = val => {
  if (Array.isArray(val)) return val
  throw new Error(`input value is not an array`);
}

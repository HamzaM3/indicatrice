export const object = val => {
  if (typeof val === 'object' && val !== null && !Array.isArray(val)) return val
  throw new Error(`input value is not an object`);
}

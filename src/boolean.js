export const boolean = val => {
  if (typeof val === 'boolean') return val
  throw new Error(`input value is not a boolean`);
}

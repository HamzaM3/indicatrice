export const number = val => {
  if (typeof val === 'number') return val
  throw new Error(`input value is not a number`);
}

// BigInt danger
export const stringify = val => {
  if (typeof val === 'function') return `function ${val.name ? `${val.name}` : 'anonymous'}`;
  if (val === undefined) return 'undefined';
  return JSON.stringify(val);
};

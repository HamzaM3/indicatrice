// BigInt danger
export const stringify = val => {
  if (typeof val === 'function') return `function ${val.name ? `${val.name}` : 'anonymous'}`;
  if (val === undefined) return 'undefined';
  return JSON.stringify(val);
};

export const pathToString = (array) => {
  if (array.length === 0) return '.';
  return array.reduce((string, item) => {
    var prefix = string === '' ? '' : '.';
    return string + (isNaN(Number(item)) ? '.' + item : '[' + item + ']');
  }, '');
}
import * as indicatrice from '../src';
import { ValidationError } from '../src/ValidationError';

describe('number', () => {
  it('is defined', () => {
    expect(indicatrice.number).not.toBeUndefined();
    expect(typeof indicatrice.number).toBe('function');
  })

  it('validates any safe numbers', () => {
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * Number.MAX_SAFE_INTEGER;
      expect(() => indicatrice.number(x)).not.toThrow();
      expect(indicatrice.number(x)).toBe(x);
    }
  })

  it('validates all special numbers', () => {
    let x = Number.MAX_VALUE;
    expect(() => indicatrice.number(x)).not.toThrow();
    expect(indicatrice.number(x)).toBe(x);

    x = Number.MIN_VALUE;
    expect(() => indicatrice.number(x)).not.toThrow();
    expect(indicatrice.number(x)).toBe(x);

    x = Number.MAX_SAFE_INTEGER;
    expect(() => indicatrice.number(x)).not.toThrow();
    expect(indicatrice.number(x)).toBe(x);

    x = Number.MIN_SAFE_INTEGER;
    expect(() => indicatrice.number(x)).not.toThrow();
    expect(indicatrice.number(x)).toBe(x);

    x = Number.NaN;
    expect(() => indicatrice.number(x)).not.toThrow();
    expect(indicatrice.number(x)).toBe(x);

    x = Infinity;
    expect(() => indicatrice.number(x)).not.toThrow();
    expect(indicatrice.number(x)).toBe(x);
  })

  it('invalidates bigint', () => {
    expect(() => indicatrice.number(10n)).toThrow(new TypeError('Do not know how to serialize a BigInt'))
  })

  it('invalidates any other type', () => {
    expect(() => indicatrice.number('34')).toThrow(new ValidationError('input value is not a number but of type string. (value: "34")'))
    expect(() => indicatrice.number(true)).toThrow(new ValidationError('input value is not a number but of type boolean. (value: true)'))
    expect(() => indicatrice.number({a: 3})).toThrow(new ValidationError('input value is not a number but of type object. (value: {"a":3})'))
    expect(() => indicatrice.number([3, 'e'])).toThrow(new ValidationError('input value is not a number but of type object. (value: [3,"e"])'))
    expect(() => indicatrice.number(null)).toThrow(new ValidationError('input value is not a number but of type object. (value: null)'))
    expect(() => indicatrice.number(undefined)).toThrow(new ValidationError('input value is not a number but of type undefined. (value: undefined)'))
    expect(() => indicatrice.number(Symbol())).toThrow(new ValidationError('input value is not a number but of type symbol. (value: undefined)'))
    expect(() => indicatrice.number(() => 'f')).toThrow(new ValidationError('input value is not a number but of type function. (value: function anonymous)'))
  })
})

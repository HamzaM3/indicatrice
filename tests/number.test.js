import * as indicator from '../src';

describe('number', () => {
  it('is defined', () => {
    expect(indicator.number).not.toBeUndefined();
    expect(typeof indicator.number).toBe('function');
  })

  it('validates any safe numbers', () => {
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * Number.MAX_SAFE_INTEGER;
      expect(() => indicator.number(x)).not.toThrow();
      expect(indicator.number(x)).toBe(x);
    }
  })

  it('validates all special numbers', () => {
    let x = Number.MAX_VALUE;
    expect(() => indicator.number(x)).not.toThrow();
    expect(indicator.number(x)).toBe(x);

    x = Number.MIN_VALUE;
    expect(() => indicator.number(x)).not.toThrow();
    expect(indicator.number(x)).toBe(x);

    x = Number.MAX_SAFE_INTEGER;
    expect(() => indicator.number(x)).not.toThrow();
    expect(indicator.number(x)).toBe(x);

    x = Number.MIN_SAFE_INTEGER;
    expect(() => indicator.number(x)).not.toThrow();
    expect(indicator.number(x)).toBe(x);

    x = Number.NaN;
    expect(() => indicator.number(x)).not.toThrow();
    expect(indicator.number(x)).toBe(x);

    x = Infinity;
    expect(() => indicator.number(x)).not.toThrow();
    expect(indicator.number(x)).toBe(x);
  })

  it('invalidates bigint', () => {
    expect(() => indicator.number(10n)).toThrow()
  })

  it('invalidates any other type', () => {
    expect(() => indicator.number('34')).toThrow()
    expect(() => indicator.number(true)).toThrow()
    expect(() => indicator.number({a: 3})).toThrow()
    expect(() => indicator.number([3, 'e'])).toThrow()
    expect(() => indicator.number(null)).toThrow()
    expect(() => indicator.number(undefined)).toThrow()
    expect(() => indicator.number(Symbol.toString)).toThrow()
  })
})

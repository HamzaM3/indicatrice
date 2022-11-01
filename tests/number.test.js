import * as indicatrice from '../src';

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
    expect(() => indicatrice.number(10n)).toThrow()
  })

  it('invalidates any other type', () => {
    expect(() => indicatrice.number('34')).toThrow()
    expect(() => indicatrice.number(true)).toThrow()
    expect(() => indicatrice.number({a: 3})).toThrow()
    expect(() => indicatrice.number([3, 'e'])).toThrow()
    expect(() => indicatrice.number(null)).toThrow()
    expect(() => indicatrice.number(undefined)).toThrow()
    expect(() => indicatrice.number(Symbol.toString)).toThrow()
    expect(() => indicatrice.number(() => 'f')).toThrow()
  })
})

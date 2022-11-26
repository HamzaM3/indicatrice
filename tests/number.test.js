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
    expect(() => indicatrice.number(10n)).toThrow(new TypeError('Do not know how to serialize a BigInt'))
  })

  it('invalidates any other type', () => {
    expect(() => indicatrice.number([3, 4, 5])).toThrow('Input has been invalidated: (indicator: number) (typeof value: object) (value: [3,4,5])')
    expect(() => indicatrice.number('34')).toThrow('Input has been invalidated: (indicator: number) (typeof value: string) (value: "34")')
    expect(() => indicatrice.number({a: 3})).toThrow('Input has been invalidated: (indicator: number) (typeof value: object) (value: {"a":3})')
    expect(() => indicatrice.number(true)).toThrow('Input has been invalidated: (indicator: number) (typeof value: boolean) (value: true)')
    expect(() => indicatrice.number(null)).toThrow('Input has been invalidated: (indicator: number) (typeof value: object) (value: null)')
    expect(() => indicatrice.number(undefined)).toThrow('Input has been invalidated: (indicator: number) (typeof value: undefined) (value: undefined)')
    expect(() => indicatrice.number(Symbol())).toThrow('Input has been invalidated: (indicator: number) (typeof value: symbol) (value: undefined)')
    expect(() => indicatrice.number(() => f)).toThrow('Input has been invalidated: (indicator: number) (typeof value: function) (value: function anonymous)')
  })
})

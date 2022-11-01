import * as indicatrice from '../src';

describe('object', () => {
  it('is defined', () => {
    expect(indicatrice.object).not.toBeUndefined();
    expect(typeof indicatrice.object).toBe('function');
  })

  it('validates objects', () => {
    expect(() => indicatrice.object({u: 4})).not.toThrow();
    expect(indicatrice.object({u: 4})).toEqual({u: 4});
  })

  it('invalidates any other type', () => {
    expect(() => indicatrice.object([3, 4, 5])).toThrow()
    expect(() => indicatrice.object(34)).toThrow()
    expect(() => indicatrice.object('str')).toThrow()
    expect(() => indicatrice.object(true)).toThrow()
    expect(() => indicatrice.object(null)).toThrow()
    expect(() => indicatrice.object(undefined)).toThrow()
    expect(() => indicatrice.object(Symbol.toobject)).toThrow()
    expect(() => indicatrice.object(() => f)).toThrow()
  })
});
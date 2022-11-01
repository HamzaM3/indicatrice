import * as indicatrice from '../src';

describe('array', () => {
  it('is defined', () => {
    expect(indicatrice.array).not.toBeUndefined();
    expect(typeof indicatrice.array).toBe('function');
  })

  it('validates arrays', () => {
    expect(() => indicatrice.array([3, 4, 5])).not.toThrow();
    expect(indicatrice.array([3, 4, 5])).toEqual([3, 4, 5]);
  })

  it('invalidates any other type', () => {
    expect(() => indicatrice.array('34')).toThrow()
    expect(() => indicatrice.array(34)).toThrow()
    expect(() => indicatrice.array({a: 3})).toThrow()
    expect(() => indicatrice.array(true)).toThrow()
    expect(() => indicatrice.array(null)).toThrow()
    expect(() => indicatrice.array(undefined)).toThrow()
    expect(() => indicatrice.array(Symbol.toString)).toThrow()
    expect(() => indicatrice.array(() => f)).toThrow()
  })
});
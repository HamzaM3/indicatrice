import * as indicator from '../src';

describe('array', () => {
  it('is defined', () => {
    expect(indicator.array).not.toBeUndefined();
    expect(typeof indicator.array).toBe('function');
  })

  it('validates arrays', () => {
    expect(() => indicator.array([3, 4, 5])).not.toThrow();
    expect(indicator.array([3, 4, 5])).toEqual([3, 4, 5]);
  })

  it('invalidates any other type', () => {
    expect(() => indicator.array('34')).toThrow()
    expect(() => indicator.array(34)).toThrow()
    expect(() => indicator.array({a: 3})).toThrow()
    expect(() => indicator.array(true)).toThrow()
    expect(() => indicator.array(null)).toThrow()
    expect(() => indicator.array(undefined)).toThrow()
    expect(() => indicator.array(Symbol.toString)).toThrow()
    expect(() => indicator.array(() => f)).toThrow()
  })
});
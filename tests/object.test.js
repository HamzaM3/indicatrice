import * as indicator from '../src';

describe('object', () => {
  it('is defined', () => {
    expect(indicator.object).not.toBeUndefined();
    expect(typeof indicator.object).toBe('function');
  })

  it('validates objects', () => {
    expect(() => indicator.object({u: 4})).not.toThrow();
    expect(indicator.object({u: 4})).toEqual({u: 4});
  })

  it('invalidates any other type', () => {
    expect(() => indicator.object([3, 4, 5])).toThrow()
    expect(() => indicator.object(34)).toThrow()
    expect(() => indicator.object('str')).toThrow()
    expect(() => indicator.object(true)).toThrow()
    expect(() => indicator.object(null)).toThrow()
    expect(() => indicator.object(undefined)).toThrow()
    expect(() => indicator.object(Symbol.toobject)).toThrow()
    expect(() => indicator.object(() => f)).toThrow()
  })
});
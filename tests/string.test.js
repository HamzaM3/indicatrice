import * as indicator from '../src';

describe('string', () => {
  it('is defined', () => {
    expect(indicator.string).not.toBeUndefined();
    expect(typeof indicator.string).toBe('function');
  })

  it('validates strings', () => {
    expect(() => indicator.string('str')).not.toThrow();
    expect(indicator.string('str')).toBe('str');
  })

  it('invalidates any other type', () => {
    expect(() => indicator.string([3, 4, 5])).toThrow()
    expect(() => indicator.string(34)).toThrow()
    expect(() => indicator.string({a: 3})).toThrow()
    expect(() => indicator.string(true)).toThrow()
    expect(() => indicator.string(null)).toThrow()
    expect(() => indicator.string(undefined)).toThrow()
    expect(() => indicator.string(Symbol.toString)).toThrow()
    expect(() => indicator.string(() => f)).toThrow()
  })
});
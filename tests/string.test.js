import * as indicatrice from '../src';

describe('string', () => {
  it('is defined', () => {
    expect(indicatrice.string).not.toBeUndefined();
    expect(typeof indicatrice.string).toBe('function');
  })

  it('validates strings', () => {
    expect(() => indicatrice.string('str')).not.toThrow();
    expect(indicatrice.string('str')).toBe('str');
  })

  it('invalidates any other type', () => {
    expect(() => indicatrice.string([3, 4, 5])).toThrow()
    expect(() => indicatrice.string(34)).toThrow()
    expect(() => indicatrice.string({a: 3})).toThrow()
    expect(() => indicatrice.string(true)).toThrow()
    expect(() => indicatrice.string(null)).toThrow()
    expect(() => indicatrice.string(undefined)).toThrow()
    expect(() => indicatrice.string(Symbol.toString)).toThrow()
    expect(() => indicatrice.string(() => f)).toThrow()
  })
});
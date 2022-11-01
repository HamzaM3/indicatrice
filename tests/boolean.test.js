import * as indicatrice from '../src';

describe('boolean', () => {
  it('is defined', () => {
    expect(indicatrice.boolean).not.toBeUndefined();
    expect(typeof indicatrice.boolean).toBe('function');
  })

  it('validates booleans', () => {
    expect(() => indicatrice.boolean(true)).not.toThrow();
    expect(indicatrice.boolean(true)).toBe(true);
    expect(() => indicatrice.boolean(false)).not.toThrow();
    expect(indicatrice.boolean(false)).toBe(false);
  })

  it('invalidates any other type', () => {
    expect(() => indicatrice.boolean('34')).toThrow()
    expect(() => indicatrice.boolean(34)).toThrow()
    expect(() => indicatrice.boolean({a: 3})).toThrow()
    expect(() => indicatrice.boolean([3, 'e'])).toThrow()
    expect(() => indicatrice.boolean(null)).toThrow()
    expect(() => indicatrice.boolean(undefined)).toThrow()
    expect(() => indicatrice.boolean(Symbol.toString)).toThrow()
    expect(() => indicatrice.boolean(() => 'f')).toThrow()
  })
});

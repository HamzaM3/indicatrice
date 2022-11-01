import * as indicator from '../src';

describe('boolean', () => {
  it('is defined', () => {
    expect(indicator.boolean).not.toBeUndefined();
    expect(typeof indicator.boolean).toBe('function');
  })

  it('validates booleans', () => {
    expect(() => indicator.boolean(true)).not.toThrow();
    expect(indicator.boolean(true)).toBe(true);
    expect(() => indicator.boolean(false)).not.toThrow();
    expect(indicator.boolean(false)).toBe(false);
  })

  it('invalidates any other type', () => {
    expect(() => indicator.boolean('34')).toThrow()
    expect(() => indicator.boolean(34)).toThrow()
    expect(() => indicator.boolean({a: 3})).toThrow()
    expect(() => indicator.boolean([3, 'e'])).toThrow()
    expect(() => indicator.boolean(null)).toThrow()
    expect(() => indicator.boolean(undefined)).toThrow()
    expect(() => indicator.boolean(Symbol.toString)).toThrow()
    expect(() => indicator.boolean(() => 'f')).toThrow()
  })
});

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
    expect(() => indicatrice.boolean([3, 4, 5])).toThrow('Input has been invalidated: (indicator: boolean) (typeof value: object) (value: [3,4,5])')
    expect(() => indicatrice.boolean(34)).toThrow('Input has been invalidated: (indicator: boolean) (typeof value: number) (value: 34)')
    expect(() => indicatrice.boolean({a: 3})).toThrow('Input has been invalidated: (indicator: boolean) (typeof value: object) (value: {"a":3})')
    expect(() => indicatrice.boolean('34')).toThrow('Input has been invalidated: (indicator: boolean) (typeof value: string) (value: "34")')
    expect(() => indicatrice.boolean(null)).toThrow('Input has been invalidated: (indicator: boolean) (typeof value: object) (value: null)')
    expect(() => indicatrice.boolean(undefined)).toThrow('Input has been invalidated: (indicator: boolean) (typeof value: undefined) (value: undefined)')
    expect(() => indicatrice.boolean(Symbol())).toThrow('Input has been invalidated: (indicator: boolean) (typeof value: symbol) (value: undefined)')
    expect(() => indicatrice.boolean(() => f)).toThrow('Input has been invalidated: (indicator: boolean) (typeof value: function) (value: function anonymous)')
  })
});

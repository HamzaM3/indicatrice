import * as indicatrice from '../src';
import { ValidationError } from '../src/ValidationError';

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
    expect(() => indicatrice.string([3, 4, 5])).toThrow('Input has been invalidated: (indicator: string) (typeof value: object) (value: [3,4,5])')
    expect(() => indicatrice.string(34)).toThrow('Input has been invalidated: (indicator: string) (typeof value: number) (value: 34)')
    expect(() => indicatrice.string({a: 3})).toThrow('Input has been invalidated: (indicator: string) (typeof value: object) (value: {"a":3})')
    expect(() => indicatrice.string(true)).toThrow('Input has been invalidated: (indicator: string) (typeof value: boolean) (value: true)')
    expect(() => indicatrice.string(null)).toThrow('Input has been invalidated: (indicator: string) (typeof value: object) (value: null)')
    expect(() => indicatrice.string(undefined)).toThrow('Input has been invalidated: (indicator: string) (typeof value: undefined) (value: undefined)')
    expect(() => indicatrice.string(Symbol())).toThrow('Input has been invalidated: (indicator: string) (typeof value: symbol) (value: undefined)')
    expect(() => indicatrice.string(() => f)).toThrow('Input has been invalidated: (indicator: string) (typeof value: function) (value: function anonymous)')
  })
});

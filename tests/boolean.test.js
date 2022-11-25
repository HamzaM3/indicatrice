import * as indicatrice from '../src';
import { ValidationError } from '../src/ValidationError';

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
    expect(() => indicatrice.boolean('34')).toThrow(new ValidationError('input value is not a boolean but of type string. (value: "34")'))
    expect(() => indicatrice.boolean([3, 4, 5])).toThrow(new ValidationError('input value is not a boolean but of type object. (value: [3,4,5])'))
    expect(() => indicatrice.boolean(34)).toThrow(new ValidationError('input value is not a boolean but of type number. (value: 34)'))
    expect(() => indicatrice.boolean({a: 3})).toThrow(new ValidationError('input value is not a boolean but of type object. (value: {"a":3})'))
    expect(() => indicatrice.boolean(null)).toThrow(new ValidationError('input value is not a boolean but of type object. (value: null)'))
    expect(() => indicatrice.boolean(undefined)).toThrow(new ValidationError('input value is not a boolean but of type undefined. (value: undefined)'))
    expect(() => indicatrice.boolean(Symbol())).toThrow(new ValidationError('input value is not a boolean but of type symbol. (value: undefined)'))
    expect(() => indicatrice.boolean(() => f)).toThrow(new ValidationError('input value is not a boolean but of type function. (value: function anonymous)'))
  })
});

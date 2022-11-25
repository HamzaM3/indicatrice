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
    expect(() => indicatrice.string([3, 4, 5])).toThrow(new ValidationError('input value is not a string but of type object. (value: [3,4,5])'))
    expect(() => indicatrice.string(34)).toThrow(new ValidationError('input value is not a string but of type number. (value: 34)'))
    expect(() => indicatrice.string({a: 3})).toThrow(new ValidationError('input value is not a string but of type object. (value: {"a":3})'))
    expect(() => indicatrice.string(true)).toThrow(new ValidationError('input value is not a string but of type boolean. (value: true)'))
    expect(() => indicatrice.string(null)).toThrow(new ValidationError('input value is not a string but of type object. (value: null)'))
    expect(() => indicatrice.string(undefined)).toThrow(new ValidationError('input value is not a string but of type undefined. (value: undefined)'))
    expect(() => indicatrice.string(Symbol())).toThrow(new ValidationError('input value is not a string but of type symbol. (value: undefined)'))
    expect(() => indicatrice.string(() => f)).toThrow(new ValidationError('input value is not a string but of type function. (value: function anonymous)'))
  })
});
import { array, number, boolean, object, string } from '../src';
import { ValidationError } from '../src/ValidationError';

describe('array.type', () => {
  it('is defined', () => {
    expect(array.type).not.toBeUndefined();
    expect(typeof array.type).toBe('function');
  })

  it('validates arrays', () => {
    expect(() => array.type([3, 4, 5])).not.toThrow();
    expect(array.type([3, 4, 5])).toEqual([3, 4, 5]);
  })

  it('invalidates any other type', () => {
    expect(() => array.type('34')).toThrow(new ValidationError('input value is not an array: (typeof: string) (value: "34")'))
    expect(() => array.type(34)).toThrow(new ValidationError('input value is not an array: (typeof: number) (value: 34)'))
    expect(() => array.type({a: 3})).toThrow(new ValidationError('input value is not an array: (typeof: object) (value: {"a":3})'))
    expect(() => array.type(true)).toThrow(new ValidationError('input value is not an array: (typeof: boolean) (value: true)'))
    expect(() => array.type(null)).toThrow(new ValidationError('input value is not an array: (typeof: object) (value: null)'))
    expect(() => array.type(undefined)).toThrow(new ValidationError('input value is not an array: (typeof: undefined) (value: undefined)'))
    expect(() => array.type(Symbol())).toThrow(new ValidationError('input value is not an array: (typeof: symbol) (value: undefined)'))
    expect(() => array.type(() => f)).toThrow(new ValidationError('input value is not an array: (typeof: function) (value: function anonymous)'))
  })
});

describe('array', () => {
  it('is defined', () => {
    expect(array).not.toBeUndefined();
    expect(typeof array).toBe('function');
  })

  it('validates arrays of number type', () => {
    const validator = array(number);
    let data = [3, 4, 2];
    expect(validator(data)).toEqual(data);
    data = ['3', 4, 2];
    expect(() => validator(data)).toThrow(new ValidationError('input value is not a number but of type string. (value: "3")'));
  })

  it('validates arrays of boolean type', () => {
    const validator = array(boolean);
    let data = [true, false, true];
    expect(validator(data)).toEqual(data);
  })

  it('validates arrays of complex objects', () => {
    const validator = array(
      object({
        a: object({
          b: number,
          c: string
        }),
        d: boolean,
        e: array(number)
      })
    );
    let data = [
      {a: {b: 3, c: 'str'}, d: true, e: [3]},
      {a: {b: -1, c: 'cao'}, d: false, e: [3, 4, 5]},
      {a: {b: 2, c: ''}, d: true, e: []},
    ];
    expect(validator(data)).toEqual(data);
    data = [
      {a: {b: 3, c: 4}, d: true, e: [3]},
      {a: {b: -1, c: 'cao'}, d: false, e: [3, 4, 5]},
      {a: {b: 2, c: ''}, d: true, e: []},
    ];
    expect(() => validator(data)).toThrow(new ValidationError('input value is not a string but of type number. (value: 4)'));
  })
})

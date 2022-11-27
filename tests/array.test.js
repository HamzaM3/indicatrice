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
    expect(() => array.type('34')).toThrow('Input has been invalidated: (indicator: array) (typeof value: string) (value: "34")')
    expect(() => array.type(34)).toThrow('Input has been invalidated: (indicator: array) (typeof value: number) (value: 34)')
    expect(() => array.type({a: 3})).toThrow('Input has been invalidated: (indicator: array) (typeof value: object) (value: {"a":3})')
    expect(() => array.type(true)).toThrow('Input has been invalidated: (indicator: array) (typeof value: boolean) (value: true)')
    expect(() => array.type(null)).toThrow('Input has been invalidated: (indicator: array) (typeof value: object) (value: null)')
    expect(() => array.type(undefined)).toThrow('Input has been invalidated: (indicator: array) (typeof value: undefined) (value: undefined)')
    expect(() => array.type(Symbol())).toThrow('Input has been invalidated: (indicator: array) (typeof value: symbol) (value: undefined)')
    expect(() => array.type(() => f)).toThrow('Input has been invalidated: (indicator: array) (typeof value: function) (value: function anonymous)')
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
    expect(() => validator(data)).toThrow('Input has been invalidated: (path: [0]) (indicator: number) (typeof value: string) (value: "3")');
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
    expect(() => validator(data)).toThrow('Input has been invalidated: (path: [0].a.c) (indicator: string) (typeof value: number) (value: 4)');
  })
})

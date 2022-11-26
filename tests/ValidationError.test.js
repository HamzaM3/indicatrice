import { ValidationError } from '../src/ValidationError';

describe('ValidationError', () => {
  it('is defined', () => {
    expect(typeof ValidationError).toBe('function');
    expect(() => new ValidationError({})).not.toThrow()
  });

  it('throws correct WRONG_TYPE errors without path nor original value', () => {
    let error = new ValidationError({ errorType: 'WRONG_TYPE', type: 'boolean', value: 3 })
    expect(error.message).toBe('Input has been invalidated: (indicator: boolean) (typeof value: number) (value: 3)')


    error = new ValidationError({ errorType: 'WRONG_TYPE', type: 'non-array object', value: [3,4] })
    expect(error.message).toBe('Input has been invalidated: (indicator: non-array object) (typeof value: object) (value: [3,4])')


    error = new ValidationError({ errorType: 'WRONG_TYPE', type: 'number', value: {a:4,b:"str"} })
    expect(error.message).toBe('Input has been invalidated: (indicator: number) (typeof value: object) (value: {"a":4,"b":"str"})')
  });

  it('throws correct WRONG_TYPE errors with path and original value', () => {
    let error = new ValidationError({ errorType: 'WRONG_TYPE', type: 'number', value: "str", path: ['b', 'c'], originalValue: {a:3,b:{c:"str"}} })
    expect(error.message).toBe('Input has been invalidated: (path: .b.c) (indicator: number) (typeof value: string) (value: "str") (original value: {"a":3,"b":{"c":"str"}})')


    error = new ValidationError({ errorType: 'WRONG_TYPE', type: 'non-array object', value: [3], path: ['a', 1], originalValue: {a: [{b:3},[3]]} })
    expect(error.message).toBe('Input has been invalidated: (path: .a[1]) (indicator: non-array object) (typeof value: object) (value: [3]) (original value: {"a":[{"b":3},[3]]})')
  });

  it('throws correct WRONG_NUMBER_FIELD errors without path nor original value', () => {
    let error = new ValidationError({ errorType: 'WRONG_NUMBER_FIELD', expected: ['a', 'b', 'c'], received: ['nope']})
    expect(error.message).toBe('Incorrect amount of object fields: (expected fields: ["a","b","c"]) (received fields: ["nope"])')
  });

  it('throws correct WRONG_NUMBER_FIELD errors with path and original value', () => {
    let error = new ValidationError({ errorType: 'WRONG_NUMBER_FIELD', path: ['data'], expected: ['a', 'b', 'c'], received: ['nope'], originalValue: {data: {nope: "nope"}}})
    expect(error.message).toBe('Incorrect amount of object fields: (path: .data) (expected fields: ["a","b","c"]) (received fields: ["nope"]) (original value: {"data":{"nope":"nope"}})')
  });

  it('throws correct FIELD_IS_NOT_AN_INDICATOR errors', () => {
    let error = new ValidationError({ errorType: 'FIELD_IS_NOT_AN_INDICATOR', path: ['a', 0] })
    expect(error.message).toBe('.a[0] is not a correct indicator')
  });

  it('throws correct NOT_JSONABLE errors', () => {
    let error = new ValidationError({ errorType: 'NOT_JSONABLE' })
    expect(error.message).toBe('Input is not JSONABLE')
  });

  it('throws correct error for unknown causes', () => {
    let error = new ValidationError({})
    expect(error.message).toBe('indicatrice didn\'t not trigger this error ! Open an issue please !')
  })
});
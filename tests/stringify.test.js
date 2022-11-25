import { stringify } from "../src/stringify"

describe('stringify', () => {
  it('is defined', () => {
    expect(typeof stringify).toBe('function');
  })

  // this is basically testing JSON.stringify
  it('works with number', () => {
    expect(stringify(3)).toBe("3")
    expect(stringify(-3)).toBe("-3")
  })

  it('works with string', () => {
    expect(stringify('3')).toBe('"3"')
    expect(stringify('string')).toBe('"string"')
  })

  it('works with boolean', () => {
    expect(stringify(true)).toBe('true')
    expect(stringify(false)).toBe('false')
  })

  it('works with null', () => {
    expect(stringify(null)).toBe('null')
  })

  it('works with object', () => {
    expect(stringify({a: 3, b: {c: "str"}})).toBe('{"a":3,"b":{"c":"str"}}')
  })

  it('works with arrays', () => {
    expect(stringify([3, {c: null}, "string"])).toBe('[3,{"c":null},"string"]')
  })

  it('works with undefined', () => {
    expect(stringify(undefined)).toBe('undefined')
  })

  it('breaks with BigInts', () => {
    expect(() => stringify(1n)).toThrow()
  })

  it('breaks with a nested BigInts', () => {
    expect(() => stringify({a: 1n})).toThrow()
  })

  it('ignores Symbols', () => {
    expect(stringify(Symbol())).toBe()
  })

  it('ignores nested Symbols', () => {
    expect(stringify({a: Symbol()})).toBe('{}')
  })

  it('works with functions', () => {
    expect(stringify(() => {return 'ho'})).toBe('function anonymous')
    expect(stringify(function func() {return 'ho'})).toBe('function func')
  })

  it('ignores nested functions', () => {
    expect(stringify({a: () => {return 'ho'}})).toBe('{}')
  })
})
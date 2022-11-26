import * as indicatrice from '../src';
import { ValidationError } from '../src/ValidationError';

const { number, object, string, boolean } = indicatrice;

describe('object.type', () => {
  it('is defined', () => {
    expect(object.type).not.toBeUndefined();
    expect(typeof object.type).toBe('function');
  })

  it('validates object.types', () => {
    expect(() => object.type({u: 4})).not.toThrow();
    expect(object.type({u: 4})).toEqual({u: 4});
  })

  it('invalidates any other type', () => {
    expect(() => indicatrice.object.type([3, 4, 5])).toThrow('Input has been invalidated: (indicator: non-array object) (typeof value: object) (value: [3,4,5])')
    expect(() => indicatrice.object.type('34')).toThrow('Input has been invalidated: (indicator: non-array object) (typeof value: string) (value: "34")')
    expect(() => indicatrice.object.type(34)).toThrow('Input has been invalidated: (indicator: non-array object) (typeof value: number) (value: 34)')
    expect(() => indicatrice.object.type(true)).toThrow('Input has been invalidated: (indicator: non-array object) (typeof value: boolean) (value: true)')
    expect(() => indicatrice.object.type(null)).toThrow('Input has been invalidated: (indicator: non-array object) (typeof value: object) (value: null)')
    expect(() => indicatrice.object.type(undefined)).toThrow('Input has been invalidated: (indicator: non-array object) (typeof value: undefined) (value: undefined)')
    expect(() => indicatrice.object.type(Symbol())).toThrow('Input has been invalidated: (indicator: non-array object) (typeof value: symbol) (value: undefined)')
    expect(() => indicatrice.object.type(() => f)).toThrow('Input has been invalidated: (indicator: non-array object) (typeof value: function) (value: function anonymous)')
  })
});

describe('object', () => {
  it('is defined', () => {
    expect(object).not.toBeUndefined();
    expect(typeof object).toBe('function');
  })

  it('validates correct simple objects', () => {
    const validator = object({
      a: number,
      b: string,
      c: boolean,
    })

    const data = {
      a: 3,
      b: 'str',
      c: true,
    }

    expect(validator(data)).toEqual(data)
  });

  it('invalidates wrong simple objects', () => {
    const validator = object({
      a: number,
      b: string,
      c: boolean,
    });

    let data = {
      a: false,
      b: 'str',
      c: true,
    };

    expect(() => validator(data)).toThrow('Input has been invalidated: (path: .a) (indicator: number) (typeof value: boolean) (value: false) (original value: {"a":false,"b":"str","c":true})');

    data = {
      a: 3,
      b: 4,
      c: true,
    };

    expect(() => validator(data)).toThrow('Input has been invalidated: (path: .b) (indicator: string) (typeof value: number) (value: 4) (original value: {"a":3,"b":4,"c":true})');

    data = {
      a: 3,
      b: 'str',
      c: 5,
    };

    expect(() => validator(data)).toThrow('Input has been invalidated: (path: .c) (indicator: boolean) (typeof value: number) (value: 5) (original value: {"a":3,"b":"str","c":5})');
  });

  it('validates correct nested objects', () => {
    const validator = object({
      a: object({
        aa: number,
        ab: boolean,
      }),
      b: object({
        ba: string,
        bb: object({
          bba: boolean,
        })
      }),
      c: number,
    })

    const data = {
      a: {
        aa: 3,
        ab: true,
      },
      b: {
        ba: 'str',
        bb: {
          bba: true,
        }
      },
      c: 33,
    }

    expect(validator(data)).toEqual(data);
  });

  it('invalidates wrong nested objects', () => {
    const validator = object({
      a: object({
        aa: number,
        ab: boolean,
      }),
      b: object({
        ba: string,
        bb: object({
          bba: boolean,
        })
      }),
      c: number,
    })

    let data = {
      a: {
        aa: 3,
        ab: true,
      },
      b: {
        ba: 'str',
        bb: {
          bba: true,
        }
      },
      c: 33,
    }

    expect(validator(data)).toEqual(data);

    data = {
      a: {
        aa: "str",
        ab: true,
      },
      b: {
        ba: 'str',
        bb: {
          bba: true,
        }
      },
      c: 33,
    }

    expect(() => validator(data)).toThrow('Input has been invalidated: (path: .a.aa) (indicator: number) (typeof value: string) (value: "str") (original value: {"a":{"aa":"str","ab":true},"b":{"ba":"str","bb":{"bba":true}},"c":33})');

    data = {
      a: {
        aa: 3,
      },
      b: {
        ba: 'str',
        bb: {
          bba: true,
        }
      },
      c: 33,
    }

    expect(() => validator(data)).toThrow('Incorrect amount of object fields: (path: .a) (expected fields: ["aa","ab"]) (received fields: ["aa"]) (original value: {"a":{"aa":3},"b":{"ba":"str","bb":{"bba":true}},"c":33})');

    data = {
      a: undefined,
      b: {
        ba: 'str',
        bb: {
          bba: true,
        }
      },
      c: 33,
    }

    expect(() => validator(data)).toThrow('Input has been invalidated: (path: .a) (indicator: non-array object) (typeof value: undefined) (value: undefined) (original value: {"b":{"ba":"str","bb":{"bba":true}},"c":33})');

    data = {
      a: {
        aa: 3,
        ab: false,
      },
      b: {
        ba: 'str',
        bb: {
          bba: 3,
        }
      },
      c: 33,
    }

    expect(() => validator(data)).toThrow('Input has been invalidated: (path: .b.bb.bba) (indicator: boolean) (typeof value: number) (value: 3) (original value: {"a":{"aa":3,"ab":false},"b":{"ba":"str","bb":{"bba":3}},"c":33})');

    data = {
      a: {
        aa: 3,
        ab: false,
      },
      b: {
        x: 'str',
        y: ['a'],
      },
      c: 33,
    }

    expect(() => validator(data)).toThrow('Input has been invalidated: (path: .b.ba) (indicator: string) (typeof value: undefined) (value: undefined) (original value: {"a":{"aa":3,"ab":false},"b":{"x":"str","y":["a"]},"c":33})');
  });
});

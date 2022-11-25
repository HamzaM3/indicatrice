import { number, object, string, boolean } from '../src';

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
    expect(() => object.type([3, 4, 5])).toThrow()
    expect(() => object.type(34)).toThrow()
    expect(() => object.type('str')).toThrow()
    expect(() => object.type(true)).toThrow()
    expect(() => object.type(null)).toThrow()
    expect(() => object.type(undefined)).toThrow()
    expect(() => object.type(Symbol())).toThrow()
    expect(() => object.type(() => f)).toThrow()
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

    expect(() => validator(data)).toThrow('input value is not a number');

    data = {
      a: 3,
      b: 4,
      c: true,
    };

    expect(() => validator(data)).toThrow('input value is not a string');

    data = {
      a: 3,
      b: 'str',
      c: 5,
    };

    expect(() => validator(data)).toThrow('input value is not a boolean');
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

    expect(() => validator(data)).toThrow("input value is not a number");

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

    expect(() => validator(data)).toThrow("input value doesn't have the right number of fields");

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

    expect(() => validator(data)).toThrow("input value is not an object");

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

    expect(() => validator(data)).toThrow("input value is not a boolean");

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

    expect(() => validator(data)).toThrow("input value is not a string");
  });
});

import { number, object, string, boolean } from '../src';
import { ValidationError } from '../src/ValidationError';

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
    expect(() => object.type([3, 4, 5])).toThrow(new ValidationError(`input value is not a non-array object: (typeof: object) (value: [3,4,5])`))
    expect(() => object.type(34)).toThrow(new ValidationError(`input value is not a non-array object: (typeof: number) (value: 34)`))
    expect(() => object.type('str')).toThrow(new ValidationError(`input value is not a non-array object: (typeof: string) (value: "str")`))
    expect(() => object.type(true)).toThrow(new ValidationError(`input value is not a non-array object: (typeof: boolean) (value: true)`))
    expect(() => object.type(null)).toThrow(new ValidationError(`input value is not a non-array object: (typeof: object) (value: null)`))
    expect(() => object.type(undefined)).toThrow(new ValidationError(`input value is not a non-array object: (typeof: undefined) (value: undefined)`))
    expect(() => object.type(Symbol())).toThrow(new ValidationError(`input value is not a non-array object: (typeof: symbol) (value: undefined)`))
    expect(() => object.type(() => f)).toThrow(new ValidationError(`input value is not a non-array object: (typeof: function) (value: function anonymous)`))
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

    expect(() => validator(data)).toThrow(new ValidationError('input value is not a number but of type boolean. (value: false)'));

    data = {
      a: 3,
      b: 4,
      c: true,
    };

    expect(() => validator(data)).toThrow(new ValidationError('input value is not a string but of type number. (value: 4)'));

    data = {
      a: 3,
      b: 'str',
      c: 5,
    };

    expect(() => validator(data)).toThrow(new ValidationError('input value is not a boolean but of type number. (value: 5)'));
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

    expect(() => validator(data)).toThrow(new ValidationError('input value is not a number but of type string. (value: "str")'));

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

    expect(() => validator(data)).toThrow(new ValidationError("input value is not a non-array object: (typeof: undefined) (value: undefined)"));

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

    expect(() => validator(data)).toThrow(new ValidationError("input value is not a boolean but of type number. (value: 3)"));

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

    expect(() => validator(data)).toThrow(new ValidationError("input value is not a string but of type undefined. (value: undefined)"));
  });
});

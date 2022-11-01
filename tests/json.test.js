import * as indicator from '../src/index';

describe('json validation', () => {
    it('is defined', () => {
        expect(indicator.json).not.toBeUndefined();
        expect(typeof indicator.json).toBe('function')
    })

    it('validates primitive values', () => {
        const data = [
            'string',
            34,
            true,
            undefined,
            null,
        ]

        for (const d of data) {
            expect(() => indicator.json(d)).not.toThrow();
            expect(indicator.json(d)).toEqual(d);
        }
    })

    it('invalidates functions, bigint and symbols', () => {
        expect(() => indicator.json(Symbol.toStringTag)).toThrow();
        expect(() => indicator.json(() => 'im a function')).toThrow();
        expect(() => indicator.json(1n)).toThrow();
    })

    it('validates array of primitive values', () => {
        const data = ['string', 34, true, undefined, null];

        expect(() => indicator.json(data)).not.toThrow();
        expect(indicator.json(data)).toEqual(data);
    })

    it('validates object of primitive values', () => {
        const data = {str: 'string', num: 34, boo: true, u: undefined, n: null};

        expect(() => indicator.json(data)).not.toThrow();
        expect(indicator.json(data)).toEqual(data);
    })

    it('validates nested array of primitive values', () => {
        const data = ['string', [34, ''], [true, [-1, null]], undefined, null];

        expect(() => indicator.json(data)).not.toThrow();
        expect(indicator.json(data)).toEqual(data);
    })

    it('validates nested object of primitive values', () => {
        const data = {str: {substr: 'string', k: true}, num: 34, boo: true, u: {sub: {a: undefined, k:32}, a: 43}, n: null};

        expect(() => indicator.json(data)).not.toThrow();
        expect(indicator.json(data)).toEqual(data);
    })

    it('invalidates nested array of non-POJO values', () => {
        let data = ['string', [34, ''], [() => 'the value', [-1, null]], undefined, null];
        expect(() => indicator.json(data)).toThrow();

        data = ['string', [34, ''], [23n, [-1, null]], undefined, null];
        expect(() => indicator.json(data)).toThrow();

        data = ['string', [34, Symbol.toPrimitive], [23, [-1, null]], undefined, null];
        expect(() => indicator.json(data)).toThrow();
    })

    it('invalidates nested object of non-POJO values', () => {
        let data = {str: {substr: 'string', k: true}, num: () => 'hehe', boo: true, u: {sub: {a: undefined, k:32}, a: 43}, n: null};
        expect(() => indicator.json(data)).toThrow();

        data = {str: {substr: 'string', k: true}, num: 'ho', boo: true, u: {sub: {a: undefined, k: 34n}, a: 43}, n: null};
        expect(() => indicator.json(data)).toThrow();

        data = {str: {substr: 'string', k: Symbol()}, num: 'ho', boo: true, u: {sub: {a: undefined, k: 'r'}, a: 43}, n: null};
        expect(() => indicator.json(data)).toThrow();
    })
})
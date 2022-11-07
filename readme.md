# indicatrice

This is a library for cleanly validating the type of data.

(I am not a professional yet, if anyone can help me or teach me how to do libraries properly it would be extremely nice)

## Definition of JSON-able

It is a value that is either:
- a string
- a number
- a boolean
- null or undefined
- an array of JSON-able
- an object of JSON-able with string keys

Unlike the official one, we allow `undefined`


## API

## List of available indicator function:

All the function take the value, test whether the value is of the proper type. If it is, it returns it as is, if not it throws an Error
- `indicatrice.json`: JSON-able values
- `indicatrice.number`: Number
- `indicatrice.string`: String
- `indicatrice.boolean`: Boolean
- `indicatrice.object.type`: Object (that is not an Array or a Function)
- `indicatrice.array.type`: Array

## indicatrice.object

Takes an object of indicator functions and returns a function that test whether a piece of data is an object of the given shape.

### Example

```js
const validator = object({
  firstname: string,
  lastname: string,
  accountant: object({
    firstname: string,
    lastname: string,
  }),
  bankDetails: object({
    iban: string,
    bic: string,
  }),
});

const data = // some data
validator(data);
```

## indicatrice.array

Takes an object of indicator functions and returns a function that tests whether a piece of data is an array with values of a given type.

### Example

```js
const validator = array(object({
  husband: object({
    id: number,
    firstname: string,
    lastname: string
  }),
  wife: object({
    id: number,
    firstname: string,
    lastname: string,
  }),
  numberOfChildren: number,
  childrenId: array(number), 
}));

const data = // some data
validator(data);
```

# indicatrice

This is a library for cleanly validating the type of data.

Please, send issues if you find any bugs or want any improvement on the library. Thank you for using *indicatrice* !

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

All the functions below take a value, test whether it is of the proper type. If it is, it returns it as is, if not it throws an Error
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

## Twitter api example

I propose to use this library for API response validation. Sometimes, API can be modified or can be maliciously hacked, it is a good security measure to have it validated by some light type validation method. I have prepared an example using a [Twitter API](https://developer.twitter.com/en/docs/twitter-api/tweets/search/quick-start/recent-search) response.

Check out the [example](https://github.com/HamzaM3/indicatrice/tree/main/example) directory to analyze how I suggest you use this library.

## Things to know about types

This section will be filled with information about types in Javascript. This is just to contextualize you on how types work in JS. It's made for new people so that they understand why some weird things can happen.

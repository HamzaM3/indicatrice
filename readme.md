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

All the function take the value, test whether the value is of the proper type. If it is, it returns it as is, if not it throws an Error

## List of available indicatrice function:

- `indicatrice.json`: JSON-able values
- `indicatrice.number`: Number
- `indicatrice.string`: String
- `indicatrice.boolean`: Boolean
- `indicatrice.object`: Object (that is not an Array or a Function)
- `indicatrice.array`: Array

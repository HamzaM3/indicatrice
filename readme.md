# indicatrice

This is a library for cleanly validating the type of data.

(I am not a professional yet, if anyone can help me or teach me how to do libraries properly it would extremely nice)

This is version 0 where it is possible to test whether the input is JSON-able i.e. either:
- a string
- a number
- a boolean
- null or undefined
- an array of JSON-able
- an object of JSON-able with string keys


## API

### List of available functions:

- `indicatrice.json`

### `indicatrice.json`

Takes a value as argument and returns it (with no modification) if it is JSON-able (as defined above) or throws an error if not.

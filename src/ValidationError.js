import { stringify, pathToString } from "./utils";

export class ValidationError extends Error {
  constructor (errorData) {
    let { errorType, path, originalValue} = errorData;
    path = path && pathToString(path);
    let message;
    switch (errorType) {
      case 'WRONG_TYPE':
        const { type, value } = errorData;
        message = `Input has been invalidated:${ path ? ` (path: ${ path })` : '' } (indicator: ${type}) (typeof value: ${ typeof value }) (value: ${ stringify(value) })${originalValue ? ` (original value: ${ stringify(originalValue) })` : ''}`;
        break;
      case 'WRONG_NUMBER_FIELD':
        const { expected, received } = errorData;
        message = `Incorrect amount of object fields:${ path ? ` (path: ${ path })` : '' } (expected fields: ${JSON.stringify(expected)}) (received fields: ${JSON.stringify(received)})${originalValue ? ` (original value: ${ stringify(originalValue) })` : ''}`;
        break;
      case 'FIELD_IS_NOT_AN_INDICATOR':
        message = `${path} is not a correct indicator`
        break;
      case 'NOT_JSONABLE':
        message = `Input is not JSONABLE`;
        break;
      default:
        message = `indicatrice didn't not trigger this error ! Open an issue please !`
        break;
    }
    
    super(message)
    this.name = 'ValidationError'
    this.errorData = errorData;
  }
}

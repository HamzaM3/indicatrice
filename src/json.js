import indicatorSymbol from "./indicatorSymbol";

export const json = function json(val) {
  if (val === null || val === undefined) return val;
  switch (typeof val) {
      case 'string':
      case 'number':
      case 'boolean':
          return val;
      case 'object':
          if (Object.keys(val).some(key => typeof key !== 'string'))
            throw new Error('input value is not jsonable')

          if(Array.isArray(val)) val.forEach(json)
          else Object.keys(val).forEach(key => json(val[key]))
          return val;
      default:
          throw new Error('input value is not jsonable')
  }
}

json[indicatorSymbol] = true;

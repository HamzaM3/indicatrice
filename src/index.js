module.exports.json = function json(val) {
    if (val === null || val === undefined) return val;
    switch (typeof val) {
        case 'string':
        case 'number':
        case 'boolean':
            return val;
        case 'object':
            if(Array.isArray(val)) val.forEach(json)
            else Object.keys(val).forEach(key => json(val[key]))
            return val;
        default:
            throw new Error('not a primitive type value')
    }
}
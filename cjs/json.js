"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;
var _indicatorSymbol = _interopRequireDefault(require("./indicatorSymbol"));
var _ValidationError = require("./ValidationError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var json = function json(val) {
  if (val === null || val === undefined) return val;
  switch (_typeof(val)) {
    case 'string':
    case 'number':
    case 'boolean':
      return val;
    case 'object':
      if (Object.keys(val).some(function (key) {
        return typeof key !== 'string';
      })) throw new _ValidationError.ValidationError({
        errorType: 'NOT_JSONABLE'
      });
      if (Array.isArray(val)) val.forEach(function (v) {
        return json(v);
      });else Object.keys(val).forEach(function (key) {
        return json(val[key]);
      });
      return val;
    default:
      throw new _ValidationError.ValidationError({
        errorType: 'NOT_JSONABLE'
      });
  }
};
exports.json = json;
json[_indicatorSymbol["default"]] = true;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.number = void 0;
var _indicatorSymbol = _interopRequireDefault(require("./indicatorSymbol"));
var _ValidationError = require("./ValidationError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var number = function number(val, path, originalValue) {
  if (typeof val === 'number') return val;
  throw new _ValidationError.ValidationError({
    errorType: 'WRONG_TYPE',
    type: 'number',
    value: val,
    path: path,
    originalValue: originalValue
  });
};
exports.number = number;
number[_indicatorSymbol["default"]] = true;
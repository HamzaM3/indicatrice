"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = void 0;
var _indicatorSymbol = _interopRequireDefault(require("./indicatorSymbol"));
var _ValidationError = require("./ValidationError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var string = function string(val, path, originalValue) {
  if (typeof val === 'string') return val;
  throw new _ValidationError.ValidationError({
    errorType: 'WRONG_TYPE',
    type: 'string',
    value: val,
    path: path,
    originalValue: originalValue
  });
};
exports.string = string;
string[_indicatorSymbol["default"]] = true;
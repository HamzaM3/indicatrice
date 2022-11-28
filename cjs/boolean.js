"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["boolean"] = void 0;
var _indicatorSymbol = _interopRequireDefault(require("./indicatorSymbol"));
var _ValidationError = require("./ValidationError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _boolean = function _boolean(val, path, originalValue) {
  if (typeof val === 'boolean') return val;
  throw new _ValidationError.ValidationError({
    errorType: 'WRONG_TYPE',
    type: 'boolean',
    value: val,
    path: path,
    originalValue: originalValue
  });
};
exports["boolean"] = _boolean;
_boolean[_indicatorSymbol["default"]] = true;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.array = void 0;
var _indicatorSymbol = _interopRequireDefault(require("./indicatorSymbol"));
var _ValidationError = require("./ValidationError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var array = function array(indicator) {
  var res = function res(val) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var originalValue = arguments.length > 2 ? arguments[2] : undefined;
    originalValue = originalValue === undefined ? val : originalValue;
    array.type(val, path, originalValue);
    for (var i = 0; i < val.length; i++) {
      indicator(val[i], [].concat(_toConsumableArray(path), [i]), originalValue);
    }
    return val;
  };
  res[_indicatorSymbol["default"]] = true;
  return res;
};
exports.array = array;
array.type = function (val, path, originalValue) {
  if (Array.isArray(val)) return val;
  throw new _ValidationError.ValidationError({
    errorType: 'WRONG_TYPE',
    type: 'array',
    value: val,
    path: path,
    originalValue: originalValue
  });
};
array.type[_indicatorSymbol["default"]] = true;
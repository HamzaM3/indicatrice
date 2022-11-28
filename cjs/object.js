"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.object = void 0;
var _indicatorSymbol = _interopRequireDefault(require("./indicatorSymbol"));
var _ValidationError = require("./ValidationError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var object = function object(fields) {
  var res = function res(val) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var originalValue = arguments.length > 2 ? arguments[2] : undefined;
    originalValue = originalValue === undefined ? val : originalValue;
    object.type(val, path, originalValue);
    if (Object.keys(val).length !== Object.keys(fields).length) throw new _ValidationError.ValidationError({
      errorType: 'WRONG_NUMBER_FIELD',
      expected: Object.keys(fields),
      received: Object.keys(val),
      path: path,
      originalValue: originalValue
    });
    for (var _i = 0, _Object$keys = Object.keys(fields); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      if (!fields[key][_indicatorSymbol["default"]]) throw new _ValidationError.ValidationError({
        errorType: 'FIELD_IS_NOT_AN_INDICATOR',
        path: [].concat(_toConsumableArray(path), [key])
      });
      fields[key](val[key], [].concat(_toConsumableArray(path), [key]), originalValue);
    }
    return val;
  };
  res[_indicatorSymbol["default"]] = true;
  return res;
};
exports.object = object;
object.type = function (val, path, originalValue) {
  if (_typeof(val) === 'object' && val !== null && !Array.isArray(val)) return val;
  throw new _ValidationError.ValidationError({
    errorType: 'WRONG_TYPE',
    type: 'non-array object',
    value: val,
    path: path,
    originalValue: originalValue
  });
};
object.type[_indicatorSymbol["default"]] = true;
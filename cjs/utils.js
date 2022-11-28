"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = exports.pathToString = void 0;
// BigInt danger
var stringify = function stringify(val) {
  if (typeof val === 'function') return "function ".concat(val.name ? "".concat(val.name) : 'anonymous');
  if (val === undefined) return 'undefined';
  return JSON.stringify(val);
};
exports.stringify = stringify;
var pathToString = function pathToString(array) {
  if (array.length === 0) return '.';
  return array.reduce(function (string, item) {
    var prefix = string === '' ? '' : '.';
    return string + (isNaN(Number(item)) ? '.' + item : '[' + item + ']');
  }, '');
};
exports.pathToString = pathToString;
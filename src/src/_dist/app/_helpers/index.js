"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepCopy = void 0;

var deepCopy = function deepCopy(objectValue) {
  // console.log('deepCopy objectValue', objectValue);
  return objectValue ? JSON.parse(JSON.stringify(objectValue)) : objectValue;
};

exports.deepCopy = deepCopy;
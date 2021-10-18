"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PropsCleaner = _interopRequireDefault(require("../_helpers/PropsCleaner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
var _default = (0, _PropsCleaner.default)(function (props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M13.65 2.35C12.2 0.9 10.21 0 8.00001 0C3.58001 0 0.0100098 3.58 0.0100098 8C0.0100098 12.42 3.58001 16 8.00001 16C11.73 16 14.84 13.45 15.73 10H13.65C12.83 12.33 10.61 14 8.00001 14C4.69001 14 2.00001 11.31 2.00001 8C2.00001 4.69 4.69001 2 8.00001 2C9.66001 2 11.14 2.69 12.22 3.78L9.00001 7H16V0L13.65 2.35Z",
    fill: "#B74343"
  }));
});

exports.default = _default;
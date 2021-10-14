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
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.071 2.92892C13.1678 -0.974312 6.83212 -0.974312 2.92889 2.92892C-0.974342 6.83215 -0.974342 13.1678 2.92889 17.0711C6.83212 20.9743 13.1678 20.9743 17.071 17.0711C20.9743 13.1678 20.9743 6.83215 17.071 2.92892ZM12.8284 14.2426L9.99995 11.4142L7.17153 14.2426L5.75731 12.8284L8.58574 9.99998L5.75731 7.17156L7.17153 5.75734L9.99995 8.58577L12.8284 5.75734L14.2426 7.17156L11.4142 9.99998L14.2426 12.8284L12.8284 14.2426Z",
    fill: "#B74343"
  }));
});

exports.default = _default;
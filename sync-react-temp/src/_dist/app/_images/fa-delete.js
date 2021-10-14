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
    d: "M13.5 1.00001H9.75L9.45625 0.41563C9.39402 0.290697 9.29817 0.185606 9.17947 0.11218C9.06078 0.0387537 8.92394 -9.46239e-05 8.78437 5.47897e-06H5.2125C5.07324 -0.00052985 4.93665 0.0381736 4.81838 0.111682C4.7001 0.18519 4.60492 0.290529 4.54375 0.41563L4.25 1.00001H0.5C0.367392 1.00001 0.240215 1.05268 0.146447 1.14645C0.0526784 1.24022 0 1.3674 0 1.5L0 2.5C0 2.63261 0.0526784 2.75979 0.146447 2.85356C0.240215 2.94733 0.367392 3 0.5 3H13.5C13.6326 3 13.7598 2.94733 13.8535 2.85356C13.9473 2.75979 14 2.63261 14 2.5V1.5C14 1.3674 13.9473 1.24022 13.8535 1.14645C13.7598 1.05268 13.6326 1.00001 13.5 1.00001ZM1.6625 14.5938C1.68635 14.9746 1.85442 15.332 2.13252 15.5932C2.41061 15.8545 2.77781 16 3.15937 16H10.8406C11.2222 16 11.5894 15.8545 11.8675 15.5932C12.1456 15.332 12.3136 14.9746 12.3375 14.5938L13 4H1L1.6625 14.5938Z",
    fill: "#7C7C7C"
  }));
});

exports.default = _default;
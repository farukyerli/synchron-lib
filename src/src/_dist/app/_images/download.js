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
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.6562 0H17.3438C18.123 0 18.75 0.626953 18.75 1.40625V11.25H23.8887C24.9316 11.25 25.4531 12.5098 24.7148 13.248L15.8027 22.166C15.3633 22.6055 14.6426 22.6055 14.2031 22.166L5.2793 13.248C4.54102 12.5098 5.0625 11.25 6.10547 11.25H11.25V1.40625C11.25 0.626953 11.877 0 12.6562 0ZM30 22.0312V28.5938C30 29.373 29.373 30 28.5938 30H1.40625C0.626953 30 0 29.373 0 28.5938V22.0312C0 21.252 0.626953 20.625 1.40625 20.625H10.002L12.873 23.4961C14.0508 24.6738 15.9492 24.6738 17.127 23.4961L19.998 20.625H28.5938C29.373 20.625 30 21.252 30 22.0312ZM22.7344 27.1875C22.7344 26.543 22.207 26.0156 21.5625 26.0156C20.918 26.0156 20.3906 26.543 20.3906 27.1875C20.3906 27.832 20.918 28.3594 21.5625 28.3594C22.207 28.3594 22.7344 27.832 22.7344 27.1875ZM26.4844 27.1875C26.4844 26.543 25.957 26.0156 25.3125 26.0156C24.668 26.0156 24.1406 26.543 24.1406 27.1875C24.1406 27.832 24.668 28.3594 25.3125 28.3594C25.957 28.3594 26.4844 27.832 26.4844 27.1875Z",
    fill: props.color || '#2BA0C4'
  }));
});

exports.default = _default;
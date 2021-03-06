"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PropsCleaner = _interopRequireDefault(require("../_helpers/PropsCleaner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _PropsCleaner.default)(function (props) {
  var _props$classes, _props$classes2, _props$classes3;

  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    width: (props === null || props === void 0 ? void 0 : (_props$classes = props.classes) === null || _props$classes === void 0 ? void 0 : _props$classes.width) || '50px',
    height: (props === null || props === void 0 ? void 0 : (_props$classes2 = props.classes) === null || _props$classes2 === void 0 ? void 0 : _props$classes2.height) || '50px',
    viewBox: "0 0 68 68",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    d: "M59.5208 56.9166C59.5208 58.3489 58.349 59.5208 56.9167 59.5208C55.4844 59.5208 54.3125 58.3489 54.3125 56.9166C54.3125 55.4843 55.4844 54.3125 56.9167 54.3125C58.349 54.3125 59.5208 55.4843 59.5208 56.9166ZM48.5833 54.3125C47.1511 54.3125 45.9792 55.4843 45.9792 56.9166C45.9792 58.3489 47.1511 59.5208 48.5833 59.5208C50.0156 59.5208 51.1875 58.3489 51.1875 56.9166C51.1875 55.4843 50.0156 54.3125 48.5833 54.3125ZM67.3333 48.0625V61.6041C67.3333 64.7682 64.7682 67.3333 61.6042 67.3333H6.39584C3.23178 67.3333 0.666672 64.7682 0.666672 61.6041V48.0625C0.666672 44.8984 3.23178 42.3333 6.39584 42.3333H22.5417V29.4036H15.6797C11.0443 29.4036 8.72657 23.7916 11.9948 20.5104L30.3151 2.19006C32.3464 0.158813 35.6406 0.158813 37.6849 2.19006L56.0052 20.5104C59.2865 23.7916 56.9557 29.4036 52.3203 29.4036H45.4583V42.3333H61.6042C64.7682 42.3333 67.3333 44.8984 67.3333 48.0625ZM26.7083 25.2369V49.625C26.7083 50.1979 27.1771 50.6666 27.75 50.6666H40.25C40.8229 50.6666 41.2917 50.1979 41.2917 49.625V25.2369H52.3203C53.2448 25.2369 53.7136 24.1171 53.0625 23.4531L34.7422 5.13277C34.3386 4.72913 33.6745 4.72913 33.2708 5.13277L14.9505 23.4531C14.2995 24.1041 14.7552 25.2369 15.6927 25.2369H26.7083ZM63.1667 48.0625C63.1667 47.2031 62.4636 46.5 61.6042 46.5H45.4583V49.625C45.4583 52.5026 43.1276 54.8333 40.25 54.8333H27.75C24.8724 54.8333 22.5417 52.5026 22.5417 49.625V46.5H6.39584C5.53646 46.5 4.83334 47.2031 4.83334 48.0625V61.6041C4.83334 62.4635 5.53646 63.1666 6.39584 63.1666H61.6042C62.4636 63.1666 63.1667 62.4635 63.1667 61.6041V48.0625Z",
    fill: (props === null || props === void 0 ? void 0 : (_props$classes3 = props.classes) === null || _props$classes3 === void 0 ? void 0 : _props$classes3.color) || props.color || '#D2D2D2'
  }));
});

exports.default = _default;
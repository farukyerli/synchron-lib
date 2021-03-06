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
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.1111 6.88889C14.6444 6.88889 13.4444 5.68889 13.4444 4.22222V2H7.22222C6 2 5 3 5 4.22222V19.7778C5 21 6 22 7.22222 22H16.1111C17.3333 22 18.3333 21 18.3333 19.7778V6.88889H16.1111ZM7.22222 3.77778H11.6667C11.9111 3.77778 12.1111 3.97778 12.1111 4.22222C12.1111 4.46667 11.9111 4.66667 11.6667 4.66667H7.22222C6.97778 4.66667 6.77778 4.46667 6.77778 4.22222C6.77778 3.97778 6.97778 3.77778 7.22222 3.77778ZM7.22222 8.22222H16.1111C16.3556 8.22222 16.5556 8.42222 16.5556 8.66666C16.5556 8.91111 16.3556 9.11111 16.1111 9.11111H7.22222C6.97778 9.11111 6.77778 8.91111 6.77778 8.66666C6.77778 8.42222 6.97778 8.22222 7.22222 8.22222ZM7.22222 10.4444H16.1111C16.3556 10.4444 16.5556 10.6444 16.5556 10.8889C16.5556 11.1333 16.3556 11.3333 16.1111 11.3333H7.22222C6.97778 11.3333 6.77778 11.1333 6.77778 10.8889C6.77778 10.6444 6.97778 10.4444 7.22222 10.4444ZM7.22222 12.6667H16.1111C16.3556 12.6667 16.5556 12.8667 16.5556 13.1111C16.5556 13.3556 16.3556 13.5556 16.1111 13.5556H7.22222C6.97778 13.5556 6.77778 13.3556 6.77778 13.1111C6.77778 12.8667 6.97778 12.6667 7.22222 12.6667ZM14.3333 2.44444V4.22222C14.3333 5.2 15.1333 6 16.1111 6H17.8889L14.3333 2.44444ZM9.89551 16.0386H8.80664V19H8.07422V16.0386H7V15.4453H9.89551V16.0386ZM11.5874 16.6709L12.2539 15.4453H13.0962L12.061 17.208L13.123 19H12.271L11.5874 17.7549L10.9038 19H10.0518L11.1138 17.208L10.0786 15.4453H10.9209L11.5874 16.6709ZM15.0811 16.0386H16.1699V15.4453H13.2744V16.0386H14.3486V19H15.0811V16.0386Z",
    fill: props.color || '#959595'
  }));
});

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../../_styles/LinearLoading.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinearLoading = function LinearLoading(props) {
  var _props$ratio = props.ratio,
      ratio = _props$ratio === void 0 ? 30 : _props$ratio,
      _props$backgroundColo = props.backgroundColor,
      backgroundColor = _props$backgroundColo === void 0 ? '#fff' : _props$backgroundColo,
      _props$foregroundColo = props.foregroundColor,
      foregroundColor = _props$foregroundColo === void 0 ? '#1a908d' : _props$foregroundColo;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "LinearLoading",
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "percent ".concat((props === null || props === void 0 ? void 0 : props.className) || '')
  }, props.uploadingText || 'Uploading'), /*#__PURE__*/_react.default.createElement("div", {
    className: "bar",
    style: {
      width: "".concat(ratio * 100, "%"),
      backgroundColor: foregroundColor
    }
  }));
};

var _default = LinearLoading;
exports.default = _default;
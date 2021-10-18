"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 1 : _props$type;

  require("../_styles/LoadingSpinners".concat(type, ".css"));

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loader"
  });
};

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconButton = function IconButton(props) {
  var action = props.action,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      content = props.content,
      component = props.component;
  return visible === true ? /*#__PURE__*/_react.default.createElement("section", {
    onClick: action,
    className: component ? className : ''
  }, component || /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(className)
  }), content && /*#__PURE__*/_react.default.createElement("span", null, content)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};

var _default = IconButton;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../../_styles/PieLoading.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PieLoading = function PieLoading(props) {
  var ratio = props.ratio,
      _props$backgroundColo = props.backgroundColor,
      backgroundColor = _props$backgroundColo === void 0 ? '#fff' : _props$backgroundColo,
      _props$foregroundColo = props.foregroundColor,
      foregroundColor = _props$foregroundColo === void 0 ? '#1a908d' : _props$foregroundColo,
      _props$width = props.width,
      width = _props$width === void 0 ? '25px' : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? '25px' : _props$height;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pie",
    style: {
      backgroundImage: "conic-gradient(".concat(foregroundColor, " ").concat(ratio * 360, "deg, ").concat(backgroundColor, " 0 )"),
      width: width,
      height: height
    }
  });
};

var _default = PieLoading;
exports.default = _default;
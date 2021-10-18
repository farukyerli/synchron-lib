"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _types = require("../types");

var _ShowImage = _interopRequireDefault(require("../Utils/ShowImage"));

require("../../_styles/FullScreen.css");

var _Button = _interopRequireDefault(require("../Utils/Button"));

var _Utils = require("../Utils");

var _images = require("../../_images");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(props) {
  var _props$text, _props$text2;

  var actions = props.actions; // console.log({ props });

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      abort = _useState4[0],
      setAbort = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      downloadImage = _useState6[0],
      setDownloadImage = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showDownloadButton = _useState8[0],
      setShowDownloadButton = _useState8[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-component-full-screen-frame-cover  ".concat(props.className || '', "-container ")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "large-cover"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "large",
    onClick: function onClick() {
      return props.onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_ShowImage.default, _extends({}, props, {
    connection: props.connection,
    file: props.file,
    onImage: function onImage(data) {
      return setImage(data);
    },
    imageStatus: function imageStatus(value) {
      return value === _types.imageState.Done && setShowDownloadButton(true);
    },
    isAborted: abort
  }))), /*#__PURE__*/_react.default.createElement(_Button.default, {
    action: function action() {
      setAbort(true);
      props.onClose();
    } // className="fas fa-times remove-icon"
    ,
    className: "remove-icon",
    component: /*#__PURE__*/_react.default.createElement(_images.CancelIcon, null) // title={props.text?.CloseButton || 'Close'} position='left' 

  }), (actions === null || actions === void 0 ? void 0 : actions.Download) && /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return setDownloadImage(image);
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    action: function action() {},
    className: "download-container download-icon",
    title: (_props$text = props.text) === null || _props$text === void 0 ? void 0 : _props$text.DownloadButton,
    position: "right",
    visible: showDownloadButton,
    content: ((_props$text2 = props.text) === null || _props$text2 === void 0 ? void 0 : _props$text2.DownloadButton) || 'DOWNLOAD',
    component: /*#__PURE__*/_react.default.createElement(_images.DownloadIcon, null)
  })))), /*#__PURE__*/_react.default.createElement(_Utils.DownloadFile, {
    file: {
      url: downloadImage,
      name: props.file.name || "zz-downloadfile"
    },
    connection: props.connection
  }));
};

exports.default = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../../_styles/DropzoneCanvas.css");

var _images = require("../../_images");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DropzoneCanvas = function DropzoneCanvas(props) {
  var text = props.text,
      classes = props.classes,
      disabled = props.disabled;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hightlight = _useState2[0],
      setHighlight = _useState2[1];

  var fileInputRef = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)((classes === null || classes === void 0 ? void 0 : classes.passiveColor) || '#D2D2D2'),
      _useState4 = _slicedToArray(_useState3, 2),
      imgColor = _useState4[0],
      setImgColor = _useState4[1];

  var openFileDialog = function openFileDialog() {
    var _fileInputRef$current;

    if (props.disabled) return;
    (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
  };

  var onFilesAdded = function onFilesAdded(evt) {
    if (disabled) return;
    var files = evt.target.files;
    var array = fileListToArray(files);
    props.onChange && props.onChange(array);
  };

  var onDragOver = function onDragOver(evt) {
    evt.preventDefault();
    if (disabled) return;
    setHighlight(true);
  };

  var onDragLeave = function onDragLeave() {
    setHighlight(false);
  };

  (0, _react.useEffect)(function () {
    hightlight && !disabled ? setImgColor((classes === null || classes === void 0 ? void 0 : classes.activeColor) || '#38b1d6') : setImgColor((classes === null || classes === void 0 ? void 0 : classes.passiveColor) || '#D2D2D2'); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hightlight]);

  var onDrop = function onDrop(evt) {
    evt.preventDefault();
    if (props.disabled) return;
    var files = evt.dataTransfer.files;
    var array = fileListToArray(files);
    props.onChange && props.onChange(array);
    setHighlight(false);
  };

  var fileListToArray = function fileListToArray(list) {
    var array = [];
    Object.keys(list).map(function (key) {
      array.push(list[key]);
      return null;
    });
    return array;
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "synchron-dropzone-upload-canvas-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-box ".concat(!disabled && hightlight && 'OnDragOver'),
    onDragOver: onDragOver,
    onDragLeave: onDragLeave,
    onDrop: onDrop,
    onClick: openFileDialog,
    onMouseOver: function onMouseOver() {
      return setHighlight(true);
    },
    onMouseOut: function onMouseOut() {
      return setHighlight(false);
    },
    style: {
      opacity: disabled ? 0.3 : 1
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-icon"
  }, /*#__PURE__*/_react.default.createElement(_images.UploadIcon, _extends({}, props, {
    color: imgColor,
    className: "upload-icon"
  })), " "), /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-text ".concat(!disabled && hightlight && 'active')
  }, (text === null || text === void 0 ? void 0 : text.DragboxText) || 'Drag here to upload'))), /*#__PURE__*/_react.default.createElement("input", {
    ref: fileInputRef,
    style: {
      display: "none"
    },
    className: "FileInput",
    type: "file",
    multiple: true,
    onChange: onFilesAdded
  }));
};

var _default = DropzoneCanvas;
exports.default = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../../_styles/DropzoneCanvas.css");

var _Previews = require("../Previews");

var _types = require("../types");

var _ShowImage = _interopRequireDefault(require("./ShowImage"));

var _UploadItem = _interopRequireDefault(require("./UploadItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DropzoneItemForm = function DropzoneItemForm(props) {
  var _classes$preview;

  var showDetails = props.showDetails,
      connection = props.connection,
      text = props.text,
      actions = props.actions,
      classes = props.classes,
      _props$uploadMethod = props.uploadMethod,
      uploadMethod = _props$uploadMethod === void 0 ? 'POST' : _props$uploadMethod,
      _props$readOnly = props.readOnly,
      readOnly = _props$readOnly === void 0 ? false : _props$readOnly;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      abort = _useState4[0],
      setAbort = _useState4[1];

  var _useState5 = (0, _react.useState)(_types.imageState.None),
      _useState6 = _slicedToArray(_useState5, 2),
      status = _useState6[0],
      setStatus = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      showPreview = _useState8[0],
      setShowPreview = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      uploading = _useState10[0],
      setUploading = _useState10[1]; // const [uploadedRatio, setUploadedRatio] = useState<number>(0);


  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      uploadFile = _useState12[0],
      setUploadFile = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isProblemExists = _useState14[0],
      setIsProblemExists = _useState14[1];

  (0, _react.useEffect)(function () {
    props.uploadFile && setUploadFile({
      name: props.uploadFile.name,
      rawFileData: props.uploadFile
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.uploadFile]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "synchron-dropzone-upload-item-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/_react.default.createElement(_ShowImage.default, {
    thumbnailSize: props.thumbnailSize,
    connection: props.connection,
    file: props.file,
    onImage: function onImage(data) {
      return setImage(data);
    },
    imageStatus: function imageStatus(value) {
      value === _types.imageState.Problem && setIsProblemExists(true);
      setStatus(value);
    },
    isAborted: abort,
    size: "small",
    onClick: function onClick() {
      return setShowPreview(image);
    },
    isProblemExists: isProblemExists,
    isUploading: uploading,
    classes: classes,
    readOnly: readOnly
  })), (status === _types.imageState.Done || isProblemExists) && !readOnly && !uploading && /*#__PURE__*/_react.default.createElement("div", {
    className: "delete-button-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "delete-button",
    onClick: function onClick(e) {
      return (actions === null || actions === void 0 ? void 0 : actions.onDelete) && actions.onDelete(props.file.name);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-times"
  }))), showDetails && /*#__PURE__*/_react.default.createElement("div", {
    className: "bottom-bar"
  })), showPreview && /*#__PURE__*/_react.default.createElement(_Previews.FullScreen, {
    onClose: function onClose() {
      return setShowPreview(null);
    },
    image: showPreview,
    connection: connection,
    file: props.file,
    text: text,
    actions: actions,
    className: classes === null || classes === void 0 ? void 0 : (_classes$preview = classes.preview) === null || _classes$preview === void 0 ? void 0 : _classes$preview.fullscreen
  }), /*#__PURE__*/_react.default.createElement(_UploadItem.default, {
    connection: connection,
    file: uploadFile,
    abort: abort,
    onEndTask: function onEndTask() {
      setUploadFile(null);
      setAbort(false);
    } // onRatio={(value: number) => setUploadedRatio(value)}
    ,
    onUploading: function onUploading(value) {
      return setUploading(value);
    },
    onAbort: function onAbort() {
      return (actions === null || actions === void 0 ? void 0 : actions.onAbort) && actions.onAbort(props.file.name);
    },
    onError: function onError(state, data) {
      (actions === null || actions === void 0 ? void 0 : actions.onError) && actions.onError(state, data);
      setIsProblemExists(true);
    },
    onSuccess: actions === null || actions === void 0 ? void 0 : actions.onSuccess,
    uploadParameters: props.uploadParameters,
    uploadMethod: uploadMethod
  }));
};

var _default = DropzoneItemForm;
exports.default = _default;
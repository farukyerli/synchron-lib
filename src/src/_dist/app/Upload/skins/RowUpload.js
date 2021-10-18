"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../../_styles/RowUpload.css");

var _Utils = require("../Utils");

var _Previews = require("../Previews");

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

var RowUploadForm = function RowUploadForm(props) {
  var _classes$preview;

  var classes = props.classes,
      rowItems = props.rowItems,
      actions = props.actions,
      text = props.text,
      connection = props.connection,
      files = props.files,
      _props$uploadMethod = props.uploadMethod,
      uploadMethod = _props$uploadMethod === void 0 ? 'POST' : _props$uploadMethod,
      _props$uploadPreview = props.uploadPreview,
      uploadPreview = _props$uploadPreview === void 0 ? 'Pie' : _props$uploadPreview;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      showPreview = _useState2[0],
      setShowPreview = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      fileUrl = _useState4[0],
      setFileUrl = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      fileName = _useState6[0],
      setFileName = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      downloadImage = _useState8[0],
      setDownloadImage = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showUpload = _useState10[0],
      setShowUpload = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      downloading = _useState12[0],
      setDownloading = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      uploading = _useState14[0],
      setUploading = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      abort = _useState16[0],
      setAbort = _useState16[1];

  var _useState17 = (0, _react.useState)(0),
      _useState18 = _slicedToArray(_useState17, 2),
      uploadedRatio = _useState18[0],
      setUploadedRatio = _useState18[1];

  var _useState19 = (0, _react.useState)(null),
      _useState20 = _slicedToArray(_useState19, 2),
      file = _useState20[0],
      setFile = _useState20[1];

  (0, _react.useEffect)(function () {
    if (files && files.length) {
      setFileUrl(props.files[0]);
      setFileName(props.files[0]);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [files]);
  (0, _react.useEffect)(function () {
    (actions === null || actions === void 0 ? void 0 : actions.onUploading) && actions.onUploading(uploading); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploading]);

  var column1DownloadSection = function column1DownloadSection() {
    if (downloading) return /*#__PURE__*/_react.default.createElement(_images.LoadingIcon, null);
    return (rowItems === null || rowItems === void 0 ? void 0 : rowItems.Column1) || /*#__PURE__*/_react.default.createElement(_Utils.IconButton, {
      action: function action() {
        (actions === null || actions === void 0 ? void 0 : actions.Download) && actions.Download(fileUrl);
        setDownloadImage(fileUrl);
      },
      className: "column1 ".concat(classes === null || classes === void 0 ? void 0 : classes.Column1),
      title: text === null || text === void 0 ? void 0 : text.DownloadButton,
      component: /*#__PURE__*/_react.default.createElement(_images.DownloadIcon, null)
    });
  };

  var column1UploadSection = function column1UploadSection() {
    if (uploading && uploadPreview === 'Linear') return /*#__PURE__*/_react.default.createElement(_images.LoadingSpinners, null);
    if (uploading && uploadPreview === 'Pie') return /*#__PURE__*/_react.default.createElement(_Utils.PieLoading, {
      ratio: uploadedRatio
    });
    return (rowItems === null || rowItems === void 0 ? void 0 : rowItems.Column1) || /*#__PURE__*/_react.default.createElement(_Utils.IconButton, {
      action: function action() {
        (actions === null || actions === void 0 ? void 0 : actions.Upload) && actions.Upload(fileUrl);
        setShowUpload(!showUpload);
      } // className={`column1 ${classes?.Column1}`}
      ,
      title: text === null || text === void 0 ? void 0 : text.UploadButton,
      component: /*#__PURE__*/_react.default.createElement(_images.UploadIcon, null)
    });
  };

  var column2UploadSection = function column2UploadSection() {
    var _props$tools;

    if (uploading && uploadPreview === 'Linear') return /*#__PURE__*/_react.default.createElement(_Utils.LinearLoading, _extends({
      ratio: uploadedRatio
    }, (_props$tools = props.tools) === null || _props$tools === void 0 ? void 0 : _props$tools.LinearLoading));
    return (rowItems === null || rowItems === void 0 ? void 0 : rowItems.Column2) || 'Please define description of task ';
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "row-upload-component-container  ".concat(classes === null || classes === void 0 ? void 0 : classes.componentContainer)
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "".concat(classes === null || classes === void 0 ? void 0 : classes.section)
  }, ((actions === null || actions === void 0 ? void 0 : actions.Download) || (actions === null || actions === void 0 ? void 0 : actions.Upload)) && /*#__PURE__*/_react.default.createElement("div", {
    className: "columns column1 ".concat((classes === null || classes === void 0 ? void 0 : classes.Column1) || '')
  }, fileName ? column1DownloadSection() : column1UploadSection()), /*#__PURE__*/_react.default.createElement("div", {
    className: "columns column2  ".concat((classes === null || classes === void 0 ? void 0 : classes.Column2) || '')
  }, " ", column2UploadSection()), (rowItems === null || rowItems === void 0 ? void 0 : rowItems.Column3) && /*#__PURE__*/_react.default.createElement("div", {
    className: "columns column3  ".concat((classes === null || classes === void 0 ? void 0 : classes.Column3) || '')
  }, rowItems === null || rowItems === void 0 ? void 0 : rowItems.Column3), (rowItems === null || rowItems === void 0 ? void 0 : rowItems.Column4) && /*#__PURE__*/_react.default.createElement("div", {
    className: "columns column4  ".concat((classes === null || classes === void 0 ? void 0 : classes.Column4) || '')
  }, rowItems === null || rowItems === void 0 ? void 0 : rowItems.Column4), /*#__PURE__*/_react.default.createElement("div", {
    className: "columns column5  ".concat((classes === null || classes === void 0 ? void 0 : classes.Column5) || '')
  }, (rowItems === null || rowItems === void 0 ? void 0 : rowItems.Column5) || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Utils.IconButton, {
    action: function action() {
      return (actions === null || actions === void 0 ? void 0 : actions.Edit) && actions.Edit('');
    },
    title: text === null || text === void 0 ? void 0 : text.EditButton,
    visible: actions !== null && actions !== void 0 && actions.Edit ? fileName !== '' : false,
    component: /*#__PURE__*/_react.default.createElement(_images.EditIcon, null)
  }), /*#__PURE__*/_react.default.createElement(_Utils.IconButton, {
    action: function action() {
      (actions === null || actions === void 0 ? void 0 : actions.Delete) && actions.Delete(fileName);
      (actions === null || actions === void 0 ? void 0 : actions.onDelete) && actions.onDelete(fileName);
    },
    title: text === null || text === void 0 ? void 0 : text.DeleteButton,
    visible: actions !== null && actions !== void 0 && actions.Delete ? fileName !== '' : false,
    component: /*#__PURE__*/_react.default.createElement(_images.DeleteIcon, null)
  }), /*#__PURE__*/_react.default.createElement(_Utils.IconButton, {
    action: function action() {
      (actions === null || actions === void 0 ? void 0 : actions.View) && actions.View('');
      setShowPreview('1');
    },
    visible: actions !== null && actions !== void 0 && actions.View ? fileName !== '' : false,
    component: /*#__PURE__*/_react.default.createElement(_images.ViewIcon, null)
  })), uploading && /*#__PURE__*/_react.default.createElement(_Utils.IconButton, {
    action: function action() {
      return setAbort(true);
    },
    className: " abort",
    title: text === null || text === void 0 ? void 0 : text.AbortButton,
    component: /*#__PURE__*/_react.default.createElement(_images.CancelIcon, null)
  })), (rowItems === null || rowItems === void 0 ? void 0 : rowItems.Column6) && /*#__PURE__*/_react.default.createElement("div", {
    className: "columns column6  ".concat((classes === null || classes === void 0 ? void 0 : classes.Column6) || '')
  }, rowItems === null || rowItems === void 0 ? void 0 : rowItems.Column6))), showPreview && /*#__PURE__*/_react.default.createElement(_Previews.FullScreen, _extends({}, props, {
    onClose: function onClose() {
      return setShowPreview(null);
    },
    image: showPreview,
    connection: connection,
    className: classes === null || classes === void 0 ? void 0 : (_classes$preview = classes.preview) === null || _classes$preview === void 0 ? void 0 : _classes$preview.fullscreen,
    file: {
      name: fileName,
      url: fileUrl
    },
    text: text,
    actions: actions
  })), /*#__PURE__*/_react.default.createElement(_Utils.DownloadFile, {
    file: {
      url: downloadImage,
      name: fileName || "zz-downloadfile"
    },
    connection: props.connection,
    onLoading: setDownloading
  }), /*#__PURE__*/_react.default.createElement(_Utils.SelectUploadFiles, {
    onChange: function onChange(data) {
      return setFile({
        name: data[0].name,
        rawFileData: data[0]
      });
    },
    open: showUpload
  }), /*#__PURE__*/_react.default.createElement(_Utils.UploadItem, {
    connection: connection,
    file: file,
    abort: abort,
    onEndTask: function onEndTask() {
      setFile(null);
      setAbort(false);
      setUploading(false);
    },
    onRatio: function onRatio(value) {
      setUploadedRatio(value);
      (actions === null || actions === void 0 ? void 0 : actions.onRatio) && actions.onRatio(value);
    },
    onUploading: function onUploading(value) {
      return file && setUploading(value);
    },
    onAbort: function onAbort() {
      return (actions === null || actions === void 0 ? void 0 : actions.onAbort) && actions.onAbort(fileName);
    },
    onError: actions === null || actions === void 0 ? void 0 : actions.onError,
    onSuccess: actions === null || actions === void 0 ? void 0 : actions.onSuccess,
    uploadMethod: uploadMethod
  }));
};

var _default = RowUploadForm;
exports.default = _default;
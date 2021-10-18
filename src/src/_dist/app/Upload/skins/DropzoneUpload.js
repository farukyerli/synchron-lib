"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../../_styles/DropzoneCanvas.css");

var _DropzoneCanvas2 = _interopRequireDefault(require("../Utils/DropzoneCanvas"));

var _Utils = require("../Utils");

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, action) {
  switch (action.type) {
    case _types.stateAction.onDelete:
      return _objectSpread({}, action.payload);

    case _types.stateAction.onUpload:
      return _objectSpread(_objectSpread({}, state), {}, {
        fileURLList: [].concat(_toConsumableArray(state.fileURLList), _toConsumableArray(action.payload.fileURLList)),
        uploadList: [].concat(_toConsumableArray(state.uploadList), _toConsumableArray(action.payload.uploadList))
      });

    case _types.stateAction.onReset:
      return {
        fileURLList: _toConsumableArray(action.payload.fileURLList),
        uploadList: _toConsumableArray(action.payload.uploadList)
      };

    default:
      break;
  }

  return state;
}

var DropZoneForm = function DropZoneForm(props) {
  var connection = props.connection,
      classes = props.classes,
      actions = props.actions,
      _props$refreshOnFiles = props.refreshOnFilesChange,
      refreshOnFilesChange = _props$refreshOnFiles === void 0 ? false : _props$refreshOnFiles,
      _props$readOnly = props.readOnly,
      readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
      _props$maxFiles = props.maxFiles,
      maxFiles = _props$maxFiles === void 0 ? 5 : _props$maxFiles;

  var initState = function initState() {
    return {
      fileURLList: props.files.map(function (filename, index) {
        return {
          index: index,
          filename: filename
        };
      }),
      uploadList: props.files.map(function () {
        return null;
      })
    };
  };

  var _useReducer = (0, _react.useReducer)(reducer, initState()),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMounted = _useState2[0],
      setIsMounted = _useState2[1];

  var _onDelete = function onDelete(index, data) {
    var myArray = state.fileURLList.filter(function (item, ndx) {
      return ndx !== index;
    });
    (actions === null || actions === void 0 ? void 0 : actions.onDelete) && (actions === null || actions === void 0 ? void 0 : actions.onDelete(data));
    dispatch({
      type: _types.stateAction.onDelete,
      payload: {
        fileURLList: myArray.map(function (n, i) {
          return {
            index: i,
            filename: n.filename
          };
        }),
        uploadList: myArray.map(function () {
          return null;
        })
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (refreshOnFilesChange || state.fileURLList.length === 0) {
      dispatch({
        type: _types.stateAction.onReset,
        payload: {
          fileURLList: props.files.map(function (filename, index) {
            return {
              index: index,
              filename: filename
            };
          }),
          uploadList: props.files.map(function () {
            return null;
          })
        }
      }); // console.log('props changed', props.files);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [props.files]);
  (0, _react.useEffect)(function () {
    var isDirty = props.inititalFiles ? compare(props === null || props === void 0 ? void 0 : props.inititalFiles, state.fileURLList) : true;
    (actions === null || actions === void 0 ? void 0 : actions.onDirty) && (actions === null || actions === void 0 ? void 0 : actions.onDirty(isDirty));
    isMounted && (actions === null || actions === void 0 ? void 0 : actions.onChange) && (actions === null || actions === void 0 ? void 0 : actions.onChange(state.fileURLList)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.fileURLList]);
  (0, _react.useEffect)(function () {
    setIsMounted(true);
  }, []);

  var compare = function compare(a, b) {
    if (a.length !== b.length) return true;
    var _returnValue = false;
    a.forEach(function (item) {
      if (b.findIndex(function (x) {
        return x.filename === item;
      }) === -1) _returnValue = true;
    });
    return _returnValue;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "synchron-dropzone-upload-container",
    style: _objectSpread({}, classes)
  }, state.fileURLList.map(function (item, ndx) {
    return /*#__PURE__*/_react.default.createElement(_Utils.DropzoneItemForm, _extends({}, props, {
      key: "DropzoneItem".concat(ndx),
      file: {
        name: item.filename,
        url: item.filename
      },
      connection: connection,
      uploadFile: state.uploadList[ndx],
      actions: _objectSpread(_objectSpread({}, props.actions), {}, {
        onSuccess: function onSuccess(data) {
          (actions === null || actions === void 0 ? void 0 : actions.onDirty) && (actions === null || actions === void 0 ? void 0 : actions.onDirty(true));
          (actions === null || actions === void 0 ? void 0 : actions.onSuccess) && actions.onSuccess({
            ndx: ndx,
            data: data
          });
        },
        onDelete: function onDelete() {
          return _onDelete(ndx, item);
        }
      })
    }));
  }), state.fileURLList.length < maxFiles && !readOnly && /*#__PURE__*/_react.default.createElement(_DropzoneCanvas2.default, _extends({}, props, {
    onChange: function onChange(data) {
      dispatch({
        type: _types.stateAction.onUpload,
        payload: {
          fileURLList: _toConsumableArray(data.map(function (item, index) {
            return {
              index: index + state.fileURLList.length,
              filename: URL.createObjectURL(item)
            };
          })),
          uploadList: _toConsumableArray(data)
        }
      });
    }
  })));
};

var _default = DropZoneForm;
exports.default = _default;
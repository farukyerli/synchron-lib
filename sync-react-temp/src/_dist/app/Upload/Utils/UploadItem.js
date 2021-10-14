"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UploadFile = /*#__PURE__*/function (_Component) {
  _inherits(UploadFile, _Component);

  var _super = _createSuper(UploadFile);

  function UploadFile(props) {
    var _this;

    _classCallCheck(this, UploadFile);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "request", new XMLHttpRequest());

    _defineProperty(_assertThisInitialized(_this), "uploadFileWithFetch", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$props$file, _this$props$file2;

      var formData, params;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                isUploading: true
              });

              formData = new FormData();
              formData.append((_this$props$file = _this.props.file) === null || _this$props$file === void 0 ? void 0 : _this$props$file.rawFileData.name, (_this$props$file2 = _this.props.file) === null || _this$props$file2 === void 0 ? void 0 : _this$props$file2.rawFileData);
              params = _this.props.uploadParameters && "?".concat(_this.props.uploadParameters.join('&')) || '';

              _this.request.open(_this.props.uploadMethod, "".concat(_this.props.connection.url).concat(params), true);

              Object.keys(_this.props.connection.headers).forEach(function (key) {
                return _this.request.setRequestHeader(key, _this.props.connection.headers[key]);
              });

              _this.request.upload.addEventListener('progress', _this.onUploadProgress);

              _this.request.onerror = function (e) {
                _this.onError(500, e);
              };

              _this.request.onabort = function () {
                _this.props.onAbort && _this.props.onAbort();

                _this.onError(_this.request.status, 'Process Aborted');
              };

              _this.request.onload = function () {
                var response;

                try {
                  var _this$props$file3;

                  response = _objectSpread(_objectSpread({}, JSON.parse(_this.request.response)), {}, {
                    filename: (_this$props$file3 = _this.props.file) === null || _this$props$file3 === void 0 ? void 0 : _this$props$file3.rawFileData.name
                  });

                  if (_this.request.status < 300) {
                    _this.props.onSuccess && _this.props.onSuccess(response);
                  } else {
                    _this.onError(_this.request.status, response);
                  }
                } catch (_unused) {
                  _this.onError(_this.request.status, 'An error occurred while uploading. Please upload another file.');
                } finally {
                  _this.props.onEndTask();
                }

                _this.setState({
                  isUploading: false
                });
              };

              _this.request.send(formData);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "onError", function (status, data) {
      _this.props.onEndTask();

      _this.setState({
        ratio: 0
      });

      _this.setState({
        isUploading: false
      });

      _this.request.abort();

      _this.props.onError && _this.props.onError(status, data);
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
      _this.props.onRatio && _this.props.onRatio(_this.state.ratio);
      _this.props.onUploading && _this.props.onUploading(_this.state.isUploading);
      _this.props.abort === true && _this.onAbort();

      if (_this.props.file !== null && _this.props.file !== _this.state.file) {
        _this.uploadFileWithFetch();

        _this.setState({
          file: _this.props.file
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onUploadProgress", function (e) {
      return _this.setState({
        ratio: e.loaded / e.total
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAbort", function () {
      return _this.request.abort();
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      return _this.onAbort();
    });

    _this.state = {
      file: null,
      ratio: 0,
      isUploading: false
    };
    return _this;
  }

  _createClass(UploadFile, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ");
    }
  }]);

  return UploadFile;
}(_react.Component);

var _default = UploadFile;
exports.default = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _types = require("../types");

var _images = require("../../_images");

require("../../_styles/ShowImage.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var DownloadImage = /*#__PURE__*/function (_Component) {
  _inherits(DownloadImage, _Component);

  var _super = _createSuper(DownloadImage);

  function DownloadImage(_props) {
    var _this$props;

    var _this;

    _classCallCheck(this, DownloadImage);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "request", new XMLHttpRequest());

    _defineProperty(_assertThisInitialized(_this), "onError", function (status, data) {
      _this.setState({
        file: null
      });

      _this.setState({
        status: _types.imageState.Problem
      });

      _this.props.onLoading && _this.props.onLoading(false);
      _this.props.onError && _this.props.onError(status, data);
    });

    _defineProperty(_assertThisInitialized(_this), "downloadFileWithFetch", function () {
      _this.request.open('GET', "".concat(_this.props.file.url), true);

      _this.props.onLoading && _this.props.onLoading(true);
      Object.keys(_this.props.connection.headers).map(function (key) {
        _this.request.setRequestHeader(key, _this.props.connection.headers[key]);

        return null;
      });
      _this.request.responseType = 'blob';

      _this.setState({
        status: _types.imageState.Loading
      });

      _this.request.onerror = function (e) {
        // console.log('ERROR RESPONSE : ', e);
        _this.setState({
          file: null
        });

        _this.setState({
          status: _types.imageState.Problem
        });

        _this.onError(500, e);
      };

      _this.request.onload = function (e) {
        switch (_this.request.status) {
          case 200:
            {
              // const newBlob = new Blob([this.request.response]);
              var url = URL.createObjectURL(_this.request.response); // console.log('Downloaded url..', url);

              var type = _this.request.response.type.split('/')[1]; // console.log('Downloaded ..', type, type.indexOf('word'));


              type === 'msword' && (type = 'doc');
              type === 'vnd.openxmlformats-officedocument.wordprocessingml.document' && (type = 'docx'); // type.indexOf('word') !== -1 && (type = 'docx');

              _this.setState({
                fileType: type
              });

              _this.setState({
                file: url
              });

              _this.props.onImage && _this.props.onImage(url);

              _this.setState({
                status: _types.imageState.Done
              });

              _this.props.onLoading && _this.props.onLoading(false);
              break;
            }

          default:
            {
              _this.onError(_this.request.status, e);
            }
        }
      }; // this.state.status !== imageState.Done && this.setState({ status: imageState.Problem });


      _this.request.send(null);
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      _this.request.abort();
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.state.existingFileURL === null && _this.downloadFileWithFetch();

      _this.setState({
        existingFileURL: _this.props.file.url
      });
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
      // console.log('this.state.status :', this.state.status)
      _this.props.isAborted && _this.request.abort();
      if (_this.state.status === _types.imageState.Done || _this.state.status === _types.imageState.Problem) _this.props.imageStatus && _this.props.imageStatus(_this.state.status);

      if (_this.props.file.url !== _this.state.existingFileURL) {
        _this.downloadFileWithFetch();

        _this.setState({
          existingFileURL: _this.props.file.url
        });
      }

      _this.props.isProblemExists && _this.state.status !== _types.imageState.Problem && _this.setState({
        status: _types.imageState.Problem
      });
    });

    _defineProperty(_assertThisInitialized(_this), "customProps", _this.props.size === 'small' ? {
      maxWidth: "".concat((_this$props = _this.props) === null || _this$props === void 0 ? void 0 : _this$props.thumbnailSize, "px") || '170px'
    } : {});

    _defineProperty(_assertThisInitialized(_this), "renderIcon", function (props) {
      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_this.props.size === 'small' ? ' small' : '', " ").concat(className)
      }, props);
    });

    _defineProperty(_assertThisInitialized(_this), "renderThumbnail", function (type, file) {
      switch (type) {
        case 'pdf':
          return _this.renderIcon( /*#__PURE__*/_react.default.createElement(_images.PdfIcon, null));

        case 'doc':
          return _this.renderIcon( /*#__PURE__*/_react.default.createElement(_images.DocIcon, null));

        case 'docx':
          return _this.renderIcon( /*#__PURE__*/_react.default.createElement(_images.DocIcon, null));

        case 'xls':
          return _this.renderIcon( /*#__PURE__*/_react.default.createElement(_images.XlsIcon, null));

        case 'xlsx':
          return _this.renderIcon( /*#__PURE__*/_react.default.createElement(_images.XlsIcon, null));

        case 'txt':
          return _this.renderIcon( /*#__PURE__*/_react.default.createElement(_images.TxtIcon, null));

        case 'ppt':
          return _this.renderIcon( /*#__PURE__*/_react.default.createElement(_images.PptIcon, null));

        case 'error':
          return _this.renderIcon( /*#__PURE__*/_react.default.createElement(_images.ErrorIcon, null), 'error-icon');

        default:
          return /*#__PURE__*/_react.default.createElement("img", {
            src: _this.state.file,
            style: _objectSpread({}, _this.customProps),
            className: "".concat(_this.props.size === 'small' ? ' small' : '', " "),
            alt: ""
          });
      }
    });

    _this.state = {
      file: null,
      existingFileURL: null,
      fileType: '',
      status: _types.imageState.None
    };
    return _this;
  }

  _createClass(DownloadImage, [{
    key: "render",
    value: function render() {
      var _this$props$text, _this$props$text2;

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !this.props.isAborted && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.status === _types.imageState.Problem ? /*#__PURE__*/_react.default.createElement("div", {
        className: "show-image-loaded-image fail ".concat(this.props.className || ''),
        onClick: this.props.onClick
      }, this.renderThumbnail('error', this.state.file), this.props.size === 'small' ? /*#__PURE__*/_react.default.createElement("span", null, ((_this$props$text = this.props.text) === null || _this$props$text === void 0 ? void 0 : _this$props$text.ErrorDownload) || "Picture couldn't uploaded ") : /*#__PURE__*/_react.default.createElement("span", null, ((_this$props$text2 = this.props.text) === null || _this$props$text2 === void 0 ? void 0 : _this$props$text2.ErrorUpload) || "Picture couldn't loaded")) : this.state.status === _types.imageState.None || this.state.status === _types.imageState.Loading || this.props.isUploading ? /*#__PURE__*/_react.default.createElement(_images.LoadingIcon, {
        style: _objectSpread({}, this.customProps)
      }) : /*#__PURE__*/_react.default.createElement("div", {
        className: "show-image-loaded-image".concat(this.props.isAborted ? ' fail' : '', " ").concat(this.props.className || ''),
        onClick: this.props.onClick
      }, this.renderThumbnail(this.state.fileType, this.state.file))));
    }
  }]);

  return DownloadImage;
}(_react.Component);

var _default = DownloadImage;
exports.default = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _types = require("../types");

require("../../_styles/ShowImage.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var initialFileName = 'SynchronFile';

var DownloadImage = /*#__PURE__*/function (_Component) {
  _inherits(DownloadImage, _Component);

  var _super = _createSuper(DownloadImage);

  function DownloadImage(props) {
    var _this;

    _classCallCheck(this, DownloadImage);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "request", new XMLHttpRequest());

    _defineProperty(_assertThisInitialized(_this), "onError", function (status, data) {
      _this.setState({
        fileURL: null,
        fileName: initialFileName
      });

      _this.setState({
        status: _types.imageState.Problem
      });

      _this.props.onLoading && _this.props.onLoading(false);
      _this.props.onError && _this.props.onError(status, data);
    });

    _defineProperty(_assertThisInitialized(_this), "downloadFileWithFetch", function (fileURL) {
      _this.request.open('GET', "".concat(fileURL), true);

      Object.keys(_this.props.connection.headers).map(function (key) {
        _this.request.setRequestHeader(key, _this.props.connection.headers[key]);

        return null;
      });
      _this.request.responseType = 'blob';

      _this.setState({
        status: _types.imageState.Loading
      });

      _this.props.onLoading && _this.props.onLoading(true);

      _this.request.onerror = function (e) {
        _this.onError(500, e);
      };

      _this.request.onload = function (e) {
        switch (_this.request.status) {
          case 200:
            {
              var docURL = URL.createObjectURL(_this.request.response);

              var ext = _this.request.response.type.split('/')[1]; // console.log('Downloaded ..', type, type.indexOf('word'));


              var tempLink = document.createElement('a');
              tempLink.href = docURL;
              tempLink.target = '_blank';
              tempLink.rel = 'noopener noreferrer';
              tempLink.setAttribute('download', "".concat(_this.state.fileName, ".").concat(ext));
              tempLink.click(); // this.setState({ file });

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

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {// this.downloadFileWithFetch();
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
      _this.props.isAborted && _this.request.abort();
      if (_this.state.status === _types.imageState.Done || _this.state.status === _types.imageState.Problem) _this.props.imageStatus && _this.props.imageStatus(_this.state.status);
      !_this.props.file && _this.setState({
        fileURL: null
      });

      if (_this.props.file && _this.props.file.url !== _this.state.fileURL && _this.state.status === _types.imageState.None) {
        _this.setState({
          fileURL: _this.props.file.url,
          fileName: _this.props.file.name || initialFileName
        });

        _this.props.file.url && _this.downloadFileWithFetch(_this.props.file.url);
      } else {// this.setState({ fileURL: null })
      }
    });

    _this.state = {
      fileName: initialFileName,
      fileURL: null,
      status: _types.imageState.None
    };
    return _this;
  }

  _createClass(DownloadImage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    }
  }]);

  return DownloadImage;
}(_react.Component);

var _default = DownloadImage;
exports.default = _default;
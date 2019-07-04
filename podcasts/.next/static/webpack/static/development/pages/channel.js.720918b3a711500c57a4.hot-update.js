webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/home/rafael/Documents/platzi/nextjs/podcasts/pages/channel.js";



var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          channel = _this$props.channel,
          audioClips = _this$props.audioClips,
          audioChilds = _this$props.audioChilds; //console.log(audioChilds)

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-729017990",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-729017990",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, " PodCast"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-729017990",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, channel.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-729017990",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Series "), audioChilds.map(function (series, idx) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: idx,
          className: "jsx-729017990",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, " ", series.title);
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-729017990",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Last PodCasts "), audioClips.map(function (clip, idx) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: idx,
          className: "jsx-729017990",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, " ", clip.title);
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3797624837",
        __self: this
      }, "header.jsx-729017990{color:#fff;background:#8756ca;padding:15px;text-align:center;}.channels.jsx-729017990{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill ,minmax(160px,1fr));}.channel.jsx-729017990{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:5em;}.channel.jsx-729017990 img.jsx-729017990{width:100%;}h2.jsx-729017990{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}h1.jsx-729017990{font-weight:600;padding:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9jaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDb0IsQUFHZ0IsQUFPRSxBQU1DLEFBTUgsQUFHQyxBQU9TLFdBNUJGLEFBbUJuQixDQUdnQixDQWZGLENBTUksRUFnQkEsV0FyQkwsQ0FlRyxDQU9aLENBN0JTLEVBYTJCLFFBTHFCLEdBUDNDLENBc0JULFNBQ1MsUUF0QmxCLFVBdUJJLENBWGMsa0JBQ2xCLFNBTkEiLCJmaWxlIjoiL2hvbWUvcmFmYWVsL0RvY3VtZW50cy9wbGF0emkvbmV4dGpzL3BvZGNhc3RzL3BhZ2VzL2NoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICBsZXQgaWRDaGFubmVsID0gcXVlcnkuaWRcblxuICAgIGxldCByZXFDaGFubmVsID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9YCk7IC8vIGlzb21vcnBoaWMtZmV0Y2hcbiAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKVxuICAgIGxldCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsXG5cbiAgICBsZXQgcmVxQXVkaW9zID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYCk7IC8vIGlzb21vcnBoaWMtZmV0Y2hcbiAgICBsZXQgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKClcbiAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwc1xuXG4gICAgbGV0IHJlcUNoaWxkcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApXG4gICAgbGV0IGRhdGFDaGlsZHMgPSBhd2FpdCByZXFDaGlsZHMuanNvbigpO1xuICAgIGxldCBhdWRpb0NoaWxkcyA9IGRhdGFDaGlsZHMuYm9keS5jaGFubmVsc1xuXG4gICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgZGF0YUNoaWxkcyB9O1xuICB9XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIGF1ZGlvQ2hpbGRzIH0gPSB0aGlzLnByb3BzXG4gICAgLy9jb25zb2xlLmxvZyhhdWRpb0NoaWxkcylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcj4gUG9kQ2FzdDwvaGVhZGVyPlxuICAgICAgICA8aDE+e2NoYW5uZWwudGl0bGV9PC9oMT5cblxuICAgICAgICA8aDI+U2VyaWVzIDwvaDI+XG4gICAgICAgIHthdWRpb0NoaWxkcy5tYXAoKHNlcmllcywgaWR4KSA9PiA8ZGl2IGtleT17aWR4fT4ge3Nlcmllcy50aXRsZX08L2Rpdj4pfVxuXG5cbiAgICAgICAgPGgyPkxhc3QgUG9kQ2FzdHMgPC9oMj5cbiAgICAgICAge2F1ZGlvQ2xpcHMubWFwKChjbGlwLGlkeCkgPT4gPGRpdiBrZXk9e2lkeH0+IHtjbGlwLnRpdGxlfTwvZGl2Pil9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXHRcdFx0XHRoZWFkZXJ7XG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiM4NzU2Y2E7XG5cdFx0XHRcdFx0cGFkZGluZzoxNXB4O1xuXHRcdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNoYW5uZWxzIHtcblx0XHRcdFx0XHRkaXNwbGF5OmdyaWQ7XG5cdFx0XHRcdFx0Z3JpZC1nYXA6MTVweDtcblx0XHRcdFx0XHRwYWRkaW5nOjE1cHg7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpbGwgLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jaGFubmVse1xuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czozcHg7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzowcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206NWVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jaGFubmVsIGltZ3tcblx0XHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGgye1xuXHRcdFx0XHRcdHBhZGRpbmc6NXB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTowLjllbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDo2MDA7XG5cdFx0XHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDF7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICAgIHBhZGRpbmc6MTVweDtcbiAgICAgICAgfVxuXG5cdFx0XHRcdGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6d2hpdGU7XG5cdFx0XHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnN5c3RlbS11aTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuXG5cbiAgfVxufSJdfQ== */\n/*@ sourceURL=/home/rafael/Documents/platzi/nextjs/podcasts/pages/channel.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1155926762",
        __self: this
      }, "body{background:white;margin:0;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9jaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFMkIsQUFHdUIsaUJBQ1IsU0FDYSxzQkFDdEIiLCJmaWxlIjoiL2hvbWUvcmFmYWVsL0RvY3VtZW50cy9wbGF0emkvbmV4dGpzL3BvZGNhc3RzL3BhZ2VzL2NoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICBsZXQgaWRDaGFubmVsID0gcXVlcnkuaWRcblxuICAgIGxldCByZXFDaGFubmVsID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9YCk7IC8vIGlzb21vcnBoaWMtZmV0Y2hcbiAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKVxuICAgIGxldCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsXG5cbiAgICBsZXQgcmVxQXVkaW9zID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYCk7IC8vIGlzb21vcnBoaWMtZmV0Y2hcbiAgICBsZXQgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKClcbiAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwc1xuXG4gICAgbGV0IHJlcUNoaWxkcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApXG4gICAgbGV0IGRhdGFDaGlsZHMgPSBhd2FpdCByZXFDaGlsZHMuanNvbigpO1xuICAgIGxldCBhdWRpb0NoaWxkcyA9IGRhdGFDaGlsZHMuYm9keS5jaGFubmVsc1xuXG4gICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgZGF0YUNoaWxkcyB9O1xuICB9XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIGF1ZGlvQ2hpbGRzIH0gPSB0aGlzLnByb3BzXG4gICAgLy9jb25zb2xlLmxvZyhhdWRpb0NoaWxkcylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcj4gUG9kQ2FzdDwvaGVhZGVyPlxuICAgICAgICA8aDE+e2NoYW5uZWwudGl0bGV9PC9oMT5cblxuICAgICAgICA8aDI+U2VyaWVzIDwvaDI+XG4gICAgICAgIHthdWRpb0NoaWxkcy5tYXAoKHNlcmllcywgaWR4KSA9PiA8ZGl2IGtleT17aWR4fT4ge3Nlcmllcy50aXRsZX08L2Rpdj4pfVxuXG5cbiAgICAgICAgPGgyPkxhc3QgUG9kQ2FzdHMgPC9oMj5cbiAgICAgICAge2F1ZGlvQ2xpcHMubWFwKChjbGlwLGlkeCkgPT4gPGRpdiBrZXk9e2lkeH0+IHtjbGlwLnRpdGxlfTwvZGl2Pil9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXHRcdFx0XHRoZWFkZXJ7XG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiM4NzU2Y2E7XG5cdFx0XHRcdFx0cGFkZGluZzoxNXB4O1xuXHRcdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNoYW5uZWxzIHtcblx0XHRcdFx0XHRkaXNwbGF5OmdyaWQ7XG5cdFx0XHRcdFx0Z3JpZC1nYXA6MTVweDtcblx0XHRcdFx0XHRwYWRkaW5nOjE1cHg7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpbGwgLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jaGFubmVse1xuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czozcHg7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzowcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206NWVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jaGFubmVsIGltZ3tcblx0XHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGgye1xuXHRcdFx0XHRcdHBhZGRpbmc6NXB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTowLjllbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDo2MDA7XG5cdFx0XHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDF7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICAgIHBhZGRpbmc6MTVweDtcbiAgICAgICAgfVxuXG5cdFx0XHRcdGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6d2hpdGU7XG5cdFx0XHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnN5c3RlbS11aTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuXG5cbiAgfVxufSJdfQ== */\n/*@ sourceURL=/home/rafael/Documents/platzi/nextjs/podcasts/pages/channel.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, idChannel, reqChannel, dataChannel, channel, reqAudios, dataAudios, audioClips, reqChilds, dataChilds, audioChilds;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                idChannel = query.id;
                _context.next = 4;
                return fetch("https://api.audioboom.com/channels/".concat(idChannel));

              case 4:
                reqChannel = _context.sent;
                _context.next = 7;
                return reqChannel.json();

              case 7:
                dataChannel = _context.sent;
                channel = dataChannel.body.channel;
                _context.next = 11;
                return fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips"));

              case 11:
                reqAudios = _context.sent;
                _context.next = 14;
                return reqAudios.json();

              case 14:
                dataAudios = _context.sent;
                audioClips = dataAudios.body.audio_clips;
                _context.next = 18;
                return fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels"));

              case 18:
                reqChilds = _context.sent;
                _context.next = 21;
                return reqChilds.json();

              case 21:
                dataChilds = _context.sent;
                audioChilds = dataChilds.body.channels;
                return _context.abrupt("return", {
                  channel: channel,
                  audioClips: audioClips,
                  dataChilds: dataChilds
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.720918b3a711500c57a4.hot-update.js.map
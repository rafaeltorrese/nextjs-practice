webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/home/rafael/Documents/platzi/nextjs/podcasts/pages/index.js";




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
      var channels = this.props.channels;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2009834438",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-2009834438",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "  Podcasts "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2009834438" + " " + "channels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, channels.map(function (channel) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-2009834438" + " " + "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: channel.urls.logo_image.original,
          alt: "image",
          className: "jsx-2009834438",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          className: "jsx-2009834438",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, channel.title));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "699634757",
        __self: this
      }, "header.jsx-2009834438{color:#fff;background:#8756ca;padding:15px;text-align:center;}.channels.jsx-2009834438{display:grid;grid-gap:15px;padding:15px;}.channel.jsx-2009834438{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:5em;}.channel.jsx-2009834438 img.jsx-2009834438{width:100%;}h2.jsx-2009834438{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmdCLEFBR2dCLEFBT0UsQUFNQyxBQU1ILEFBR0MsV0FyQk8sQUFtQm5CLENBR2dCLENBZkYsQ0FNSSxhQUxMLENBZUcsRUF0QkgsRUFhMkIsUUFKekMsQUFBQyxHQVJrQixDQXNCVCxTQUNTLFFBdEJsQixVQXVCQSxDQVhrQixrQkFDbEIiLCJmaWxlIjoiL2hvbWUvcmFmYWVsL0RvY3VtZW50cy9wbGF0emkvbmV4dGpzL3BvZGNhc3RzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHsgLy8gb25seSBmb3IgbmV4dGpzXG5cdFx0bGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzL3JlY29tbWVuZGVkJyk7IC8vIGlzb21vcnBoaWMtZmV0Y2hcblx0XHRsZXQgeyBib2R5OiBjaGFubmVscyB9ID0gYXdhaXQgcmVxLmpzb24oKVxuXHRcdHJldHVybiB7IGNoYW5uZWxzIH07XG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoZWFkZXI+XHRcdFBvZGNhc3RzXHQ8L2hlYWRlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxuXHRcdFx0XHRcdHtjaGFubmVscy5tYXAoKGNoYW5uZWwpID0+IChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD1cImltYWdlXCIgLz5cblx0XHRcdFx0XHRcdFx0PGgyPntjaGFubmVsLnRpdGxlfTwvaDI+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cblxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0aGVhZGVye1xuXHRcdFx0XHRcdGNvbG9yOiNmZmY7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDojODc1NmNhO1xuXHRcdFx0XHRcdHBhZGRpbmc6MTVweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jaGFubmVscyB7XG5cdFx0XHRcdFx0ZGlzcGxheTpncmlkO1xuXHRcdFx0XHRcdGdyaWQtZ2FwOjE1cHg7XG5cdFx0XHRcdFx0cGFkZGluZzoxNXB4O1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczpcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2hhbm5lbHtcblx0XHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6M3B4O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6MHB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjVlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2hhbm5lbCBpbWd7XG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHRoMntcblx0XHRcdFx0XHRwYWRkaW5nOjVweDtcblx0XHRcdFx0XHRmb250LXNpemU6MC45ZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6NjAwO1xuXHRcdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDp3aGl0ZTtcblx0XHRcdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6c3lzdGVtLXVpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQpXG5cdH1cbn0iXX0= */\n/*@ sourceURL=/home/rafael/Documents/platzi/nextjs/podcasts/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1155926762",
        __self: this
      }, "body{background:white;margin:0;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHVCLEFBR3VCLGlCQUNSLFNBQ2Esc0JBQ3RCIiwiZmlsZSI6Ii9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7IC8vIG9ubHkgZm9yIG5leHRqc1xuXHRcdGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy9yZWNvbW1lbmRlZCcpOyAvLyBpc29tb3JwaGljLWZldGNoXG5cdFx0bGV0IHsgYm9keTogY2hhbm5lbHMgfSA9IGF3YWl0IHJlcS5qc29uKClcblx0XHRyZXR1cm4geyBjaGFubmVscyB9O1xuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBjaGFubmVscyB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aGVhZGVyPlx0XHRQb2RjYXN0c1x0PC9oZWFkZXI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbHNcIj5cblx0XHRcdFx0XHR7Y2hhbm5lbHMubWFwKChjaGFubmVsKSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2NoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJpbWFnZVwiIC8+XG5cdFx0XHRcdFx0XHRcdDxoMj57Y2hhbm5lbC50aXRsZX08L2gyPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdGhlYWRlcntcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6Izg3NTZjYTtcblx0XHRcdFx0XHRwYWRkaW5nOjE1cHg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2hhbm5lbHMge1xuXHRcdFx0XHRcdGRpc3BsYXk6Z3JpZDtcblx0XHRcdFx0XHRncmlkLWdhcDoxNXB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6MTVweDtcblx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNoYW5uZWx7XG5cdFx0XHRcdFx0ZGlzcGxheTpibG9jaztcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjNweDtcblx0XHRcdFx0XHRib3gtc2hhZG93OjBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTo1ZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNoYW5uZWwgaW1ne1xuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aDJ7XG5cdFx0XHRcdFx0cGFkZGluZzo1cHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOjAuOWVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OjYwMDtcblx0XHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6d2hpdGU7XG5cdFx0XHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnN5c3RlbS11aTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXG5cdFx0KVxuXHR9XG59Il19 */\n/*@ sourceURL=/home/rafael/Documents/platzi/nextjs/podcasts/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var req, _ref, channels;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://api.audioboom.com/channels/recommended');

              case 2:
                req = _context.sent;
                _context.next = 5;
                return req.json();

              case 5:
                _ref = _context.sent;
                channels = _ref.body;
                return _context.abrupt("return", {
                  channels: channels
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.08bea08d21f72a1f5737.hot-update.js.map
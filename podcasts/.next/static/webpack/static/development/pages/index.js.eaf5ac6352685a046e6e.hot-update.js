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
        className: "jsx-3156921295",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-3156921295",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "  Podcasts "), channels.map(function (channel) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-3156921295" + " " + "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: channel.urls.logo_image.original,
          alt: "image",
          className: "jsx-3156921295",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          className: "jsx-3156921295",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, channel.title));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2663126476",
        __self: this
      }, "header.jsx-3156921295{color:#fff;background:#8756ca;padding:15px;text-align:center;}.channel.jsx-3156921295{display:block;background:#000;background-size:100%;padding-bottom:100%;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:5em;}.channel.jsx-3156921295 img.jsx-3156921295{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmdCLEFBR2dCLEFBT0csQUFTSCxXQWZRLEFBZ0JuQixHQVRnQixnQkFOSCxBQU9RLGFBTkgsUUFPRSxVQU5wQixVQU9rQixrQkFDc0Isd0NBQ3RCLGtCQUNsQiIsImZpbGUiOiIvaG9tZS9yYWZhZWwvRG9jdW1lbnRzL3BsYXR6aS9uZXh0anMvcG9kY2FzdHMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXHRcdGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy9yZWNvbW1lbmRlZCcpOyAvLyBpc29tb3JwaGljLWZldGNoXG5cdFx0bGV0IHsgYm9keTogY2hhbm5lbHMgfSA9IGF3YWl0IHJlcS5qc29uKClcblx0XHRyZXR1cm4geyBjaGFubmVscyB9O1xuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBjaGFubmVscyB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aGVhZGVyPlx0XHRQb2RjYXN0c1x0PC9oZWFkZXI+XG5cblx0XHRcdFx0e2NoYW5uZWxzLm1hcChjaGFubmVsID0+KFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e2NoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJpbWFnZVwiLz5cblx0XHRcdFx0XHRcdDxoMj57Y2hhbm5lbC50aXRsZX08L2gyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpICl9XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0aGVhZGVye1xuXHRcdFx0XHRcdGNvbG9yOiNmZmY7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDojODc1NmNhO1xuXHRcdFx0XHRcdHBhZGRpbmc6MTVweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jaGFubmVse1xuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDojMDAwO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZToxMDAlO1xuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOjEwMCU7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czozcHg7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzowcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206NWVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jaGFubmVsIGltZ3tcblx0XHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDp3aGl0ZTtcblx0XHRcdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6c3lzdGVtLXVpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQpXG5cdH1cbn0iXX0= */\n/*@ sourceURL=/home/rafael/Documents/platzi/nextjs/podcasts/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1155926762",
        __self: this
      }, "body{background:white;margin:0;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3VCLEFBR3VCLGlCQUNSLFNBQ2Esc0JBQ3RCIiwiZmlsZSI6Ii9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cdFx0bGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzL3JlY29tbWVuZGVkJyk7IC8vIGlzb21vcnBoaWMtZmV0Y2hcblx0XHRsZXQgeyBib2R5OiBjaGFubmVscyB9ID0gYXdhaXQgcmVxLmpzb24oKVxuXHRcdHJldHVybiB7IGNoYW5uZWxzIH07XG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoZWFkZXI+XHRcdFBvZGNhc3RzXHQ8L2hlYWRlcj5cblxuXHRcdFx0XHR7Y2hhbm5lbHMubWFwKGNoYW5uZWwgPT4oXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD1cImltYWdlXCIvPlxuXHRcdFx0XHRcdFx0PGgyPntjaGFubmVsLnRpdGxlfTwvaDI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkgKX1cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRoZWFkZXJ7XG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiM4NzU2Y2E7XG5cdFx0XHRcdFx0cGFkZGluZzoxNXB4O1xuXHRcdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNoYW5uZWx7XG5cdFx0XHRcdFx0ZGlzcGxheTpibG9jaztcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiMwMDA7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOjEwMCU7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206MTAwJTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjNweDtcblx0XHRcdFx0XHRib3gtc2hhZG93OjBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTo1ZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNoYW5uZWwgaW1ne1xuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOndoaXRlO1xuXHRcdFx0XHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTpzeXN0ZW0tdWk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdClcblx0fVxufSJdfQ== */\n/*@ sourceURL=/home/rafael/Documents/platzi/nextjs/podcasts/pages/index.js */"));
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
//# sourceMappingURL=index.js.eaf5ac6352685a046e6e.hot-update.js.map
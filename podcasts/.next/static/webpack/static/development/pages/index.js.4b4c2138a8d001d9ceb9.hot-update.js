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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);







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
        className: "jsx-1539291780",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-1539291780",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "  Podcasts "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1539291780" + " " + "channels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, channels.map(function (channel) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "jsx-1539291780" + " " + "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: channel.urls.logo_image.original,
          alt: "image",
          className: "jsx-1539291780",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          className: "jsx-1539291780",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, channel.title)));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3005561479",
        __self: this
      }, "header.jsx-1539291780{color:#fff;background:#8756ca;padding:15px;text-align:center;}.channels.jsx-1539291780{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill ,minmax(160px,1fr));}.channel.jsx-1539291780{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:5em;}.channel.jsx-1539291780 img.jsx-1539291780{width:100%;}h2.jsx-1539291780{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2dCLEFBR2dCLEFBT0UsQUFNQyxBQU1ILEFBR0MsV0FyQk8sQUFtQm5CLENBR2dCLENBZkYsQ0FNSSxhQUxMLENBZUcsRUF0QkgsRUFhMkIsUUFMcUIsR0FQM0MsQ0FzQlQsU0FDUyxRQXRCbEIsVUF1QkEsQ0FYa0Isa0JBQ2xCLFNBTkEiLCJmaWxlIjoiL2hvbWUvcmFmYWVsL0RvY3VtZW50cy9wbGF0emkvbmV4dGpzL3BvZGNhc3RzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkgeyAvLyBvbmx5IGZvciBuZXh0anNcblx0XHRsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvcmVjb21tZW5kZWQnKTsgLy8gaXNvbW9ycGhpYy1mZXRjaFxuXHRcdGxldCB7IGJvZHk6IGNoYW5uZWxzIH0gPSBhd2FpdCByZXEuanNvbigpXG5cdFx0cmV0dXJuIHsgY2hhbm5lbHMgfTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHNcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGhlYWRlcj5cdFx0UG9kY2FzdHNcdDwvaGVhZGVyPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbHNcIj5cblx0XHRcdFx0XHR7Y2hhbm5lbHMubWFwKChjaGFubmVsKSA9PiAoXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2NoYW5uZWxcIiA+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNoYW5uZWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD1cImltYWdlXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8aDI+e2NoYW5uZWwudGl0bGV9PC9oMj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRoZWFkZXJ7XG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiM4NzU2Y2E7XG5cdFx0XHRcdFx0cGFkZGluZzoxNXB4O1xuXHRcdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNoYW5uZWxzIHtcblx0XHRcdFx0XHRkaXNwbGF5OmdyaWQ7XG5cdFx0XHRcdFx0Z3JpZC1nYXA6MTVweDtcblx0XHRcdFx0XHRwYWRkaW5nOjE1cHg7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpbGwgLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jaGFubmVse1xuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czozcHg7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzowcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206NWVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jaGFubmVsIGltZ3tcblx0XHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGgye1xuXHRcdFx0XHRcdHBhZGRpbmc6NXB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTowLjllbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDo2MDA7XG5cdFx0XHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOndoaXRlO1xuXHRcdFx0XHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTpzeXN0ZW0tdWk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdClcblx0fVxufSJdfQ== */\n/*@ sourceURL=/home/rafael/Documents/platzi/nextjs/podcasts/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1155926762",
        __self: this
      }, "body{background:white;margin:0;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRXVCLEFBR3VCLGlCQUNSLFNBQ2Esc0JBQ3RCIiwiZmlsZSI6Ii9ob21lL3JhZmFlbC9Eb2N1bWVudHMvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHsgLy8gb25seSBmb3IgbmV4dGpzXG5cdFx0bGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzL3JlY29tbWVuZGVkJyk7IC8vIGlzb21vcnBoaWMtZmV0Y2hcblx0XHRsZXQgeyBib2R5OiBjaGFubmVscyB9ID0gYXdhaXQgcmVxLmpzb24oKVxuXHRcdHJldHVybiB7IGNoYW5uZWxzIH07XG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoZWFkZXI+XHRcdFBvZGNhc3RzXHQ8L2hlYWRlcj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxzXCI+XG5cdFx0XHRcdFx0e2NoYW5uZWxzLm1hcCgoY2hhbm5lbCkgPT4gKFxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9jaGFubmVsXCIgPlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2NoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJpbWFnZVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGgyPntjaGFubmVsLnRpdGxlfTwvaDI+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cblxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0aGVhZGVye1xuXHRcdFx0XHRcdGNvbG9yOiNmZmY7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDojODc1NmNhO1xuXHRcdFx0XHRcdHBhZGRpbmc6MTVweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jaGFubmVscyB7XG5cdFx0XHRcdFx0ZGlzcGxheTpncmlkO1xuXHRcdFx0XHRcdGdyaWQtZ2FwOjE1cHg7XG5cdFx0XHRcdFx0cGFkZGluZzoxNXB4O1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maWxsICwgbWlubWF4KDE2MHB4LCAxZnIpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2hhbm5lbHtcblx0XHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6M3B4O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6MHB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjVlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2hhbm5lbCBpbWd7XG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHRoMntcblx0XHRcdFx0XHRwYWRkaW5nOjVweDtcblx0XHRcdFx0XHRmb250LXNpemU6MC45ZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6NjAwO1xuXHRcdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDp3aGl0ZTtcblx0XHRcdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6c3lzdGVtLXVpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQpXG5cdH1cbn0iXX0= */\n/*@ sourceURL=/home/rafael/Documents/platzi/nextjs/podcasts/pages/index.js */"));
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
//# sourceMappingURL=index.js.4b4c2138a8d001d9ceb9.hot-update.js.map
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/injected-connector */ "./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "./node_modules/@web3-react/walletconnect-connector/dist/walletconnect-connector.esm.js");
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/frame-connector */ "./node_modules/@web3-react/frame-connector/dist/frame-connector.esm.js");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/providers */ "./node_modules/@ethersproject/providers/lib.esm/index.js");
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ethersproject/units */ "./node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks */ "./hooks.ts");
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../connectors */ "./connectors.ts");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.tsx");



var _jsxFileName = "C:\\Users\\jesh\\Desktop\\000O1T\\reward-checker\\src\\pages\\index.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var ConnectorNames;

(function (ConnectorNames) {
  ConnectorNames["Injected"] = "Connect Wallet";
})(ConnectorNames || (ConnectorNames = {}));

var connectorsByName = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ConnectorNames.Injected, _connectors__WEBPACK_IMPORTED_MODULE_10__["injected"]);

function getErrorMessage(error) {
  if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__["NoEthereumProviderError"]) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
  } else if (error instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_3__["UnsupportedChainIdError"]) {
    return "You're connected to an unsupported network.";
  } else if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__["UserRejectedRequestError"] || error instanceof _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_5__["UserRejectedRequestError"] || error instanceof _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_6__["UserRejectedRequestError"]) {
    return 'Please authorize this website to access your Ethereum account.';
  } else {
    console.error(error);
    return 'An unknown error occurred. Check the console for more details.';
  }
}

function getLibrary(provider) {
  var library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_7__["Web3Provider"](provider);
  library.pollingInterval = 12000;
  return library;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["Web3ReactProvider"], {
    getLibrary: getLibrary,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }));
});

function Account() {
  _s();

  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      account = _useWeb3React.account;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Account"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, account === null ? '-' : account ? "".concat(account.substring(0, 6), "...").concat(account.substring(account.length - 4)) : ''));
}

_s(Account, "Yw4fkvk9SNw3FxQ8wmZp/p1e7+E=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c = Account;

function Balance() {
  _s2();

  var _useWeb3React2 = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      account = _useWeb3React2.account,
      library = _useWeb3React2.library,
      chainId = _useWeb3React2.chainId;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      balance = _React$useState2[0],
      setBalance = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!!account && !!library) {
      var stale = false;
      library.getBalance(account).then(function (balance) {
        if (!stale) {
          setBalance(balance);
        }
      })["catch"](function () {
        if (!stale) {
          setBalance(null);
        }
      });
      return function () {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, "BNB Balance"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, balance === null ? 'Error' : balance ? "".concat(Object(_ethersproject_units__WEBPACK_IMPORTED_MODULE_8__["formatEther"])(balance.tofixed(6))) : ''));
}

_s2(Balance, "M1WVM1XYBvl8/UPoZ+Zp2BzPIno=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c2 = Balance;

function Header() {
  _s3();

  var _useWeb3React3 = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      active = _useWeb3React3.active,
      error = _useWeb3React3.error;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h1", {
    style: {
      margin: '1rem',
      textAlign: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, active ? '🟢' : error ? '🔴' : '🟠'), __jsx("h3", {
    style: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: '1fr 1fr',
      maxWidth: '20rem',
      lineHeight: '2rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx(Account, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), __jsx(Balance, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  })));
}

_s3(Header, "5Wc8Z9LF2TZggKnK8RHaXo3D1Z0=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c3 = Header;

function App() {
  _s4();

  var _this = this;

  var context = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])();
  var connector = context.connector,
      library = context.library,
      chainId = context.chainId,
      account = context.account,
      activate = context.activate,
      deactivate = context.deactivate,
      active = context.active,
      error = context.error; // handle logic to recognize the connector currently being activated

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      activatingConnector = _React$useState4[0],
      setActivatingConnector = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]); // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already

  var triedEager = Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["useEagerConnect"])(); // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists

  Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["useInactiveListener"])(!triedEager || !!activatingConnector);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: '1fr 1fr',
      maxWidth: '30rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, Object.keys(connectorsByName).map(function (name) {
    var currentConnector = connectorsByName[name];
    var activating = currentConnector === activatingConnector;
    var connected = currentConnector === connector;
    var disabled = !triedEager || !!activatingConnector || connected || !!error;
    return __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
        cursor: disabled ? 'unset' : 'pointer',
        position: 'relative'
      },
      disabled: disabled,
      key: name,
      onClick: function onClick() {
        setActivatingConnector(currentConnector);
        activate(connectorsByName[name]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        margin: '0 0 0 1rem'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 15
      }
    }, activating && __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
      color: 'black',
      style: {
        height: '25%',
        marginLeft: '-1rem'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 32
      }
    }), connected && __jsx("span", {
      role: "img",
      "aria-label": "check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 19
      }
    }, "\u2705")), name);
  }), (active || error) && __jsx("button", {
    style: {
      height: '3rem',
      margin: '0 0 0 1rem',
      borderRadius: '1rem',
      borderColor: 'red',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      deactivate();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }, "Disconnect"), !!error && __jsx("h4", {
    style: {
      marginTop: '1rem',
      marginBottom: '0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 23
    }
  }, getErrorMessage(error))), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: 'fit-content',
      maxWidth: '20rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }
  }));
}

_s4(App, "oVtBozX5lH0j7w1/NhHB2/98yx0=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"], _hooks__WEBPACK_IMPORTED_MODULE_9__["useEagerConnect"], _hooks__WEBPACK_IMPORTED_MODULE_9__["useInactiveListener"]];
});

_c4 = App;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Account");
$RefreshReg$(_c2, "Balance");
$RefreshReg$(_c3, "Header");
$RefreshReg$(_c4, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNvbm5lY3Rvck5hbWVzIiwiY29ubmVjdG9yc0J5TmFtZSIsIkluamVjdGVkIiwiaW5qZWN0ZWQiLCJnZXRFcnJvck1lc3NhZ2UiLCJlcnJvciIsIk5vRXRoZXJldW1Qcm92aWRlckVycm9yIiwiVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSIsImNvbnNvbGUiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJsaWJyYXJ5IiwiV2ViM1Byb3ZpZGVyIiwicG9sbGluZ0ludGVydmFsIiwiQWNjb3VudCIsInVzZVdlYjNSZWFjdCIsImFjY291bnQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJCYWxhbmNlIiwiY2hhaW5JZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInVzZUVmZmVjdCIsInN0YWxlIiwiZ2V0QmFsYW5jZSIsInRoZW4iLCJ1bmRlZmluZWQiLCJmb3JtYXRFdGhlciIsInRvZml4ZWQiLCJIZWFkZXIiLCJhY3RpdmUiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXhXaWR0aCIsImxpbmVIZWlnaHQiLCJBcHAiLCJjb250ZXh0IiwiY29ubmVjdG9yIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiYWN0aXZhdGluZ0Nvbm5lY3RvciIsInNldEFjdGl2YXRpbmdDb25uZWN0b3IiLCJ0cmllZEVhZ2VyIiwidXNlRWFnZXJDb25uZWN0IiwidXNlSW5hY3RpdmVMaXN0ZW5lciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJuYW1lIiwiY3VycmVudENvbm5lY3RvciIsImFjdGl2YXRpbmciLCJjb25uZWN0ZWQiLCJkaXNhYmxlZCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiY3Vyc29yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0lBRUtBLGM7O1dBQUFBLGM7QUFBQUEsZ0I7R0FBQUEsYyxLQUFBQSxjOztBQUlMLElBQU1DLGdCQUE0RCxHQUFHLDhGQUNsRUQsY0FBYyxDQUFDRSxRQURnRCxFQUNyQ0MscURBRHFDLENBQWxFOztBQUlBLFNBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQXVDO0FBQ3JDLE1BQUlBLEtBQUssWUFBWUMsc0ZBQXJCLEVBQThDO0FBQzVDLFdBQU8sNkdBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUQsS0FBSyxZQUFZRSx3RUFBckIsRUFBOEM7QUFDbkQsV0FBTyw2Q0FBUDtBQUNELEdBRk0sTUFFQSxJQUNMRixLQUFLLFlBQVlHLHVGQUFqQixJQUNBSCxLQUFLLFlBQVlJLDRGQURqQixJQUVBSixLQUFLLFlBQVlLLG9GQUhaLEVBSUw7QUFDQSxXQUFPLGdFQUFQO0FBQ0QsR0FOTSxNQU1BO0FBQ0xDLFdBQU8sQ0FBQ04sS0FBUixDQUFjQSxLQUFkO0FBQ0EsV0FBTyxnRUFBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU08sVUFBVCxDQUFvQkMsUUFBcEIsRUFBaUQ7QUFDL0MsTUFBTUMsT0FBTyxHQUFHLElBQUlDLHFFQUFKLENBQWlCRixRQUFqQixDQUFoQjtBQUNBQyxTQUFPLENBQUNFLGVBQVIsR0FBMEIsS0FBMUI7QUFDQSxTQUFPRixPQUFQO0FBQ0Q7O0FBRWMsMkVBQVc7QUFDeEIsU0FDRSxNQUFDLGtFQUFEO0FBQW1CLGNBQVUsRUFBRUYsVUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtEOztBQUVELFNBQVNLLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxzQkFDR0MscUVBQVksRUFEZjtBQUFBLE1BQ1RDLE9BRFMsaUJBQ1RBLE9BRFM7O0FBR2pCLFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxPQUFPLEtBQUssSUFBWixHQUNHLEdBREgsR0FFR0EsT0FBTyxhQUNKQSxPQUFPLENBQUNDLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FESSxnQkFDeUJELE9BQU8sQ0FBQ0MsU0FBUixDQUFrQkQsT0FBTyxDQUFDRSxNQUFSLEdBQWlCLENBQW5DLENBRHpCLElBRVAsRUFMTixDQUZGLENBREY7QUFZRDs7R0FmUUosTztVQUNhQyw2RDs7O0tBRGJELE87O0FBaUJULFNBQVNLLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSx1QkFDcUJKLHFFQUFZLEVBRGpDO0FBQUEsTUFDVEMsT0FEUyxrQkFDVEEsT0FEUztBQUFBLE1BQ0FMLE9BREEsa0JBQ0FBLE9BREE7QUFBQSxNQUNTUyxPQURULGtCQUNTQSxPQURUOztBQUFBLHdCQUdhQyw0Q0FBSyxDQUFDQyxRQUFOLEVBSGI7QUFBQTtBQUFBLE1BR1ZDLE9BSFU7QUFBQSxNQUdEQyxVQUhDOztBQUlqQkgsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixZQUFXO0FBQ3pCLFFBQUksQ0FBQyxDQUFDVCxPQUFGLElBQWEsQ0FBQyxDQUFDTCxPQUFuQixFQUE0QjtBQUMxQixVQUFJZSxLQUFLLEdBQUcsS0FBWjtBQUVBZixhQUFPLENBQ0pnQixVQURILENBQ2NYLE9BRGQsRUFFR1ksSUFGSCxDQUVRLFVBQUNMLE9BQUQsRUFBa0I7QUFDdEIsWUFBSSxDQUFDRyxLQUFMLEVBQVk7QUFDVkYsb0JBQVUsQ0FBQ0QsT0FBRCxDQUFWO0FBQ0Q7QUFDRixPQU5ILFdBT1MsWUFBTTtBQUNYLFlBQUksQ0FBQ0csS0FBTCxFQUFZO0FBQ1ZGLG9CQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0Q7QUFDRixPQVhIO0FBYUEsYUFBTyxZQUFNO0FBQ1hFLGFBQUssR0FBRyxJQUFSO0FBQ0FGLGtCQUFVLENBQUNLLFNBQUQsQ0FBVjtBQUNELE9BSEQ7QUFJRDtBQUNGLEdBdEJELEVBc0JHLENBQUNiLE9BQUQsRUFBVUwsT0FBVixFQUFtQlMsT0FBbkIsQ0F0QkgsRUFKaUIsQ0EwQmU7O0FBRWhDLFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0csT0FBTyxLQUFLLElBQVosR0FBbUIsT0FBbkIsR0FBNkJBLE9BQU8sYUFBTU8sd0VBQVcsQ0FBQ1AsT0FBTyxDQUFDUSxPQUFSLENBQWdCLENBQWhCLENBQUQsQ0FBakIsSUFBMEMsRUFBckYsQ0FGRixDQURGO0FBTUQ7O0lBbENRWixPO1VBQytCSiw2RDs7O01BRC9CSSxPOztBQW9DVCxTQUFTYSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsdUJBQ1VqQixxRUFBWSxFQUR0QjtBQUFBLE1BQ1JrQixNQURRLGtCQUNSQSxNQURRO0FBQUEsTUFDQS9CLEtBREEsa0JBQ0FBLEtBREE7O0FBR2hCLFNBQ0UsbUVBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRWdDLFlBQU0sRUFBRSxNQUFWO0FBQWtCQyxlQUFTLEVBQUU7QUFBN0IsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9ERixNQUFNLEdBQUcsSUFBSCxHQUFVL0IsS0FBSyxHQUFHLElBQUgsR0FBVSxJQUFuRixDQURGLEVBRUU7QUFDRSxTQUFLLEVBQUU7QUFDTGtDLGFBQU8sRUFBRSxNQURKO0FBRUxDLGFBQU8sRUFBRSxNQUZKO0FBR0xDLHlCQUFtQixFQUFFLFNBSGhCO0FBSUxDLGNBQVEsRUFBRSxPQUpMO0FBS0xDLGdCQUFVLEVBQUUsTUFMUDtBQU1MTixZQUFNLEVBQUU7QUFOSCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQUZGLENBREY7QUFrQkQ7O0lBckJRRixNO1VBQ21CakIsNkQ7OztNQURuQmlCLE07O0FBdUJULFNBQVNTLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUNiLE1BQU1DLE9BQU8sR0FBRzNCLHFFQUFZLEVBQTVCO0FBRGEsTUFFTDRCLFNBRkssR0FFeUVELE9BRnpFLENBRUxDLFNBRks7QUFBQSxNQUVNaEMsT0FGTixHQUV5RStCLE9BRnpFLENBRU0vQixPQUZOO0FBQUEsTUFFZVMsT0FGZixHQUV5RXNCLE9BRnpFLENBRWV0QixPQUZmO0FBQUEsTUFFd0JKLE9BRnhCLEdBRXlFMEIsT0FGekUsQ0FFd0IxQixPQUZ4QjtBQUFBLE1BRWlDNEIsUUFGakMsR0FFeUVGLE9BRnpFLENBRWlDRSxRQUZqQztBQUFBLE1BRTJDQyxVQUYzQyxHQUV5RUgsT0FGekUsQ0FFMkNHLFVBRjNDO0FBQUEsTUFFdURaLE1BRnZELEdBRXlFUyxPQUZ6RSxDQUV1RFQsTUFGdkQ7QUFBQSxNQUUrRC9CLEtBRi9ELEdBRXlFd0MsT0FGekUsQ0FFK0R4QyxLQUYvRCxFQUliOztBQUphLHlCQUt5Q21CLDRDQUFLLENBQUNDLFFBQU4sRUFMekM7QUFBQTtBQUFBLE1BS053QixtQkFMTTtBQUFBLE1BS2VDLHNCQUxmOztBQU1iMUIsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlxQixtQkFBbUIsSUFBSUEsbUJBQW1CLEtBQUtILFNBQW5ELEVBQThEO0FBQzVESSw0QkFBc0IsQ0FBQ2xCLFNBQUQsQ0FBdEI7QUFDRDtBQUNGLEdBSkQsRUFJRyxDQUFDaUIsbUJBQUQsRUFBc0JILFNBQXRCLENBSkgsRUFOYSxDQVliOztBQUNBLE1BQU1LLFVBQVUsR0FBR0MsOERBQWUsRUFBbEMsQ0FiYSxDQWViOztBQUNBQyxvRUFBbUIsQ0FBQyxDQUFDRixVQUFELElBQWUsQ0FBQyxDQUFDRixtQkFBbEIsQ0FBbkI7QUFFQSxTQUNFLG1FQUNFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFJLFNBQUssRUFBRTtBQUFFWixZQUFNLEVBQUU7QUFBVixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xFLGFBQU8sRUFBRSxNQURKO0FBRUxDLGFBQU8sRUFBRSxNQUZKO0FBR0xDLHlCQUFtQixFQUFFLFNBSGhCO0FBSUxDLGNBQVEsRUFBRSxPQUpMO0FBS0xMLFlBQU0sRUFBRTtBQUxILEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNHaUIsTUFBTSxDQUFDQyxJQUFQLENBQVl0RCxnQkFBWixFQUE4QnVELEdBQTlCLENBQWtDLFVBQUFDLElBQUksRUFBSTtBQUN6QyxRQUFNQyxnQkFBZ0IsR0FBR3pELGdCQUFnQixDQUFDd0QsSUFBRCxDQUF6QztBQUNBLFFBQU1FLFVBQVUsR0FBR0QsZ0JBQWdCLEtBQUtULG1CQUF4QztBQUNBLFFBQU1XLFNBQVMsR0FBR0YsZ0JBQWdCLEtBQUtaLFNBQXZDO0FBQ0EsUUFBTWUsUUFBUSxHQUFHLENBQUNWLFVBQUQsSUFBZSxDQUFDLENBQUNGLG1CQUFqQixJQUF3Q1csU0FBeEMsSUFBcUQsQ0FBQyxDQUFDdkQsS0FBeEU7QUFFQSxXQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0x5RCxjQUFNLEVBQUUsTUFESDtBQUVMQyxvQkFBWSxFQUFFLE1BRlQ7QUFHTEMsbUJBQVcsRUFBRUwsVUFBVSxHQUFHLFFBQUgsR0FBY0MsU0FBUyxHQUFHLE9BQUgsR0FBYSxPQUh0RDtBQUlMSyxjQUFNLEVBQUVKLFFBQVEsR0FBRyxPQUFILEdBQWEsU0FKeEI7QUFLTEssZ0JBQVEsRUFBRTtBQUxMLE9BRFQ7QUFRRSxjQUFRLEVBQUVMLFFBUlo7QUFTRSxTQUFHLEVBQUVKLElBVFA7QUFVRSxhQUFPLEVBQUUsbUJBQU07QUFDYlAsOEJBQXNCLENBQUNRLGdCQUFELENBQXRCO0FBQ0FYLGdCQUFRLENBQUM5QyxnQkFBZ0IsQ0FBQ3dELElBQUQsQ0FBakIsQ0FBUjtBQUNELE9BYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWVFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xTLGdCQUFRLEVBQUUsVUFETDtBQUVMQyxXQUFHLEVBQUUsR0FGQTtBQUdMQyxZQUFJLEVBQUUsR0FIRDtBQUlMTixjQUFNLEVBQUUsTUFKSDtBQUtMdkIsZUFBTyxFQUFFLE1BTEo7QUFNTDhCLGtCQUFVLEVBQUUsUUFOUDtBQU9MQyxhQUFLLEVBQUUsT0FQRjtBQVFMakMsY0FBTSxFQUFFO0FBUkgsT0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BWUdzQixVQUFVLElBQUksTUFBQyw0REFBRDtBQUFTLFdBQUssRUFBRSxPQUFoQjtBQUF5QixXQUFLLEVBQUU7QUFBRUcsY0FBTSxFQUFFLEtBQVY7QUFBaUJTLGtCQUFVLEVBQUU7QUFBN0IsT0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVpqQixFQWFHWCxTQUFTLElBQ1I7QUFBTSxVQUFJLEVBQUMsS0FBWDtBQUFpQixvQkFBVyxPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLENBZkYsRUFrQ0dILElBbENILENBREY7QUFzQ0QsR0E1Q0EsQ0FUSCxFQXNERyxDQUFDckIsTUFBTSxJQUFJL0IsS0FBWCxLQUNHO0FBQ0UsU0FBSyxFQUFFO0FBQ0x5RCxZQUFNLEVBQUUsTUFESDtBQUVMekIsWUFBTSxFQUFFLFlBRkg7QUFHTDBCLGtCQUFZLEVBQUUsTUFIVDtBQUlMQyxpQkFBVyxFQUFFLEtBSlI7QUFLTEMsWUFBTSxFQUFFO0FBTEgsS0FEVDtBQVFFLFdBQU8sRUFBRSxtQkFBTTtBQUNiakIsZ0JBQVU7QUFDWCxLQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkROLEVBdUVLLENBQUMsQ0FBQzNDLEtBQUYsSUFBVztBQUFJLFNBQUssRUFBRTtBQUFFbUUsZUFBUyxFQUFFLE1BQWI7QUFBcUJDLGtCQUFZLEVBQUU7QUFBbkMsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNEckUsZUFBZSxDQUFDQyxLQUFELENBQXJFLENBdkVoQixDQUhGLEVBNkVFO0FBQUksU0FBSyxFQUFFO0FBQUVnQyxZQUFNLEVBQUU7QUFBVixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3RUYsRUErRUU7QUFDRSxTQUFLLEVBQUU7QUFDTEUsYUFBTyxFQUFFLE1BREo7QUFFTEMsYUFBTyxFQUFFLE1BRko7QUFHTEMseUJBQW1CLEVBQUUsYUFIaEI7QUFJTEMsY0FBUSxFQUFFLE9BSkw7QUFLTEwsWUFBTSxFQUFFO0FBTEgsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0VGLENBREY7QUE0RkQ7O0lBOUdRTyxHO1VBQ1MxQiw2RCxFQVlHa0Msc0QsRUFHbkJDLDBEOzs7TUFoQk9ULEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2RhNTU2M2UzY2JmN2ZhZTQwMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIE5vRXRoZXJldW1Qcm92aWRlckVycm9yLFxyXG4gIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZFxyXG59IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvdW5pdHMnXHJcblxyXG5pbXBvcnQgeyB1c2VFYWdlckNvbm5lY3QsIHVzZUluYWN0aXZlTGlzdGVuZXIgfSBmcm9tICcuLi9ob29rcydcclxuaW1wb3J0IHtcclxuICBpbmplY3RlZFxyXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMnXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInXHJcblxyXG5lbnVtIENvbm5lY3Rvck5hbWVzIHtcclxuICBJbmplY3RlZCA9ICdDb25uZWN0IFdhbGxldCdcclxufVxyXG5cclxuY29uc3QgY29ubmVjdG9yc0J5TmFtZTogeyBbY29ubmVjdG9yTmFtZSBpbiBDb25uZWN0b3JOYW1lc106IGFueSB9ID0ge1xyXG4gIFtDb25uZWN0b3JOYW1lcy5JbmplY3RlZF06IGluamVjdGVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvcjogRXJyb3IpIHtcclxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcikge1xyXG4gICAgcmV0dXJuICdObyBFdGhlcmV1bSBicm93c2VyIGV4dGVuc2lvbiBkZXRlY3RlZCwgaW5zdGFsbCBNZXRhTWFzayBvbiBkZXNrdG9wIG9yIHZpc2l0IGZyb20gYSBkQXBwIGJyb3dzZXIgb24gbW9iaWxlLidcclxuICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IpIHtcclxuICAgIHJldHVybiBcIllvdSdyZSBjb25uZWN0ZWQgdG8gYW4gdW5zdXBwb3J0ZWQgbmV0d29yay5cIlxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkIHx8XHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWVcclxuICApIHtcclxuICAgIHJldHVybiAnUGxlYXNlIGF1dGhvcml6ZSB0aGlzIHdlYnNpdGUgdG8gYWNjZXNzIHlvdXIgRXRoZXJldW0gYWNjb3VudC4nXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICByZXR1cm4gJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuIENoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMuJ1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGlicmFyeShwcm92aWRlcjogYW55KTogV2ViM1Byb3ZpZGVyIHtcclxuICBjb25zdCBsaWJyYXJ5ID0gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcilcclxuICBsaWJyYXJ5LnBvbGxpbmdJbnRlcnZhbCA9IDEyMDAwXHJcbiAgcmV0dXJuIGxpYnJhcnlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXZWIzUmVhY3RQcm92aWRlciBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cclxuICAgICAgPEFwcCAvPlxyXG4gICAgPC9XZWIzUmVhY3RQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFjY291bnQoKSB7XHJcbiAgY29uc3QgeyBhY2NvdW50IH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+QWNjb3VudDwvc3Bhbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge2FjY291bnQgPT09IG51bGxcclxuICAgICAgICAgID8gJy0nXHJcbiAgICAgICAgICA6IGFjY291bnRcclxuICAgICAgICAgID8gYCR7YWNjb3VudC5zdWJzdHJpbmcoMCwgNil9Li4uJHthY2NvdW50LnN1YnN0cmluZyhhY2NvdW50Lmxlbmd0aCAtIDQpfWBcclxuICAgICAgICAgIDogJyd9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQmFsYW5jZSgpIHtcclxuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnksIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuICBSZWFjdC51c2VFZmZlY3QoKCk6IGFueSA9PiB7XHJcbiAgICBpZiAoISFhY2NvdW50ICYmICEhbGlicmFyeSkge1xyXG4gICAgICBsZXQgc3RhbGUgPSBmYWxzZVxyXG5cclxuICAgICAgbGlicmFyeVxyXG4gICAgICAgIC5nZXRCYWxhbmNlKGFjY291bnQpXHJcbiAgICAgICAgLnRoZW4oKGJhbGFuY2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCYWxhbmNlKGJhbGFuY2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCYWxhbmNlKG51bGwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgc3RhbGUgPSB0cnVlXHJcbiAgICAgICAgc2V0QmFsYW5jZSh1bmRlZmluZWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZF0pIC8vIGVuc3VyZXMgcmVmcmVzaCBpZiByZWZlcmVudGlhbCBpZGVudGl0eSBvZiBsaWJyYXJ5IGRvZXNuJ3QgY2hhbmdlIGFjcm9zcyBjaGFpbklkc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+Qk5CIEJhbGFuY2U8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntiYWxhbmNlID09PSBudWxsID8gJ0Vycm9yJyA6IGJhbGFuY2UgPyBgJHtmb3JtYXRFdGhlcihiYWxhbmNlLnRvZml4ZWQoNikpfWAgOiAnJ308L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCB7IGFjdGl2ZSwgZXJyb3IgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luOiAnMXJlbScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT57YWN0aXZlID8gJ/Cfn6InIDogZXJyb3IgPyAn8J+UtCcgOiAn8J+foCd9PC9oMT5cclxuICAgICAgPGgzXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnMjByZW0nLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogJzJyZW0nLFxyXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFjY291bnQgLz5cclxuICAgICAgICA8QmFsYW5jZSAvPlxyXG4gICAgICA8L2gzPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZVdlYjNSZWFjdDxXZWIzUHJvdmlkZXI+KClcclxuICBjb25zdCB7IGNvbm5lY3RvciwgbGlicmFyeSwgY2hhaW5JZCwgYWNjb3VudCwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIGFjdGl2ZSwgZXJyb3IgfSA9IGNvbnRleHRcclxuXHJcbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIHJlY29nbml6ZSB0aGUgY29ubmVjdG9yIGN1cnJlbnRseSBiZWluZyBhY3RpdmF0ZWRcclxuICBjb25zdCBbYWN0aXZhdGluZ0Nvbm5lY3Rvciwgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcl0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KClcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGl2YXRpbmdDb25uZWN0b3IgJiYgYWN0aXZhdGluZ0Nvbm5lY3RvciA9PT0gY29ubmVjdG9yKSB7XHJcbiAgICAgIHNldEFjdGl2YXRpbmdDb25uZWN0b3IodW5kZWZpbmVkKVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmF0aW5nQ29ubmVjdG9yLCBjb25uZWN0b3JdKVxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gZWFnZXJseSBjb25uZWN0IHRvIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzIGFuZCBoYXMgZ3JhbnRlZCBhY2Nlc3MgYWxyZWFkeVxyXG4gIGNvbnN0IHRyaWVkRWFnZXIgPSB1c2VFYWdlckNvbm5lY3QoKVxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gY29ubmVjdCBpbiByZWFjdGlvbiB0byBjZXJ0YWluIGV2ZW50cyBvbiB0aGUgaW5qZWN0ZWQgZXRoZXJldW0gcHJvdmlkZXIsIGlmIGl0IGV4aXN0c1xyXG4gIHVzZUluYWN0aXZlTGlzdGVuZXIoIXRyaWVkRWFnZXIgfHwgISFhY3RpdmF0aW5nQ29ubmVjdG9yKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8aHIgc3R5bGU9e3sgbWFyZ2luOiAnMnJlbScgfX0gLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmcicsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJzMwcmVtJyxcclxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyhjb25uZWN0b3JzQnlOYW1lKS5tYXAobmFtZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q29ubmVjdG9yID0gY29ubmVjdG9yc0J5TmFtZVtuYW1lXVxyXG4gICAgICAgICAgY29uc3QgYWN0aXZhdGluZyA9IGN1cnJlbnRDb25uZWN0b3IgPT09IGFjdGl2YXRpbmdDb25uZWN0b3JcclxuICAgICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IGN1cnJlbnRDb25uZWN0b3IgPT09IGNvbm5lY3RvclxyXG4gICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAhdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IgfHwgY29ubmVjdGVkIHx8ICEhZXJyb3JcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYWN0aXZhdGluZyA/ICdvcmFuZ2UnIDogY29ubmVjdGVkID8gJ2dyZWVuJyA6ICd1bnNldCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRpc2FibGVkID8gJ3Vuc2V0JyA6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAga2V5PXtuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFjdGl2YXRpbmdDb25uZWN0b3IoY3VycmVudENvbm5lY3RvcilcclxuICAgICAgICAgICAgICAgIGFjdGl2YXRlKGNvbm5lY3RvcnNCeU5hbWVbbmFtZV0pXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICB0b3A6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMCAwIDFyZW0nXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthY3RpdmF0aW5nICYmIDxTcGlubmVyIGNvbG9yPXsnYmxhY2snfSBzdHlsZT17eyBoZWlnaHQ6ICcyNSUnLCBtYXJnaW5MZWZ0OiAnLTFyZW0nIH19IC8+fVxyXG4gICAgICAgICAgICAgICAge2Nvbm5lY3RlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICDinIVcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgeyhhY3RpdmUgfHwgZXJyb3IpICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMCAwIDFyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVhY3RpdmF0ZSgpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERpc2Nvbm5lY3RcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHshIWVycm9yICYmIDxoNCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJywgbWFyZ2luQm90dG9tOiAnMCcgfX0+e2dldEVycm9yTWVzc2FnZShlcnJvcil9PC9oND59XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcclxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
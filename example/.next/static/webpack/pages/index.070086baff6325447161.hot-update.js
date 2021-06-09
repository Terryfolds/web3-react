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



var _jsxFileName = "C:\\Users\\jesh\\Desktop\\000O1T\\web3-react\\example\\pages\\index.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$();

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

function ChainId() {
  _s();

  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      chainId = _useWeb3React.chainId;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Chain Id"), __jsx("span", {
    role: "img",
    "aria-label": "chain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "\u26D3"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, chainId !== null && chainId !== void 0 ? chainId : ''));
}

_s(ChainId, "reA9FJLirN6bQm5X4sUUozGx1bA=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c = ChainId;

function BlockNumber() {
  _s2();

  var _useWeb3React2 = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      chainId = _useWeb3React2.chainId,
      library = _useWeb3React2.library;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      blockNumber = _React$useState2[0],
      setBlockNumber = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!!library) {
      var stale = false;
      library.getBlockNumber().then(function (blockNumber) {
        if (!stale) {
          setBlockNumber(blockNumber);
        }
      })["catch"](function () {
        if (!stale) {
          setBlockNumber(null);
        }
      });

      var updateBlockNumber = function updateBlockNumber(blockNumber) {
        setBlockNumber(blockNumber);
      };

      library.on('block', updateBlockNumber);
      return function () {
        stale = true;
        library.removeListener('block', updateBlockNumber);
        setBlockNumber(undefined);
      };
    }
  }, [library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, "Block Number"), __jsx("span", {
    role: "img",
    "aria-label": "numbers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, "\uD83D\uDD22"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, blockNumber === null ? 'Error' : blockNumber !== null && blockNumber !== void 0 ? blockNumber : ''));
}

_s2(BlockNumber, "0DoBuqyGtF4sYtNebgbnhkk9wTw=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c2 = BlockNumber;

function Account() {
  _s3();

  var _useWeb3React3 = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      account = _useWeb3React3.account;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, "Account"), __jsx("span", {
    role: "img",
    "aria-label": "robot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, "\uD83E\uDD16"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, account === null ? '-' : account ? "".concat(account.substring(0, 6), "...").concat(account.substring(account.length - 4)) : ''));
}

_s3(Account, "Yw4fkvk9SNw3FxQ8wmZp/p1e7+E=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c3 = Account;

function Balance() {
  _s4();

  var _useWeb3React4 = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      account = _useWeb3React4.account,
      library = _useWeb3React4.library,
      chainId = _useWeb3React4.chainId;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      balance = _React$useState4[0],
      setBalance = _React$useState4[1];

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
      lineNumber: 166,
      columnNumber: 7
    }
  }, "Balance"), __jsx("span", {
    role: "img",
    "aria-label": "gold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, "\uD83D\uDCB0"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, balance === null ? 'Error' : balance ? "\u039E".concat(Object(_ethersproject_units__WEBPACK_IMPORTED_MODULE_8__["formatEther"])(balance)) : ''));
}

_s4(Balance, "M1WVM1XYBvl8/UPoZ+Zp2BzPIno=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c4 = Balance;

function Header() {
  _s5();

  var _useWeb3React5 = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      active = _useWeb3React5.active,
      error = _useWeb3React5.error;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h1", {
    style: {
      margin: '1rem',
      textAlign: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, active ? '🟢' : error ? '🔴' : '🟠'), __jsx("h3", {
    style: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: '1fr min-content 1fr',
      maxWidth: '20rem',
      lineHeight: '2rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, __jsx(ChainId, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }), __jsx(BlockNumber, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }), __jsx(Account, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }), __jsx(Balance, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  })));
}

_s5(Header, "5Wc8Z9LF2TZggKnK8RHaXo3D1Z0=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c5 = Header;

function App() {
  _s6();

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

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      activatingConnector = _React$useState6[0],
      setActivatingConnector = _React$useState6[1];

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
      lineNumber: 220,
      columnNumber: 7
    }
  }), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
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
      lineNumber: 222,
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
        lineNumber: 238,
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
        lineNumber: 253,
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
        lineNumber: 265,
        columnNumber: 32
      }
    }), connected && __jsx("span", {
      role: "img",
      "aria-label": "check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 19
      }
    }, "\u2705")), name);
  }), (active || error) && __jsx("button", {
    style: {
      height: '3rem',
      marginTop: '2rem',
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
      lineNumber: 277,
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
      lineNumber: 293,
      columnNumber: 23
    }
  }, getErrorMessage(error))), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
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
      lineNumber: 298,
      columnNumber: 7
    }
  }));
}

_s6(App, "oVtBozX5lH0j7w1/NhHB2/98yx0=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"], _hooks__WEBPACK_IMPORTED_MODULE_9__["useEagerConnect"], _hooks__WEBPACK_IMPORTED_MODULE_9__["useInactiveListener"]];
});

_c6 = App;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "ChainId");
$RefreshReg$(_c2, "BlockNumber");
$RefreshReg$(_c3, "Account");
$RefreshReg$(_c4, "Balance");
$RefreshReg$(_c5, "Header");
$RefreshReg$(_c6, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNvbm5lY3Rvck5hbWVzIiwiY29ubmVjdG9yc0J5TmFtZSIsIkluamVjdGVkIiwiaW5qZWN0ZWQiLCJnZXRFcnJvck1lc3NhZ2UiLCJlcnJvciIsIk5vRXRoZXJldW1Qcm92aWRlckVycm9yIiwiVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSIsImNvbnNvbGUiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJsaWJyYXJ5IiwiV2ViM1Byb3ZpZGVyIiwicG9sbGluZ0ludGVydmFsIiwiQ2hhaW5JZCIsInVzZVdlYjNSZWFjdCIsImNoYWluSWQiLCJCbG9ja051bWJlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJibG9ja051bWJlciIsInNldEJsb2NrTnVtYmVyIiwidXNlRWZmZWN0Iiwic3RhbGUiLCJnZXRCbG9ja051bWJlciIsInRoZW4iLCJ1cGRhdGVCbG9ja051bWJlciIsIm9uIiwicmVtb3ZlTGlzdGVuZXIiLCJ1bmRlZmluZWQiLCJBY2NvdW50IiwiYWNjb3VudCIsInN1YnN0cmluZyIsImxlbmd0aCIsIkJhbGFuY2UiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImdldEJhbGFuY2UiLCJmb3JtYXRFdGhlciIsIkhlYWRlciIsImFjdGl2ZSIsIm1hcmdpbiIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1heFdpZHRoIiwibGluZUhlaWdodCIsIkFwcCIsImNvbnRleHQiLCJjb25uZWN0b3IiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJhY3RpdmF0aW5nQ29ubmVjdG9yIiwic2V0QWN0aXZhdGluZ0Nvbm5lY3RvciIsInRyaWVkRWFnZXIiLCJ1c2VFYWdlckNvbm5lY3QiLCJ1c2VJbmFjdGl2ZUxpc3RlbmVyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm5hbWUiLCJjdXJyZW50Q29ubmVjdG9yIiwiYWN0aXZhdGluZyIsImNvbm5lY3RlZCIsImRpc2FibGVkIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJjdXJzb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtJQUVLQSxjOztXQUFBQSxjO0FBQUFBLGdCO0dBQUFBLGMsS0FBQUEsYzs7QUFJTCxJQUFNQyxnQkFBNEQsR0FBRyw4RkFDbEVELGNBQWMsQ0FBQ0UsUUFEZ0QsRUFDckNDLHFEQURxQyxDQUFsRTs7QUFJQSxTQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUF1QztBQUNyQyxNQUFJQSxLQUFLLFlBQVlDLHNGQUFyQixFQUE4QztBQUM1QyxXQUFPLDZHQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlELEtBQUssWUFBWUUsd0VBQXJCLEVBQThDO0FBQ25ELFdBQU8sNkNBQVA7QUFDRCxHQUZNLE1BRUEsSUFDTEYsS0FBSyxZQUFZRyx1RkFBakIsSUFDQUgsS0FBSyxZQUFZSSw0RkFEakIsSUFFQUosS0FBSyxZQUFZSyxvRkFIWixFQUlMO0FBQ0EsV0FBTyxnRUFBUDtBQUNELEdBTk0sTUFNQTtBQUNMQyxXQUFPLENBQUNOLEtBQVIsQ0FBY0EsS0FBZDtBQUNBLFdBQU8sZ0VBQVA7QUFDRDtBQUNGOztBQUVELFNBQVNPLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQWlEO0FBQy9DLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxxRUFBSixDQUFpQkYsUUFBakIsQ0FBaEI7QUFDQUMsU0FB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RSxZQUFNLEVBQUUsTUFESDtBQUVMVSxlQUFTLEVBQUUsTUFGTjtBQUdMVCxrQkFBWSxFQUFFLE1BSFQ7QUFJTEMsaUJBQVcsRUFBRSxLQUpSO0FBS0xDLFlBQU0sRUFBRTtBQUxILEtBRFQ7QUFRRSxXQUFPLEVBQUUsbUJBQU07QUFDYmpCLGdCQUFVO0FBQ1gsS0FWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXZETixFQXVFSyxDQUFDLENBQUNsRCxLQUFGLElBQVc7QUFBSSxTQUFLLEVBQUU7QUFBRTBFLGVBQVMsRUFBRSxNQUFiO0FBQXFCQyxrQkFBWSxFQUFFO0FBQW5DLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzRDVFLGVBQWUsQ0FBQ0MsS0FBRCxDQUFyRSxDQXZFaEIsQ0FIRixFQTZFRTtBQUFJLFNBQUssRUFBRTtBQUFFdUMsWUFBTSxFQUFFO0FBQVYsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0VGLEVBK0VFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xFLGFBQU8sRUFBRSxNQURKO0FBRUxDLGFBQU8sRUFBRSxNQUZKO0FBR0xDLHlCQUFtQixFQUFFLGFBSGhCO0FBSUxDLGNBQVEsRUFBRSxPQUpMO0FBS0xMLFlBQU0sRUFBRTtBQUxILEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9FRixDQURGO0FBNEZEOztJQTlHUU8sRztVQUNTakMsNkQsRUFZR3lDLHNELEVBR25CQywwRDs7O01BaEJPVCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA3MDA4NmJhZmY2MzI1NDQ3MTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IHtcclxuICBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcixcclxuICBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWRcclxufSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSB9IGZyb20gJ0B3ZWIzLXJlYWN0L2ZyYW1lLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJ1xyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3VuaXRzJ1xyXG5cclxuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0LCB1c2VJbmFjdGl2ZUxpc3RlbmVyIH0gZnJvbSAnLi4vaG9va3MnXHJcbmltcG9ydCB7XHJcbiAgaW5qZWN0ZWRcclxufSBmcm9tICcuLi9jb25uZWN0b3JzJ1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TcGlubmVyJ1xyXG5cclxuZW51bSBDb25uZWN0b3JOYW1lcyB7XHJcbiAgSW5qZWN0ZWQgPSAnQ29ubmVjdCBXYWxsZXQnXHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3RvcnNCeU5hbWU6IHsgW2Nvbm5lY3Rvck5hbWUgaW4gQ29ubmVjdG9yTmFtZXNdOiBhbnkgfSA9IHtcclxuICBbQ29ubmVjdG9yTmFtZXMuSW5qZWN0ZWRdOiBpbmplY3RlZFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoZXJyb3I6IEVycm9yKSB7XHJcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IpIHtcclxuICAgIHJldHVybiAnTm8gRXRoZXJldW0gYnJvd3NlciBleHRlbnNpb24gZGV0ZWN0ZWQsIGluc3RhbGwgTWV0YU1hc2sgb24gZGVza3RvcCBvciB2aXNpdCBmcm9tIGEgZEFwcCBicm93c2VyIG9uIG1vYmlsZS4nXHJcbiAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yKSB7XHJcbiAgICByZXR1cm4gXCJZb3UncmUgY29ubmVjdGVkIHRvIGFuIHVuc3VwcG9ydGVkIG5ldHdvcmsuXCJcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCB8fFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IHx8XHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gJ1BsZWFzZSBhdXRob3JpemUgdGhpcyB3ZWJzaXRlIHRvIGFjY2VzcyB5b3VyIEV0aGVyZXVtIGFjY291bnQuJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgcmV0dXJuICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLiBDaGVjayB0aGUgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzLidcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExpYnJhcnkocHJvdmlkZXI6IGFueSk6IFdlYjNQcm92aWRlciB7XHJcbiAgY29uc3QgbGlicmFyeSA9IG5ldyBXZWIzUHJvdmlkZXIocHJvdmlkZXIpXHJcbiAgbGlicmFyeS5wb2xsaW5nSW50ZXJ2YWwgPSAxMjAwMFxyXG4gIHJldHVybiBsaWJyYXJ5XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2ViM1JlYWN0UHJvdmlkZXIgZ2V0TGlicmFyeT17Z2V0TGlicmFyeX0+XHJcbiAgICAgIDxBcHAgLz5cclxuICAgIDwvV2ViM1JlYWN0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDaGFpbklkKCkge1xyXG4gIGNvbnN0IHsgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkNoYWluIElkPC9zcGFuPlxyXG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImNoYWluXCI+XHJcbiAgICAgICAg4puTXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+e2NoYWluSWQgPz8gJyd9PC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBCbG9ja051bWJlcigpIHtcclxuICBjb25zdCB7IGNoYWluSWQsIGxpYnJhcnkgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIGNvbnN0IFtibG9ja051bWJlciwgc2V0QmxvY2tOdW1iZXJdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpOiBhbnkgPT4ge1xyXG4gICAgaWYgKCEhbGlicmFyeSkge1xyXG4gICAgICBsZXQgc3RhbGUgPSBmYWxzZVxyXG5cclxuICAgICAgbGlicmFyeVxyXG4gICAgICAgIC5nZXRCbG9ja051bWJlcigpXHJcbiAgICAgICAgLnRoZW4oKGJsb2NrTnVtYmVyOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmxvY2tOdW1iZXIoYmxvY2tOdW1iZXIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCbG9ja051bWJlcihudWxsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICBjb25zdCB1cGRhdGVCbG9ja051bWJlciA9IChibG9ja051bWJlcjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0QmxvY2tOdW1iZXIoYmxvY2tOdW1iZXIpXHJcbiAgICAgIH1cclxuICAgICAgbGlicmFyeS5vbignYmxvY2snLCB1cGRhdGVCbG9ja051bWJlcilcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgc3RhbGUgPSB0cnVlXHJcbiAgICAgICAgbGlicmFyeS5yZW1vdmVMaXN0ZW5lcignYmxvY2snLCB1cGRhdGVCbG9ja051bWJlcilcclxuICAgICAgICBzZXRCbG9ja051bWJlcih1bmRlZmluZWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbbGlicmFyeSwgY2hhaW5JZF0pIC8vIGVuc3VyZXMgcmVmcmVzaCBpZiByZWZlcmVudGlhbCBpZGVudGl0eSBvZiBsaWJyYXJ5IGRvZXNuJ3QgY2hhbmdlIGFjcm9zcyBjaGFpbklkc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+QmxvY2sgTnVtYmVyPC9zcGFuPlxyXG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cIm51bWJlcnNcIj5cclxuICAgICAgICDwn5SiXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+e2Jsb2NrTnVtYmVyID09PSBudWxsID8gJ0Vycm9yJyA6IGJsb2NrTnVtYmVyID8/ICcnfTwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQWNjb3VudCgpIHtcclxuICBjb25zdCB7IGFjY291bnQgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5BY2NvdW50PC9zcGFuPlxyXG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cInJvYm90XCI+XHJcbiAgICAgICAg8J+kllxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHthY2NvdW50ID09PSBudWxsXHJcbiAgICAgICAgICA/ICctJ1xyXG4gICAgICAgICAgOiBhY2NvdW50XHJcbiAgICAgICAgICA/IGAke2FjY291bnQuc3Vic3RyaW5nKDAsIDYpfS4uLiR7YWNjb3VudC5zdWJzdHJpbmcoYWNjb3VudC5sZW5ndGggLSA0KX1gXHJcbiAgICAgICAgICA6ICcnfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJhbGFuY2UoKSB7XHJcbiAgY29uc3QgeyBhY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSBSZWFjdC51c2VTdGF0ZSgpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpOiBhbnkgPT4ge1xyXG4gICAgaWYgKCEhYWNjb3VudCAmJiAhIWxpYnJhcnkpIHtcclxuICAgICAgbGV0IHN0YWxlID0gZmFsc2VcclxuXHJcbiAgICAgIGxpYnJhcnlcclxuICAgICAgICAuZ2V0QmFsYW5jZShhY2NvdW50KVxyXG4gICAgICAgIC50aGVuKChiYWxhbmNlOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmFsYW5jZShudWxsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHN0YWxlID0gdHJ1ZVxyXG4gICAgICAgIHNldEJhbGFuY2UodW5kZWZpbmVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2FjY291bnQsIGxpYnJhcnksIGNoYWluSWRdKSAvLyBlbnN1cmVzIHJlZnJlc2ggaWYgcmVmZXJlbnRpYWwgaWRlbnRpdHkgb2YgbGlicmFyeSBkb2Vzbid0IGNoYW5nZSBhY3Jvc3MgY2hhaW5JZHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkJhbGFuY2U8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiZ29sZFwiPlxyXG4gICAgICAgIPCfkrBcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj57YmFsYW5jZSA9PT0gbnVsbCA/ICdFcnJvcicgOiBiYWxhbmNlID8gYM6eJHtmb3JtYXRFdGhlcihiYWxhbmNlKX1gIDogJyd9PC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgeyBhY3RpdmUsIGVycm9yIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbjogJzFyZW0nLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+e2FjdGl2ZSA/ICfwn5+iJyA6IGVycm9yID8gJ/CflLQnIDogJ/Cfn6AnfTwvaDE+XHJcbiAgICAgIDxoM1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIG1pbi1jb250ZW50IDFmcicsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcclxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICcycmVtJyxcclxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDaGFpbklkIC8+XHJcbiAgICAgICAgPEJsb2NrTnVtYmVyIC8+XHJcbiAgICAgICAgPEFjY291bnQgLz5cclxuICAgICAgICA8QmFsYW5jZSAvPlxyXG4gICAgICA8L2gzPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZVdlYjNSZWFjdDxXZWIzUHJvdmlkZXI+KClcclxuICBjb25zdCB7IGNvbm5lY3RvciwgbGlicmFyeSwgY2hhaW5JZCwgYWNjb3VudCwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIGFjdGl2ZSwgZXJyb3IgfSA9IGNvbnRleHRcclxuXHJcbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIHJlY29nbml6ZSB0aGUgY29ubmVjdG9yIGN1cnJlbnRseSBiZWluZyBhY3RpdmF0ZWRcclxuICBjb25zdCBbYWN0aXZhdGluZ0Nvbm5lY3Rvciwgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcl0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KClcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGl2YXRpbmdDb25uZWN0b3IgJiYgYWN0aXZhdGluZ0Nvbm5lY3RvciA9PT0gY29ubmVjdG9yKSB7XHJcbiAgICAgIHNldEFjdGl2YXRpbmdDb25uZWN0b3IodW5kZWZpbmVkKVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmF0aW5nQ29ubmVjdG9yLCBjb25uZWN0b3JdKVxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gZWFnZXJseSBjb25uZWN0IHRvIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzIGFuZCBoYXMgZ3JhbnRlZCBhY2Nlc3MgYWxyZWFkeVxyXG4gIGNvbnN0IHRyaWVkRWFnZXIgPSB1c2VFYWdlckNvbm5lY3QoKVxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gY29ubmVjdCBpbiByZWFjdGlvbiB0byBjZXJ0YWluIGV2ZW50cyBvbiB0aGUgaW5qZWN0ZWQgZXRoZXJldW0gcHJvdmlkZXIsIGlmIGl0IGV4aXN0c1xyXG4gIHVzZUluYWN0aXZlTGlzdGVuZXIoIXRyaWVkRWFnZXIgfHwgISFhY3RpdmF0aW5nQ29ubmVjdG9yKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8aHIgc3R5bGU9e3sgbWFyZ2luOiAnMnJlbScgfX0gLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmcicsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJzMwcmVtJyxcclxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyhjb25uZWN0b3JzQnlOYW1lKS5tYXAobmFtZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q29ubmVjdG9yID0gY29ubmVjdG9yc0J5TmFtZVtuYW1lXVxyXG4gICAgICAgICAgY29uc3QgYWN0aXZhdGluZyA9IGN1cnJlbnRDb25uZWN0b3IgPT09IGFjdGl2YXRpbmdDb25uZWN0b3JcclxuICAgICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IGN1cnJlbnRDb25uZWN0b3IgPT09IGNvbm5lY3RvclxyXG4gICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAhdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IgfHwgY29ubmVjdGVkIHx8ICEhZXJyb3JcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYWN0aXZhdGluZyA/ICdvcmFuZ2UnIDogY29ubmVjdGVkID8gJ2dyZWVuJyA6ICd1bnNldCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRpc2FibGVkID8gJ3Vuc2V0JyA6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAga2V5PXtuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFjdGl2YXRpbmdDb25uZWN0b3IoY3VycmVudENvbm5lY3RvcilcclxuICAgICAgICAgICAgICAgIGFjdGl2YXRlKGNvbm5lY3RvcnNCeU5hbWVbbmFtZV0pXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICB0b3A6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMCAwIDFyZW0nXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthY3RpdmF0aW5nICYmIDxTcGlubmVyIGNvbG9yPXsnYmxhY2snfSBzdHlsZT17eyBoZWlnaHQ6ICcyNSUnLCBtYXJnaW5MZWZ0OiAnLTFyZW0nIH19IC8+fVxyXG4gICAgICAgICAgICAgICAge2Nvbm5lY3RlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICDinIVcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgeyhhY3RpdmUgfHwgZXJyb3IpICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzJyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVhY3RpdmF0ZSgpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERpc2Nvbm5lY3RcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHshIWVycm9yICYmIDxoNCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJywgbWFyZ2luQm90dG9tOiAnMCcgfX0+e2dldEVycm9yTWVzc2FnZShlcnJvcil9PC9oND59XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcclxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
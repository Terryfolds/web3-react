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
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Chain Id"), __jsx("span", {
    role: "img",
    "aria-label": "chain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, "\u26D3"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 119,
      columnNumber: 7
    }
  }, "Block Number"), __jsx("span", {
    role: "img",
    "aria-label": "numbers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, "\uD83D\uDD22"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 133,
      columnNumber: 7
    }
  }, "Account"), __jsx("span", {
    role: "img",
    "aria-label": "robot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, "\uD83E\uDD16"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 178,
      columnNumber: 7
    }
  }, "Balance"), __jsx("span", {
    role: "img",
    "aria-label": "gold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, "\uD83D\uDCB0"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
      lineNumber: 192,
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
      lineNumber: 193,
      columnNumber: 7
    }
  }, __jsx(ChainId, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }
  }), __jsx(BlockNumber, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }
  }), __jsx(Account, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }), __jsx(Balance, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
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
      lineNumber: 232,
      columnNumber: 7
    }
  }), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: '1fr 1fr',
      maxWidth: '20rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
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
        lineNumber: 250,
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
        lineNumber: 265,
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
        lineNumber: 277,
        columnNumber: 32
      }
    }), connected && __jsx("span", {
      role: "img",
      "aria-label": "check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 19
      }
    }, "\u2705")), name);
  })), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 7
    }
  }, (active || error) && __jsx("button", {
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
      lineNumber: 291,
      columnNumber: 11
    }
  }, "Deactivate"), !!error && __jsx("h4", {
    style: {
      marginTop: '1rem',
      marginBottom: '0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 21
    }
  }, getErrorMessage(error))), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
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
      lineNumber: 312,
      columnNumber: 7
    }
  }, !!(library && account) && __jsx("button", {
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      library.getSigner(account).signMessage('👋').then(function (signature) {
        window.alert("Success!\n\n".concat(signature));
      })["catch"](function (error) {
        window.alert('Failure!' + (error && error.message ? "\n\n".concat(error.message) : ''));
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 11
    }
  }, "Sign Message"), !!(connector === connectorsByName[ConnectorNames.Network] && chainId) && __jsx("button", {
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      ;
      connector.changeChainId(chainId === 1 ? 4 : 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 11
    }
  }, "Switch Networks"), connector === connectorsByName[ConnectorNames.WalletConnect] && __jsx("button", {
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      ;
      connector.close();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 11
    }
  }, "Kill WalletConnect Session"), connector === connectorsByName[ConnectorNames.WalletLink] && __jsx("button", {
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      ;
      connector.close();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 11
    }
  }, "Kill WalletLink Session"), connector === connectorsByName[ConnectorNames.Fortmatic] && __jsx("button", {
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      ;
      connector.close();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 11
    }
  }, "Kill Fortmatic Session"), connector === connectorsByName[ConnectorNames.Magic] && __jsx("button", {
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      ;
      connector.close();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 11
    }
  }, "Kill Magic Session"), connector === connectorsByName[ConnectorNames.Portis] && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, chainId !== undefined && __jsx("button", {
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      ;
      connector.changeNetwork(chainId === 1 ? 100 : 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 15
    }
  }, "Switch Networks"), __jsx("button", {
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      ;
      connector.close();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 13
    }
  }, "Kill Portis Session")), connector === connectorsByName[ConnectorNames.Torus] && __jsx("button", {
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      ;
      connector.close();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 11
    }
  }, "Kill Torus Session")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNvbm5lY3Rvck5hbWVzIiwiY29ubmVjdG9yc0J5TmFtZSIsIkluamVjdGVkIiwiaW5qZWN0ZWQiLCJnZXRFcnJvck1lc3NhZ2UiLCJlcnJvciIsIk5vRXRoZXJldW1Qcm92aWRlckVycm9yIiwiVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSIsImNvbnNvbGUiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJsaWJyYXJ5IiwiV2ViM1Byb3ZpZGVyIiwicG9sbGluZ0ludGVydmFsIiwiQ2hhaW5JZCIsInVzZVdlYjNSZWFjdCIsImNoYWluSWQiLCJCbG9ja051bWJlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJibG9ja051bWJlciIsInNldEJsb2NrTnVtYmVyIiwidXNlRWZmZWN0Iiwic3RhbGUiLCJnZXRCbG9ja051bWJlciIsInRoZW4iLCJ1cGRhdGVCbG9ja051bWJlciIsIm9uIiwicmVtb3ZlTGlzdGVuZXIiLCJ1bmRlZmluZWQiLCJBY2NvdW50IiwiYWNjb3VudCIsInN1YnN0cmluZyIsImxlbmd0aCIsIkJhbGFuY2UiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImdldEJhbGFuY2UiLCJmb3JtYXRFdGhlciIsIkhlYWRlciIsImFjdGl2ZSIsIm1hcmdpbiIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1heFdpZHRoIiwibGluZUhlaWdodCIsIkFwcCIsImNvbnRleHQiLCJjb25uZWN0b3IiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJhY3RpdmF0aW5nQ29ubmVjdG9yIiwic2V0QWN0aXZhdGluZ0Nvbm5lY3RvciIsInRyaWVkRWFnZXIiLCJ1c2VFYWdlckNvbm5lY3QiLCJ1c2VJbmFjdGl2ZUxpc3RlbmVyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm5hbWUiLCJjdXJyZW50Q29ubmVjdG9yIiwiYWN0aXZhdGluZyIsImNvbm5lY3RlZCIsImRpc2FibGVkIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJjdXJzb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImdldFNpZ25lciIsInNpZ25NZXNzYWdlIiwic2lnbmF0dXJlIiwid2luZG93IiwiYWxlcnQiLCJtZXNzYWdlIiwiTmV0d29yayIsImNoYW5nZUNoYWluSWQiLCJXYWxsZXRDb25uZWN0IiwiY2xvc2UiLCJXYWxsZXRMaW5rIiwiRm9ydG1hdGljIiwiTWFnaWMiLCJQb3J0aXMiLCJjaGFuZ2VOZXR3b3JrIiwiVG9ydXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWVBO0lBRUtBLGM7O1dBQUFBLGM7QUFBQUEsZ0I7R0FBQUEsYyxLQUFBQSxjOztBQUlMLElBQU1DLGdCQUE0RCxHQUFHLDhGQUNsRUQsY0FBYyxDQUFDRSxRQURnRCxFQUNyQ0MscURBRHFDLENBQWxFOztBQUlBLFNBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQXVDO0FBQ3JDLE1BQUlBLEtBQUssWUFBWUMsc0ZBQXJCLEVBQThDO0FBQzVDLFdBQU8sNkdBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUQsS0FBSyxZQUFZRSx3RUFBckIsRUFBOEM7QUFDbkQsV0FBTyw2Q0FBUDtBQUNELEdBRk0sTUFFQSxJQUNMRixLQUFLLFlBQVlHLHVGQUFqQixJQUNBSCxLQUFLLFlBQVlJLDRGQURqQixJQUVBSixLQUFLLFlBQVlLLG9G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MEQ7OztNQWhCT1QsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOTY4ODczYTAxMjMwZmQ0OWU1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IsXHJcbiAgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkXHJcbn0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWUgfSBmcm9tICdAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycydcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cydcclxuXHJcbmltcG9ydCB7IHVzZUVhZ2VyQ29ubmVjdCwgdXNlSW5hY3RpdmVMaXN0ZW5lciB9IGZyb20gJy4uL2hvb2tzJ1xyXG5pbXBvcnQge1xyXG4gIGluamVjdGVkLFxyXG4gIG5ldHdvcmssXHJcbiAgd2FsbGV0Y29ubmVjdCxcclxuICB3YWxsZXRsaW5rLFxyXG4gIGxlZGdlcixcclxuICB0cmV6b3IsXHJcbiAgbGF0dGljZSxcclxuICBmcmFtZSxcclxuICBhdXRoZXJldW0sXHJcbiAgZm9ydG1hdGljLFxyXG4gIG1hZ2ljLFxyXG4gIHBvcnRpcyxcclxuICB0b3J1c1xyXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMnXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInXHJcblxyXG5lbnVtIENvbm5lY3Rvck5hbWVzIHtcclxuICBJbmplY3RlZCA9ICdDb25uZWN0IFdhbGxldCdcclxufVxyXG5cclxuY29uc3QgY29ubmVjdG9yc0J5TmFtZTogeyBbY29ubmVjdG9yTmFtZSBpbiBDb25uZWN0b3JOYW1lc106IGFueSB9ID0ge1xyXG4gIFtDb25uZWN0b3JOYW1lcy5JbmplY3RlZF06IGluamVjdGVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvcjogRXJyb3IpIHtcclxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcikge1xyXG4gICAgcmV0dXJuICdObyBFdGhlcmV1bSBicm93c2VyIGV4dGVuc2lvbiBkZXRlY3RlZCwgaW5zdGFsbCBNZXRhTWFzayBvbiBkZXNrdG9wIG9yIHZpc2l0IGZyb20gYSBkQXBwIGJyb3dzZXIgb24gbW9iaWxlLidcclxuICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IpIHtcclxuICAgIHJldHVybiBcIllvdSdyZSBjb25uZWN0ZWQgdG8gYW4gdW5zdXBwb3J0ZWQgbmV0d29yay5cIlxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkIHx8XHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWVcclxuICApIHtcclxuICAgIHJldHVybiAnUGxlYXNlIGF1dGhvcml6ZSB0aGlzIHdlYnNpdGUgdG8gYWNjZXNzIHlvdXIgRXRoZXJldW0gYWNjb3VudC4nXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICByZXR1cm4gJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuIENoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMuJ1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGlicmFyeShwcm92aWRlcjogYW55KTogV2ViM1Byb3ZpZGVyIHtcclxuICBjb25zdCBsaWJyYXJ5ID0gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcilcclxuICBsaWJyYXJ5LnBvbGxpbmdJbnRlcnZhbCA9IDEyMDAwXHJcbiAgcmV0dXJuIGxpYnJhcnlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXZWIzUmVhY3RQcm92aWRlciBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cclxuICAgICAgPEFwcCAvPlxyXG4gICAgPC9XZWIzUmVhY3RQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENoYWluSWQoKSB7XHJcbiAgY29uc3QgeyBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+Q2hhaW4gSWQ8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY2hhaW5cIj5cclxuICAgICAgICDim5NcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj57Y2hhaW5JZCA/PyAnJ308L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJsb2NrTnVtYmVyKCkge1xyXG4gIGNvbnN0IHsgY2hhaW5JZCwgbGlicmFyeSB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgY29uc3QgW2Jsb2NrTnVtYmVyLCBzZXRCbG9ja051bWJlcl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KClcclxuICBSZWFjdC51c2VFZmZlY3QoKCk6IGFueSA9PiB7XHJcbiAgICBpZiAoISFsaWJyYXJ5KSB7XHJcbiAgICAgIGxldCBzdGFsZSA9IGZhbHNlXHJcblxyXG4gICAgICBsaWJyYXJ5XHJcbiAgICAgICAgLmdldEJsb2NrTnVtYmVyKClcclxuICAgICAgICAudGhlbigoYmxvY2tOdW1iZXI6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCbG9ja051bWJlcihibG9ja051bWJlcilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJsb2NrTnVtYmVyKG51bGwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZUJsb2NrTnVtYmVyID0gKGJsb2NrTnVtYmVyOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRCbG9ja051bWJlcihibG9ja051bWJlcilcclxuICAgICAgfVxyXG4gICAgICBsaWJyYXJ5Lm9uKCdibG9jaycsIHVwZGF0ZUJsb2NrTnVtYmVyKVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzdGFsZSA9IHRydWVcclxuICAgICAgICBsaWJyYXJ5LnJlbW92ZUxpc3RlbmVyKCdibG9jaycsIHVwZGF0ZUJsb2NrTnVtYmVyKVxyXG4gICAgICAgIHNldEJsb2NrTnVtYmVyKHVuZGVmaW5lZClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtsaWJyYXJ5LCBjaGFpbklkXSkgLy8gZW5zdXJlcyByZWZyZXNoIGlmIHJlZmVyZW50aWFsIGlkZW50aXR5IG9mIGxpYnJhcnkgZG9lc24ndCBjaGFuZ2UgYWNyb3NzIGNoYWluSWRzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5CbG9jayBOdW1iZXI8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwibnVtYmVyc1wiPlxyXG4gICAgICAgIPCflKJcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj57YmxvY2tOdW1iZXIgPT09IG51bGwgPyAnRXJyb3InIDogYmxvY2tOdW1iZXIgPz8gJyd9PC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBY2NvdW50KCkge1xyXG4gIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkFjY291bnQ8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwicm9ib3RcIj5cclxuICAgICAgICDwn6SWXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge2FjY291bnQgPT09IG51bGxcclxuICAgICAgICAgID8gJy0nXHJcbiAgICAgICAgICA6IGFjY291bnRcclxuICAgICAgICAgID8gYCR7YWNjb3VudC5zdWJzdHJpbmcoMCwgNil9Li4uJHthY2NvdW50LnN1YnN0cmluZyhhY2NvdW50Lmxlbmd0aCAtIDQpfWBcclxuICAgICAgICAgIDogJyd9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQmFsYW5jZSgpIHtcclxuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnksIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuICBSZWFjdC51c2VFZmZlY3QoKCk6IGFueSA9PiB7XHJcbiAgICBpZiAoISFhY2NvdW50ICYmICEhbGlicmFyeSkge1xyXG4gICAgICBsZXQgc3RhbGUgPSBmYWxzZVxyXG5cclxuICAgICAgbGlicmFyeVxyXG4gICAgICAgIC5nZXRCYWxhbmNlKGFjY291bnQpXHJcbiAgICAgICAgLnRoZW4oKGJhbGFuY2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCYWxhbmNlKGJhbGFuY2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCYWxhbmNlKG51bGwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgc3RhbGUgPSB0cnVlXHJcbiAgICAgICAgc2V0QmFsYW5jZSh1bmRlZmluZWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZF0pIC8vIGVuc3VyZXMgcmVmcmVzaCBpZiByZWZlcmVudGlhbCBpZGVudGl0eSBvZiBsaWJyYXJ5IGRvZXNuJ3QgY2hhbmdlIGFjcm9zcyBjaGFpbklkc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+QmFsYW5jZTwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJnb2xkXCI+XHJcbiAgICAgICAg8J+SsFxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntiYWxhbmNlID09PSBudWxsID8gJ0Vycm9yJyA6IGJhbGFuY2UgPyBgzp4ke2Zvcm1hdEV0aGVyKGJhbGFuY2UpfWAgOiAnJ308L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCB7IGFjdGl2ZSwgZXJyb3IgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luOiAnMXJlbScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT57YWN0aXZlID8gJ/Cfn6InIDogZXJyb3IgPyAn8J+UtCcgOiAn8J+foCd9PC9oMT5cclxuICAgICAgPGgzXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgbWluLWNvbnRlbnQgMWZyJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnMjByZW0nLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogJzJyZW0nLFxyXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENoYWluSWQgLz5cclxuICAgICAgICA8QmxvY2tOdW1iZXIgLz5cclxuICAgICAgICA8QWNjb3VudCAvPlxyXG4gICAgICAgIDxCYWxhbmNlIC8+XHJcbiAgICAgIDwvaDM+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlV2ViM1JlYWN0PFdlYjNQcm92aWRlcj4oKVxyXG4gIGNvbnN0IHsgY29ubmVjdG9yLCBsaWJyYXJ5LCBjaGFpbklkLCBhY2NvdW50LCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSwgYWN0aXZlLCBlcnJvciB9ID0gY29udGV4dFxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gcmVjb2duaXplIHRoZSBjb25uZWN0b3IgY3VycmVudGx5IGJlaW5nIGFjdGl2YXRlZFxyXG4gIGNvbnN0IFthY3RpdmF0aW5nQ29ubmVjdG9yLCBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZhdGluZ0Nvbm5lY3RvciAmJiBhY3RpdmF0aW5nQ29ubmVjdG9yID09PSBjb25uZWN0b3IpIHtcclxuICAgICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcih1bmRlZmluZWQpXHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2YXRpbmdDb25uZWN0b3IsIGNvbm5lY3Rvcl0pXHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBlYWdlcmx5IGNvbm5lY3QgdG8gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHMgYW5kIGhhcyBncmFudGVkIGFjY2VzcyBhbHJlYWR5XHJcbiAgY29uc3QgdHJpZWRFYWdlciA9IHVzZUVhZ2VyQ29ubmVjdCgpXHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBjb25uZWN0IGluIHJlYWN0aW9uIHRvIGNlcnRhaW4gZXZlbnRzIG9uIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzXHJcbiAgdXNlSW5hY3RpdmVMaXN0ZW5lcighdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnMjByZW0nLFxyXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge09iamVjdC5rZXlzKGNvbm5lY3RvcnNCeU5hbWUpLm1hcChuYW1lID0+IHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25uZWN0b3IgPSBjb25uZWN0b3JzQnlOYW1lW25hbWVdXHJcbiAgICAgICAgICBjb25zdCBhY3RpdmF0aW5nID0gY3VycmVudENvbm5lY3RvciA9PT0gYWN0aXZhdGluZ0Nvbm5lY3RvclxyXG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkID0gY3VycmVudENvbm5lY3RvciA9PT0gY29ubmVjdG9yXHJcbiAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICF0cmllZEVhZ2VyIHx8ICEhYWN0aXZhdGluZ0Nvbm5lY3RvciB8fCBjb25uZWN0ZWQgfHwgISFlcnJvclxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3RpdmF0aW5nID8gJ29yYW5nZScgOiBjb25uZWN0ZWQgPyAnZ3JlZW4nIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGlzYWJsZWQgPyAndW5zZXQnIDogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICBrZXk9e25hbWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3RvcihjdXJyZW50Q29ubmVjdG9yKVxyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGUoY29ubmVjdG9yc0J5TmFtZVtuYW1lXSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAwIDAgMXJlbSdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2FjdGl2YXRpbmcgJiYgPFNwaW5uZXIgY29sb3I9eydibGFjayd9IHN0eWxlPXt7IGhlaWdodDogJzI1JScsIG1hcmdpbkxlZnQ6ICctMXJlbScgfX0gLz59XHJcbiAgICAgICAgICAgICAgICB7Y29ubmVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIOKchVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgeyhhY3RpdmUgfHwgZXJyb3IpICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcycmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRlYWN0aXZhdGUoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWFjdGl2YXRlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7ISFlcnJvciAmJiA8aDQgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMXJlbScsIG1hcmdpbkJvdHRvbTogJzAnIH19PntnZXRFcnJvck1lc3NhZ2UoZXJyb3IpfTwvaDQ+fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7ISEobGlicmFyeSAmJiBhY2NvdW50KSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxpYnJhcnlcclxuICAgICAgICAgICAgICAgIC5nZXRTaWduZXIoYWNjb3VudClcclxuICAgICAgICAgICAgICAgIC5zaWduTWVzc2FnZSgn8J+RiycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoc2lnbmF0dXJlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KGBTdWNjZXNzIVxcblxcbiR7c2lnbmF0dXJlfWApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnRmFpbHVyZSEnICsgKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBgXFxuXFxuJHtlcnJvci5tZXNzYWdlfWAgOiAnJykpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaWduIE1lc3NhZ2VcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyEhKGNvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5OZXR3b3JrXSAmJiBjaGFpbklkKSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2hhbmdlQ2hhaW5JZChjaGFpbklkID09PSAxID8gNCA6IDEpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN3aXRjaCBOZXR3b3Jrc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLldhbGxldENvbm5lY3RdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgV2FsbGV0Q29ubmVjdCBTZXNzaW9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuV2FsbGV0TGlua10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBXYWxsZXRMaW5rIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5Gb3J0bWF0aWNdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgRm9ydG1hdGljIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5NYWdpY10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBNYWdpYyBTZXNzaW9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuUG9ydGlzXSAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y2hhaW5JZCAhPT0gdW5kZWZpbmVkICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNoYW5nZU5ldHdvcmsoY2hhaW5JZCA9PT0gMSA/IDEwMCA6IDEpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN3aXRjaCBOZXR3b3Jrc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEtpbGwgUG9ydGlzIFNlc3Npb25cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuVG9ydXNdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgVG9ydXMgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
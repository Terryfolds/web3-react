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
      maxWidth: '20rem',
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
  })), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
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
      lineNumber: 279,
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
      lineNumber: 295,
      columnNumber: 21
    }
  }, getErrorMessage(error))), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
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
      lineNumber: 300,
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
      lineNumber: 310,
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
      lineNumber: 332,
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
      lineNumber: 346,
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
      lineNumber: 360,
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
      lineNumber: 374,
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
      lineNumber: 388,
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
      lineNumber: 404,
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
      lineNumber: 417,
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
      lineNumber: 432,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNvbm5lY3Rvck5hbWVzIiwiY29ubmVjdG9yc0J5TmFtZSIsIkluamVjdGVkIiwiaW5qZWN0ZWQiLCJnZXRFcnJvck1lc3NhZ2UiLCJlcnJvciIsIk5vRXRoZXJldW1Qcm92aWRlckVycm9yIiwiVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSIsImNvbnNvbGUiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJsaWJyYXJ5IiwiV2ViM1Byb3ZpZGVyIiwicG9sbGluZ0ludGVydmFsIiwiQ2hhaW5JZCIsInVzZVdlYjNSZWFjdCIsImNoYWluSWQiLCJCbG9ja051bWJlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJibG9ja051bWJlciIsInNldEJsb2NrTnVtYmVyIiwidXNlRWZmZWN0Iiwic3RhbGUiLCJnZXRCbG9ja051bWJlciIsInRoZW4iLCJ1cGRhdGVCbG9ja051bWJlciIsIm9uIiwicmVtb3ZlTGlzdGVuZXIiLCJ1bmRlZmluZWQiLCJBY2NvdW50IiwiYWNjb3VudCIsInN1YnN0cmluZyIsImxlbmd0aCIsIkJhbGFuY2UiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImdldEJhbGFuY2UiLCJmb3JtYXRFdGhlciIsIkhlYWRlciIsImFjdGl2ZSIsIm1hcmdpbiIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1heFdpZHRoIiwibGluZUhlaWdodCIsIkFwcCIsImNvbnRleHQiLCJjb25uZWN0b3IiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJhY3RpdmF0aW5nQ29ubmVjdG9yIiwic2V0QWN0aXZhdGluZ0Nvbm5lY3RvciIsInRyaWVkRWFnZXIiLCJ1c2VFYWdlckNvbm5lY3QiLCJ1c2VJbmFjdGl2ZUxpc3RlbmVyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm5hbWUiLCJjdXJyZW50Q29ubmVjdG9yIiwiYWN0aXZhdGluZyIsImNvbm5lY3RlZCIsImRpc2FibGVkIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJjdXJzb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImdldFNpZ25lciIsInNpZ25NZXNzYWdlIiwic2lnbmF0dXJlIiwid2luZG93IiwiYWxlcnQiLCJtZXNzYWdlIiwiTmV0d29yayIsImNoYW5nZUNoYWluSWQiLCJXYWxsZXRDb25uZWN0IiwiY2xvc2UiLCJXYWxsZXRMaW5rIiwiRm9ydG1hdGljIiwiTWFnaWMiLCJQb3J0aXMiLCJjaGFuZ2VOZXR3b3JrIiwiVG9ydXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0lBRUtBLGM7O1dBQUFBLGM7QUFBQUEsZ0I7R0FBQUEsYyxLQUFBQSxjOztBQUlMLElBQU1DLGdCQUE0RCxHQUFHLDhGQUNsRUQsY0FBYyxDQUFDRSxRQURnRCxFQUNyQ0MscURBRHFDLENBQWxFOztBQUlBLFNBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQXVDO0FBQ3JDLE1BQUlBLEtBQUssWUFBWUMsc0ZBQXJCLEVBQThDO0FBQzVDLFdBQU8sNkdBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUQsS0FBSyxZQUFZRSx3RUFBckIsRUFBOEM7QUFDbkQsV0FBTyw2Q0FBUDtBQUNELEdBRk0sTUFFQSxJQUNMRixLQUFLLFlBQVlHLHVGQUFqQixJQUNBSCxLQUFLLFlBQVlJLDRGQURqQixJQUVBSixLQUFLLFlBQVlLLG9G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MEQ7OztNQWhCT1QsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YTA0YWY1NTZlNjYyNTZmMDljYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IsXHJcbiAgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkXHJcbn0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWUgfSBmcm9tICdAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycydcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cydcclxuXHJcbmltcG9ydCB7IHVzZUVhZ2VyQ29ubmVjdCwgdXNlSW5hY3RpdmVMaXN0ZW5lciB9IGZyb20gJy4uL2hvb2tzJ1xyXG5pbXBvcnQge1xyXG4gIGluamVjdGVkXHJcbn0gZnJvbSAnLi4vY29ubmVjdG9ycydcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcclxuXHJcbmVudW0gQ29ubmVjdG9yTmFtZXMge1xyXG4gIEluamVjdGVkID0gJ0Nvbm5lY3QgV2FsbGV0J1xyXG59XHJcblxyXG5jb25zdCBjb25uZWN0b3JzQnlOYW1lOiB7IFtjb25uZWN0b3JOYW1lIGluIENvbm5lY3Rvck5hbWVzXTogYW55IH0gPSB7XHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkluamVjdGVkXTogaW5qZWN0ZWRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yOiBFcnJvcikge1xyXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIE5vRXRoZXJldW1Qcm92aWRlckVycm9yKSB7XHJcbiAgICByZXR1cm4gJ05vIEV0aGVyZXVtIGJyb3dzZXIgZXh0ZW5zaW9uIGRldGVjdGVkLCBpbnN0YWxsIE1ldGFNYXNrIG9uIGRlc2t0b3Agb3IgdmlzaXQgZnJvbSBhIGRBcHAgYnJvd3NlciBvbiBtb2JpbGUuJ1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBVbnN1cHBvcnRlZENoYWluSWRFcnJvcikge1xyXG4gICAgcmV0dXJuIFwiWW91J3JlIGNvbm5lY3RlZCB0byBhbiB1bnN1cHBvcnRlZCBuZXR3b3JrLlwiXHJcbiAgfSBlbHNlIGlmIChcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWQgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB8fFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZVxyXG4gICkge1xyXG4gICAgcmV0dXJuICdQbGVhc2UgYXV0aG9yaXplIHRoaXMgd2Vic2l0ZSB0byBhY2Nlc3MgeW91ciBFdGhlcmV1bSBhY2NvdW50LidcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIHJldHVybiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4gQ2hlY2sgdGhlIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlscy4nXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xyXG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxyXG4gIGxpYnJhcnkucG9sbGluZ0ludGVydmFsID0gMTIwMDBcclxuICByZXR1cm4gbGlicmFyeVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxyXG4gICAgICA8QXBwIC8+XHJcbiAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hhaW5JZCgpIHtcclxuICBjb25zdCB7IGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5DaGFpbiBJZDwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjaGFpblwiPlxyXG4gICAgICAgIOKbk1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntjaGFpbklkID8/ICcnfTwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQmxvY2tOdW1iZXIoKSB7XHJcbiAgY29uc3QgeyBjaGFpbklkLCBsaWJyYXJ5IH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICBjb25zdCBbYmxvY2tOdW1iZXIsIHNldEJsb2NrTnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKTogYW55ID0+IHtcclxuICAgIGlmICghIWxpYnJhcnkpIHtcclxuICAgICAgbGV0IHN0YWxlID0gZmFsc2VcclxuXHJcbiAgICAgIGxpYnJhcnlcclxuICAgICAgICAuZ2V0QmxvY2tOdW1iZXIoKVxyXG4gICAgICAgIC50aGVuKChibG9ja051bWJlcjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJsb2NrTnVtYmVyKGJsb2NrTnVtYmVyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmxvY2tOdW1iZXIobnVsbClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgY29uc3QgdXBkYXRlQmxvY2tOdW1iZXIgPSAoYmxvY2tOdW1iZXI6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldEJsb2NrTnVtYmVyKGJsb2NrTnVtYmVyKVxyXG4gICAgICB9XHJcbiAgICAgIGxpYnJhcnkub24oJ2Jsb2NrJywgdXBkYXRlQmxvY2tOdW1iZXIpXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHN0YWxlID0gdHJ1ZVxyXG4gICAgICAgIGxpYnJhcnkucmVtb3ZlTGlzdGVuZXIoJ2Jsb2NrJywgdXBkYXRlQmxvY2tOdW1iZXIpXHJcbiAgICAgICAgc2V0QmxvY2tOdW1iZXIodW5kZWZpbmVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2xpYnJhcnksIGNoYWluSWRdKSAvLyBlbnN1cmVzIHJlZnJlc2ggaWYgcmVmZXJlbnRpYWwgaWRlbnRpdHkgb2YgbGlicmFyeSBkb2Vzbid0IGNoYW5nZSBhY3Jvc3MgY2hhaW5JZHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkJsb2NrIE51bWJlcjwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJudW1iZXJzXCI+XHJcbiAgICAgICAg8J+UolxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntibG9ja051bWJlciA9PT0gbnVsbCA/ICdFcnJvcicgOiBibG9ja051bWJlciA/PyAnJ308L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFjY291bnQoKSB7XHJcbiAgY29uc3QgeyBhY2NvdW50IH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+QWNjb3VudDwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJyb2JvdFwiPlxyXG4gICAgICAgIPCfpJZcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICB7YWNjb3VudCA9PT0gbnVsbFxyXG4gICAgICAgICAgPyAnLSdcclxuICAgICAgICAgIDogYWNjb3VudFxyXG4gICAgICAgICAgPyBgJHthY2NvdW50LnN1YnN0cmluZygwLCA2KX0uLi4ke2FjY291bnQuc3Vic3RyaW5nKGFjY291bnQubGVuZ3RoIC0gNCl9YFxyXG4gICAgICAgICAgOiAnJ31cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBCYWxhbmNlKCkge1xyXG4gIGNvbnN0IHsgYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gUmVhY3QudXNlU3RhdGUoKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKTogYW55ID0+IHtcclxuICAgIGlmICghIWFjY291bnQgJiYgISFsaWJyYXJ5KSB7XHJcbiAgICAgIGxldCBzdGFsZSA9IGZhbHNlXHJcblxyXG4gICAgICBsaWJyYXJ5XHJcbiAgICAgICAgLmdldEJhbGFuY2UoYWNjb3VudClcclxuICAgICAgICAudGhlbigoYmFsYW5jZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJhbGFuY2UoYmFsYW5jZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJhbGFuY2UobnVsbClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzdGFsZSA9IHRydWVcclxuICAgICAgICBzZXRCYWxhbmNlKHVuZGVmaW5lZClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFthY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkXSkgLy8gZW5zdXJlcyByZWZyZXNoIGlmIHJlZmVyZW50aWFsIGlkZW50aXR5IG9mIGxpYnJhcnkgZG9lc24ndCBjaGFuZ2UgYWNyb3NzIGNoYWluSWRzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5CYWxhbmNlPC9zcGFuPlxyXG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImdvbGRcIj5cclxuICAgICAgICDwn5KwXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+e2JhbGFuY2UgPT09IG51bGwgPyAnRXJyb3InIDogYmFsYW5jZSA/IGDOniR7Zm9ybWF0RXRoZXIoYmFsYW5jZSl9YCA6ICcnfTwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46ICcxcmVtJywgdGV4dEFsaWduOiAncmlnaHQnIH19PnthY3RpdmUgPyAn8J+foicgOiBlcnJvciA/ICfwn5S0JyA6ICfwn5+gJ308L2gxPlxyXG4gICAgICA8aDNcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciBtaW4tY29udGVudCAxZnInLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMnJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q2hhaW5JZCAvPlxyXG4gICAgICAgIDxCbG9ja051bWJlciAvPlxyXG4gICAgICAgIDxBY2NvdW50IC8+XHJcbiAgICAgICAgPEJhbGFuY2UgLz5cclxuICAgICAgPC9oMz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VXZWIzUmVhY3Q8V2ViM1Byb3ZpZGVyPigpXHJcbiAgY29uc3QgeyBjb25uZWN0b3IsIGxpYnJhcnksIGNoYWluSWQsIGFjY291bnQsIGFjdGl2YXRlLCBkZWFjdGl2YXRlLCBhY3RpdmUsIGVycm9yIH0gPSBjb250ZXh0XHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byByZWNvZ25pemUgdGhlIGNvbm5lY3RvciBjdXJyZW50bHkgYmVpbmcgYWN0aXZhdGVkXHJcbiAgY29uc3QgW2FjdGl2YXRpbmdDb25uZWN0b3IsIHNldEFjdGl2YXRpbmdDb25uZWN0b3JdID0gUmVhY3QudXNlU3RhdGU8YW55PigpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3RpdmF0aW5nQ29ubmVjdG9yICYmIGFjdGl2YXRpbmdDb25uZWN0b3IgPT09IGNvbm5lY3Rvcikge1xyXG4gICAgICBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yKHVuZGVmaW5lZClcclxuICAgIH1cclxuICB9LCBbYWN0aXZhdGluZ0Nvbm5lY3RvciwgY29ubmVjdG9yXSlcclxuXHJcbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIGVhZ2VybHkgY29ubmVjdCB0byB0aGUgaW5qZWN0ZWQgZXRoZXJldW0gcHJvdmlkZXIsIGlmIGl0IGV4aXN0cyBhbmQgaGFzIGdyYW50ZWQgYWNjZXNzIGFscmVhZHlcclxuICBjb25zdCB0cmllZEVhZ2VyID0gdXNlRWFnZXJDb25uZWN0KClcclxuXHJcbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIGNvbm5lY3QgaW4gcmVhY3Rpb24gdG8gY2VydGFpbiBldmVudHMgb24gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHNcclxuICB1c2VJbmFjdGl2ZUxpc3RlbmVyKCF0cmllZEVhZ2VyIHx8ICEhYWN0aXZhdGluZ0Nvbm5lY3RvcilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7T2JqZWN0LmtleXMoY29ubmVjdG9yc0J5TmFtZSkubWFwKG5hbWUgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudENvbm5lY3RvciA9IGNvbm5lY3RvcnNCeU5hbWVbbmFtZV1cclxuICAgICAgICAgIGNvbnN0IGFjdGl2YXRpbmcgPSBjdXJyZW50Q29ubmVjdG9yID09PSBhY3RpdmF0aW5nQ29ubmVjdG9yXHJcbiAgICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBjdXJyZW50Q29ubmVjdG9yID09PSBjb25uZWN0b3JcclxuICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gIXRyaWVkRWFnZXIgfHwgISFhY3RpdmF0aW5nQ29ubmVjdG9yIHx8IGNvbm5lY3RlZCB8fCAhIWVycm9yXHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFjdGl2YXRpbmcgPyAnb3JhbmdlJyA6IGNvbm5lY3RlZCA/ICdncmVlbicgOiAndW5zZXQnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICd1bnNldCcgOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yKGN1cnJlbnRDb25uZWN0b3IpXHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZShjb25uZWN0b3JzQnlOYW1lW25hbWVdKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMCAxcmVtJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZhdGluZyAmJiA8U3Bpbm5lciBjb2xvcj17J2JsYWNrJ30gc3R5bGU9e3sgaGVpZ2h0OiAnMjUlJywgbWFyZ2luTGVmdDogJy0xcmVtJyB9fSAvPn1cclxuICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4pyFXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICB7KGFjdGl2ZSB8fCBlcnJvcikgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogJzJyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGVhY3RpdmF0ZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlYWN0aXZhdGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHshIWVycm9yICYmIDxoNCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJywgbWFyZ2luQm90dG9tOiAnMCcgfX0+e2dldEVycm9yTWVzc2FnZShlcnJvcil9PC9oND59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcclxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHshIShsaWJyYXJ5ICYmIGFjY291bnQpICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGlicmFyeVxyXG4gICAgICAgICAgICAgICAgLmdldFNpZ25lcihhY2NvdW50KVxyXG4gICAgICAgICAgICAgICAgLnNpZ25NZXNzYWdlKCfwn5GLJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChzaWduYXR1cmU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoYFN1Y2Nlc3MhXFxuXFxuJHtzaWduYXR1cmV9YClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdGYWlsdXJlIScgKyAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGBcXG5cXG4ke2Vycm9yLm1lc3NhZ2V9YCA6ICcnKSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNpZ24gTWVzc2FnZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ISEoY29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLk5ldHdvcmtdICYmIGNoYWluSWQpICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jaGFuZ2VDaGFpbklkKGNoYWluSWQgPT09IDEgPyA0IDogMSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3dpdGNoIE5ldHdvcmtzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuV2FsbGV0Q29ubmVjdF0gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBXYWxsZXRDb25uZWN0IFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5XYWxsZXRMaW5rXSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2xvc2UoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBLaWxsIFdhbGxldExpbmsgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLkZvcnRtYXRpY10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBGb3J0bWF0aWMgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLk1hZ2ljXSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2xvc2UoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBLaWxsIE1hZ2ljIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5Qb3J0aXNdICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjaGFpbklkICE9PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2hhbmdlTmV0d29yayhjaGFpbklkID09PSAxID8gMTAwIDogMSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU3dpdGNoIE5ldHdvcmtzXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgS2lsbCBQb3J0aXMgU2Vzc2lvblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5Ub3J1c10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBUb3J1cyBTZXNzaW9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
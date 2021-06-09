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



var _connectorsByName,
    _jsxFileName = "C:\\Users\\jesh\\Desktop\\000O1T\\web3-react\\example\\pages\\index.tsx",
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

var connectorsByName = (_connectorsByName = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Injected, _connectors__WEBPACK_IMPORTED_MODULE_10__["injected"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Network, _connectors__WEBPACK_IMPORTED_MODULE_10__["network"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.WalletConnect, _connectors__WEBPACK_IMPORTED_MODULE_10__["walletconnect"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.WalletLink, _connectors__WEBPACK_IMPORTED_MODULE_10__["walletlink"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Ledger, _connectors__WEBPACK_IMPORTED_MODULE_10__["ledger"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Trezor, _connectors__WEBPACK_IMPORTED_MODULE_10__["trezor"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Lattice, _connectors__WEBPACK_IMPORTED_MODULE_10__["lattice"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Frame, _connectors__WEBPACK_IMPORTED_MODULE_10__["frame"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Authereum, _connectors__WEBPACK_IMPORTED_MODULE_10__["authereum"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Fortmatic, _connectors__WEBPACK_IMPORTED_MODULE_10__["fortmatic"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Magic, _connectors__WEBPACK_IMPORTED_MODULE_10__["magic"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Portis, _connectors__WEBPACK_IMPORTED_MODULE_10__["portis"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Torus, _connectors__WEBPACK_IMPORTED_MODULE_10__["torus"]), _connectorsByName);

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
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 86,
      columnNumber: 7
    }
  }, "Chain Id"), __jsx("span", {
    role: "img",
    "aria-label": "chain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, "\u26D3"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 131,
      columnNumber: 7
    }
  }, "Block Number"), __jsx("span", {
    role: "img",
    "aria-label": "numbers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, "\uD83D\uDD22"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
      lineNumber: 145,
      columnNumber: 7
    }
  }, "Account"), __jsx("span", {
    role: "img",
    "aria-label": "robot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, "\uD83E\uDD16"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
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
      lineNumber: 190,
      columnNumber: 7
    }
  }, "Balance"), __jsx("span", {
    role: "img",
    "aria-label": "gold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }, "\uD83D\uDCB0"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
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
      lineNumber: 204,
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
      lineNumber: 205,
      columnNumber: 7
    }
  }, __jsx(ChainId, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }), __jsx(BlockNumber, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }), __jsx(Account, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }), __jsx(Balance, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
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
      lineNumber: 244,
      columnNumber: 7
    }
  }), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
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
      lineNumber: 246,
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
        lineNumber: 262,
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
        lineNumber: 277,
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
        lineNumber: 289,
        columnNumber: 32
      }
    }), connected && __jsx("span", {
      role: "img",
      "aria-label": "check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
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
      lineNumber: 301,
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
      lineNumber: 303,
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
      lineNumber: 319,
      columnNumber: 21
    }
  }, getErrorMessage(error))), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
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
      lineNumber: 324,
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
      lineNumber: 334,
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
      lineNumber: 356,
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
      lineNumber: 370,
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
      lineNumber: 384,
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
      lineNumber: 398,
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
      lineNumber: 412,
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
      lineNumber: 428,
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
      lineNumber: 441,
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
      lineNumber: 456,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNvbm5lY3Rvck5hbWVzIiwiY29ubmVjdG9yc0J5TmFtZSIsIkluamVjdGVkIiwiaW5qZWN0ZWQiLCJOZXR3b3JrIiwibmV0d29yayIsIldhbGxldENvbm5lY3QiLCJ3YWxsZXRjb25uZWN0IiwiV2FsbGV0TGluayIsIndhbGxldGxpbmsiLCJMZWRnZXIiLCJsZWRnZXIiLCJUcmV6b3IiLCJ0cmV6b3IiLCJMYXR0aWNlIiwibGF0dGljZSIsIkZyYW1lIiwiZnJhbWUiLCJBdXRoZXJldW0iLCJhdXRoZXJldW0iLCJGb3J0bWF0aWMiLCJmb3J0bWF0aWMiLCJNYWdpYyIsIm1hZ2ljIiwiUG9ydGlzIiwicG9ydGlzIiwiVG9ydXMiLCJ0b3J1cyIsImdldEVycm9yTWVzc2FnZSIsImVycm9yIiwiTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IiLCJVbnN1cHBvcnRlZENoYWluSWRFcnJvciIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkIiwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIiwiY29uc29sZSIsImdldExpYnJhcnkiLCJwcm92aWRlciIsImxpYnJhcnkiLCJXZWIzUHJvdmlkZXIiLCJwb2xsaW5nSW50ZXJ2YWwiLCJDaGFpbklkIiwidXNlV2ViM1JlYWN0IiwiY2hhaW5JZCIsIkJsb2NrTnVtYmVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImJsb2NrTnVtYmVyIiwic2V0QmxvY2tOdW1iZXIiLCJ1c2VFZmZlY3QiLCJzdGFsZSIsImdldEJsb2NrTnVtYmVyIiwidGhlbiIsInVwZGF0ZUJsb2NrTnVtYmVyIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsInVuZGVmaW5lZCIsIkFjY291bnQiLCJhY2NvdW50Iiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiQmFsYW5jZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZ2V0QmFsYW5jZSIsImZvcm1hdEV0aGVyIiwiSGVhZGVyIiwiYWN0aXZlIiwibWFyZ2luIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWF4V2lkdGgiLCJsaW5lSGVpZ2h0IiwiQXBwIiwiY29udGV4dCIsImNvbm5lY3RvciIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImFjdGl2YXRpbmdDb25uZWN0b3IiLCJzZXRBY3RpdmF0aW5nQ29ubmVjdG9yIiwidHJpZWRFYWdlciIsInVzZUVhZ2VyQ29ubmVjdCIsInVzZUluYWN0aXZlTGlzdGVuZXIiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibmFtZSIsImN1cnJlbnRDb25uZWN0b3IiLCJhY3RpdmF0aW5nIiwiY29ubmVjdGVkIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsImN1cnNvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImFsaWduSXRlbXMiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZ2V0U2lnbmVyIiwic2lnbk1lc3NhZ2UiLCJzaWduYXR1cmUiLCJ3aW5kb3ciLCJhbGVydCIsIm1lc3NhZ2UiLCJjaGFuZ2VDaGFpbklkIiwiY2xvc2UiLCJjaGFuZ2VOZXR3b3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBZUE7SUFFS0EsYzs7V0FBQUEsYztBQUFBQSxnQjtHQUFBQSxjLEtBQUFBLGM7O0FBSUwsSUFBTUMsZ0JBQTRELHlJQUMvREQsY0FBYyxDQUFDRSxRQURnRCxFQUNyQ0MscURBRHFDLGdIQUUvREgsY0FBYyxDQUFDSSxPQUZnRCxFQUV0Q0Msb0RBRnNDLGdIQUcvREwsY0FBYyxDQUFDTSxhQUhnRCxFQUdoQ0Ms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LEVBQUUsbUJBQU07QUFDYjtBQUFFbkIsZUFBRCxDQUFtQnFDLGFBQW5CLENBQWlDdkUsT0FBTyxLQUFLLENBQVosR0FBZ0IsR0FBaEIsR0FBc0IsQ0FBdkQ7QUFDRixLQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosRUFlRTtBQUNFLFNBQUssRUFBRTtBQUNMa0QsWUFBTSxFQUFFLE1BREg7QUFFTEMsa0JBQVksRUFBRSxNQUZUO0FBR0xFLFlBQU0sRUFBRTtBQUhILEtBRFQ7QUFNRSxXQUFPLEVBQUUsbUJBQU07QUFDYjtBQUFFbkIsZUFBRCxDQUFtQm9DLEtBQW5CO0FBQ0YsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWZGLENBdEdKLEVBbUlHcEMsU0FBUyxLQUFLNUUsZ0JBQWdCLENBQUNELGNBQWMsQ0FBQzBCLEtBQWhCLENBQTlCLElBQ0M7QUFDRSxTQUFLLEVBQUU7QUFDTG1FLFlBQU0sRUFBRSxNQURIO0FBRUxDLGtCQUFZLEVBQUUsTUFGVDtBQUdMRSxZQUFNLEVBQUU7QUFISCxLQURUO0FBTUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2I7QUFBRW5CLGVBQUQsQ0FBbUJvQyxLQUFuQjtBQUNGLEtBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFwSUosQ0FqRkYsQ0FERjtBQXNPRDs7SUF4UFF0QyxHO1VBQ1NqQyw2RCxFQVlHeUMsc0QsRUFHbkJDLDBEOzs7TUFoQk9ULEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDY0OTEzODZlMWQ3YWMyZmFlNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIE5vRXRoZXJldW1Qcm92aWRlckVycm9yLFxyXG4gIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZFxyXG59IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvdW5pdHMnXHJcblxyXG5pbXBvcnQgeyB1c2VFYWdlckNvbm5lY3QsIHVzZUluYWN0aXZlTGlzdGVuZXIgfSBmcm9tICcuLi9ob29rcydcclxuaW1wb3J0IHtcclxuICBpbmplY3RlZCxcclxuICBuZXR3b3JrLFxyXG4gIHdhbGxldGNvbm5lY3QsXHJcbiAgd2FsbGV0bGluayxcclxuICBsZWRnZXIsXHJcbiAgdHJlem9yLFxyXG4gIGxhdHRpY2UsXHJcbiAgZnJhbWUsXHJcbiAgYXV0aGVyZXVtLFxyXG4gIGZvcnRtYXRpYyxcclxuICBtYWdpYyxcclxuICBwb3J0aXMsXHJcbiAgdG9ydXNcclxufSBmcm9tICcuLi9jb25uZWN0b3JzJ1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TcGlubmVyJ1xyXG5cclxuZW51bSBDb25uZWN0b3JOYW1lcyB7XHJcbiAgSW5qZWN0ZWQgPSAnQ29ubmVjdCBXYWxsZXQnXHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3RvcnNCeU5hbWU6IHsgW2Nvbm5lY3Rvck5hbWUgaW4gQ29ubmVjdG9yTmFtZXNdOiBhbnkgfSA9IHtcclxuICBbQ29ubmVjdG9yTmFtZXMuSW5qZWN0ZWRdOiBpbmplY3RlZCxcclxuICBbQ29ubmVjdG9yTmFtZXMuTmV0d29ya106IG5ldHdvcmssXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLldhbGxldENvbm5lY3RdOiB3YWxsZXRjb25uZWN0LFxyXG4gIFtDb25uZWN0b3JOYW1lcy5XYWxsZXRMaW5rXTogd2FsbGV0bGluayxcclxuICBbQ29ubmVjdG9yTmFtZXMuTGVkZ2VyXTogbGVkZ2VyLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5UcmV6b3JdOiB0cmV6b3IsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkxhdHRpY2VdOiBsYXR0aWNlLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5GcmFtZV06IGZyYW1lLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5BdXRoZXJldW1dOiBhdXRoZXJldW0sXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkZvcnRtYXRpY106IGZvcnRtYXRpYyxcclxuICBbQ29ubmVjdG9yTmFtZXMuTWFnaWNdOiBtYWdpYyxcclxuICBbQ29ubmVjdG9yTmFtZXMuUG9ydGlzXTogcG9ydGlzLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5Ub3J1c106IHRvcnVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvcjogRXJyb3IpIHtcclxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcikge1xyXG4gICAgcmV0dXJuICdObyBFdGhlcmV1bSBicm93c2VyIGV4dGVuc2lvbiBkZXRlY3RlZCwgaW5zdGFsbCBNZXRhTWFzayBvbiBkZXNrdG9wIG9yIHZpc2l0IGZyb20gYSBkQXBwIGJyb3dzZXIgb24gbW9iaWxlLidcclxuICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IpIHtcclxuICAgIHJldHVybiBcIllvdSdyZSBjb25uZWN0ZWQgdG8gYW4gdW5zdXBwb3J0ZWQgbmV0d29yay5cIlxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkIHx8XHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWVcclxuICApIHtcclxuICAgIHJldHVybiAnUGxlYXNlIGF1dGhvcml6ZSB0aGlzIHdlYnNpdGUgdG8gYWNjZXNzIHlvdXIgRXRoZXJldW0gYWNjb3VudC4nXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICByZXR1cm4gJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuIENoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMuJ1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGlicmFyeShwcm92aWRlcjogYW55KTogV2ViM1Byb3ZpZGVyIHtcclxuICBjb25zdCBsaWJyYXJ5ID0gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcilcclxuICBsaWJyYXJ5LnBvbGxpbmdJbnRlcnZhbCA9IDEyMDAwXHJcbiAgcmV0dXJuIGxpYnJhcnlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXZWIzUmVhY3RQcm92aWRlciBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cclxuICAgICAgPEFwcCAvPlxyXG4gICAgPC9XZWIzUmVhY3RQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENoYWluSWQoKSB7XHJcbiAgY29uc3QgeyBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+Q2hhaW4gSWQ8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY2hhaW5cIj5cclxuICAgICAgICDim5NcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj57Y2hhaW5JZCA/PyAnJ308L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJsb2NrTnVtYmVyKCkge1xyXG4gIGNvbnN0IHsgY2hhaW5JZCwgbGlicmFyeSB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgY29uc3QgW2Jsb2NrTnVtYmVyLCBzZXRCbG9ja051bWJlcl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KClcclxuICBSZWFjdC51c2VFZmZlY3QoKCk6IGFueSA9PiB7XHJcbiAgICBpZiAoISFsaWJyYXJ5KSB7XHJcbiAgICAgIGxldCBzdGFsZSA9IGZhbHNlXHJcblxyXG4gICAgICBsaWJyYXJ5XHJcbiAgICAgICAgLmdldEJsb2NrTnVtYmVyKClcclxuICAgICAgICAudGhlbigoYmxvY2tOdW1iZXI6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCbG9ja051bWJlcihibG9ja051bWJlcilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJsb2NrTnVtYmVyKG51bGwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZUJsb2NrTnVtYmVyID0gKGJsb2NrTnVtYmVyOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRCbG9ja051bWJlcihibG9ja051bWJlcilcclxuICAgICAgfVxyXG4gICAgICBsaWJyYXJ5Lm9uKCdibG9jaycsIHVwZGF0ZUJsb2NrTnVtYmVyKVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzdGFsZSA9IHRydWVcclxuICAgICAgICBsaWJyYXJ5LnJlbW92ZUxpc3RlbmVyKCdibG9jaycsIHVwZGF0ZUJsb2NrTnVtYmVyKVxyXG4gICAgICAgIHNldEJsb2NrTnVtYmVyKHVuZGVmaW5lZClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtsaWJyYXJ5LCBjaGFpbklkXSkgLy8gZW5zdXJlcyByZWZyZXNoIGlmIHJlZmVyZW50aWFsIGlkZW50aXR5IG9mIGxpYnJhcnkgZG9lc24ndCBjaGFuZ2UgYWNyb3NzIGNoYWluSWRzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5CbG9jayBOdW1iZXI8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwibnVtYmVyc1wiPlxyXG4gICAgICAgIPCflKJcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj57YmxvY2tOdW1iZXIgPT09IG51bGwgPyAnRXJyb3InIDogYmxvY2tOdW1iZXIgPz8gJyd9PC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBY2NvdW50KCkge1xyXG4gIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkFjY291bnQ8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwicm9ib3RcIj5cclxuICAgICAgICDwn6SWXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge2FjY291bnQgPT09IG51bGxcclxuICAgICAgICAgID8gJy0nXHJcbiAgICAgICAgICA6IGFjY291bnRcclxuICAgICAgICAgID8gYCR7YWNjb3VudC5zdWJzdHJpbmcoMCwgNil9Li4uJHthY2NvdW50LnN1YnN0cmluZyhhY2NvdW50Lmxlbmd0aCAtIDQpfWBcclxuICAgICAgICAgIDogJyd9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQmFsYW5jZSgpIHtcclxuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnksIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuICBSZWFjdC51c2VFZmZlY3QoKCk6IGFueSA9PiB7XHJcbiAgICBpZiAoISFhY2NvdW50ICYmICEhbGlicmFyeSkge1xyXG4gICAgICBsZXQgc3RhbGUgPSBmYWxzZVxyXG5cclxuICAgICAgbGlicmFyeVxyXG4gICAgICAgIC5nZXRCYWxhbmNlKGFjY291bnQpXHJcbiAgICAgICAgLnRoZW4oKGJhbGFuY2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCYWxhbmNlKGJhbGFuY2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCYWxhbmNlKG51bGwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgc3RhbGUgPSB0cnVlXHJcbiAgICAgICAgc2V0QmFsYW5jZSh1bmRlZmluZWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZF0pIC8vIGVuc3VyZXMgcmVmcmVzaCBpZiByZWZlcmVudGlhbCBpZGVudGl0eSBvZiBsaWJyYXJ5IGRvZXNuJ3QgY2hhbmdlIGFjcm9zcyBjaGFpbklkc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+QmFsYW5jZTwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJnb2xkXCI+XHJcbiAgICAgICAg8J+SsFxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntiYWxhbmNlID09PSBudWxsID8gJ0Vycm9yJyA6IGJhbGFuY2UgPyBgzp4ke2Zvcm1hdEV0aGVyKGJhbGFuY2UpfWAgOiAnJ308L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCB7IGFjdGl2ZSwgZXJyb3IgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luOiAnMXJlbScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT57YWN0aXZlID8gJ/Cfn6InIDogZXJyb3IgPyAn8J+UtCcgOiAn8J+foCd9PC9oMT5cclxuICAgICAgPGgzXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgbWluLWNvbnRlbnQgMWZyJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnMjByZW0nLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogJzJyZW0nLFxyXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENoYWluSWQgLz5cclxuICAgICAgICA8QmxvY2tOdW1iZXIgLz5cclxuICAgICAgICA8QWNjb3VudCAvPlxyXG4gICAgICAgIDxCYWxhbmNlIC8+XHJcbiAgICAgIDwvaDM+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlV2ViM1JlYWN0PFdlYjNQcm92aWRlcj4oKVxyXG4gIGNvbnN0IHsgY29ubmVjdG9yLCBsaWJyYXJ5LCBjaGFpbklkLCBhY2NvdW50LCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSwgYWN0aXZlLCBlcnJvciB9ID0gY29udGV4dFxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gcmVjb2duaXplIHRoZSBjb25uZWN0b3IgY3VycmVudGx5IGJlaW5nIGFjdGl2YXRlZFxyXG4gIGNvbnN0IFthY3RpdmF0aW5nQ29ubmVjdG9yLCBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZhdGluZ0Nvbm5lY3RvciAmJiBhY3RpdmF0aW5nQ29ubmVjdG9yID09PSBjb25uZWN0b3IpIHtcclxuICAgICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcih1bmRlZmluZWQpXHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2YXRpbmdDb25uZWN0b3IsIGNvbm5lY3Rvcl0pXHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBlYWdlcmx5IGNvbm5lY3QgdG8gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHMgYW5kIGhhcyBncmFudGVkIGFjY2VzcyBhbHJlYWR5XHJcbiAgY29uc3QgdHJpZWRFYWdlciA9IHVzZUVhZ2VyQ29ubmVjdCgpXHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBjb25uZWN0IGluIHJlYWN0aW9uIHRvIGNlcnRhaW4gZXZlbnRzIG9uIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzXHJcbiAgdXNlSW5hY3RpdmVMaXN0ZW5lcighdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnMjByZW0nLFxyXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge09iamVjdC5rZXlzKGNvbm5lY3RvcnNCeU5hbWUpLm1hcChuYW1lID0+IHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25uZWN0b3IgPSBjb25uZWN0b3JzQnlOYW1lW25hbWVdXHJcbiAgICAgICAgICBjb25zdCBhY3RpdmF0aW5nID0gY3VycmVudENvbm5lY3RvciA9PT0gYWN0aXZhdGluZ0Nvbm5lY3RvclxyXG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkID0gY3VycmVudENvbm5lY3RvciA9PT0gY29ubmVjdG9yXHJcbiAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICF0cmllZEVhZ2VyIHx8ICEhYWN0aXZhdGluZ0Nvbm5lY3RvciB8fCBjb25uZWN0ZWQgfHwgISFlcnJvclxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3RpdmF0aW5nID8gJ29yYW5nZScgOiBjb25uZWN0ZWQgPyAnZ3JlZW4nIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGlzYWJsZWQgPyAndW5zZXQnIDogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICBrZXk9e25hbWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3RvcihjdXJyZW50Q29ubmVjdG9yKVxyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGUoY29ubmVjdG9yc0J5TmFtZVtuYW1lXSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAwIDAgMXJlbSdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2FjdGl2YXRpbmcgJiYgPFNwaW5uZXIgY29sb3I9eydibGFjayd9IHN0eWxlPXt7IGhlaWdodDogJzI1JScsIG1hcmdpbkxlZnQ6ICctMXJlbScgfX0gLz59XHJcbiAgICAgICAgICAgICAgICB7Y29ubmVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIOKchVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgeyhhY3RpdmUgfHwgZXJyb3IpICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcycmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRlYWN0aXZhdGUoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWFjdGl2YXRlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7ISFlcnJvciAmJiA8aDQgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMXJlbScsIG1hcmdpbkJvdHRvbTogJzAnIH19PntnZXRFcnJvck1lc3NhZ2UoZXJyb3IpfTwvaDQ+fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7ISEobGlicmFyeSAmJiBhY2NvdW50KSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxpYnJhcnlcclxuICAgICAgICAgICAgICAgIC5nZXRTaWduZXIoYWNjb3VudClcclxuICAgICAgICAgICAgICAgIC5zaWduTWVzc2FnZSgn8J+RiycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoc2lnbmF0dXJlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KGBTdWNjZXNzIVxcblxcbiR7c2lnbmF0dXJlfWApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnRmFpbHVyZSEnICsgKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBgXFxuXFxuJHtlcnJvci5tZXNzYWdlfWAgOiAnJykpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaWduIE1lc3NhZ2VcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyEhKGNvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5OZXR3b3JrXSAmJiBjaGFpbklkKSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2hhbmdlQ2hhaW5JZChjaGFpbklkID09PSAxID8gNCA6IDEpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN3aXRjaCBOZXR3b3Jrc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLldhbGxldENvbm5lY3RdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgV2FsbGV0Q29ubmVjdCBTZXNzaW9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuV2FsbGV0TGlua10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBXYWxsZXRMaW5rIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5Gb3J0bWF0aWNdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgRm9ydG1hdGljIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5NYWdpY10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBNYWdpYyBTZXNzaW9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuUG9ydGlzXSAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y2hhaW5JZCAhPT0gdW5kZWZpbmVkICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNoYW5nZU5ldHdvcmsoY2hhaW5JZCA9PT0gMSA/IDEwMCA6IDEpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN3aXRjaCBOZXR3b3Jrc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEtpbGwgUG9ydGlzIFNlc3Npb25cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuVG9ydXNdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgVG9ydXMgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
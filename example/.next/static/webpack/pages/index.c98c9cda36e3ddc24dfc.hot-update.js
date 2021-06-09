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
  ConnectorNames["Injected"] = "Injected";
  ConnectorNames["Network"] = "Network";
  ConnectorNames["WalletConnect"] = "WalletConnect";
  ConnectorNames["WalletLink"] = "WalletLink";
  ConnectorNames["Ledger"] = "Ledger";
  ConnectorNames["Trezor"] = "Trezor";
  ConnectorNames["Lattice"] = "Lattice";
  ConnectorNames["Frame"] = "Frame";
  ConnectorNames["Authereum"] = "Authereum";
  ConnectorNames["Fortmatic"] = "Fortmatic";
  ConnectorNames["Magic"] = "Magic";
  ConnectorNames["Portis"] = "Portis";
  ConnectorNames["Torus"] = "Torus";
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
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 98,
      columnNumber: 7
    }
  }, "Chain Id"), __jsx("span", {
    role: "img",
    "aria-label": "chain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, "\u26D3"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 143,
      columnNumber: 7
    }
  }, "Block Number"), __jsx("span", {
    role: "img",
    "aria-label": "numbers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, "\uD83D\uDD22"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 157,
      columnNumber: 7
    }
  }, "Account"), __jsx("span", {
    role: "img",
    "aria-label": "robot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, "\uD83E\uDD16"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 202,
      columnNumber: 7
    }
  }, "Balance"), __jsx("span", {
    role: "img",
    "aria-label": "gold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }
  }, "\uD83D\uDCB0"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
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
      lineNumber: 216,
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
      lineNumber: 217,
      columnNumber: 7
    }
  }, __jsx(ChainId, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }), __jsx(BlockNumber, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }), __jsx(Account, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }
  }), __jsx(Balance, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
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
      lineNumber: 256,
      columnNumber: 7
    }
  }), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
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
      lineNumber: 258,
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
        lineNumber: 274,
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
        lineNumber: 289,
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
        lineNumber: 301,
        columnNumber: 32
      }
    }), connected && __jsx("span", {
      role: "img",
      "aria-label": "check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
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
      lineNumber: 313,
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
      lineNumber: 315,
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
      lineNumber: 331,
      columnNumber: 21
    }
  }, getErrorMessage(error))), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
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
      lineNumber: 336,
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
      lineNumber: 346,
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
      lineNumber: 368,
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
      lineNumber: 382,
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
      lineNumber: 396,
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
      lineNumber: 410,
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
      lineNumber: 424,
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
      lineNumber: 440,
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
      lineNumber: 453,
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
      lineNumber: 468,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNvbm5lY3Rvck5hbWVzIiwiY29ubmVjdG9yc0J5TmFtZSIsIkluamVjdGVkIiwiaW5qZWN0ZWQiLCJOZXR3b3JrIiwibmV0d29yayIsIldhbGxldENvbm5lY3QiLCJ3YWxsZXRjb25uZWN0IiwiV2FsbGV0TGluayIsIndhbGxldGxpbmsiLCJMZWRnZXIiLCJsZWRnZXIiLCJUcmV6b3IiLCJ0cmV6b3IiLCJMYXR0aWNlIiwibGF0dGljZSIsIkZyYW1lIiwiZnJhbWUiLCJBdXRoZXJldW0iLCJhdXRoZXJldW0iLCJGb3J0bWF0aWMiLCJmb3J0bWF0aWMiLCJNYWdpYyIsIm1hZ2ljIiwiUG9ydGlzIiwicG9ydGlzIiwiVG9ydXMiLCJ0b3J1cyIsImdldEVycm9yTWVzc2FnZSIsImVycm9yIiwiTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IiLCJVbnN1cHBvcnRlZENoYWluSWRFcnJvciIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkIiwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIiwiY29uc29sZSIsImdldExpYnJhcnkiLCJwcm92aWRlciIsImxpYnJhcnkiLCJXZWIzUHJvdmlkZXIiLCJwb2xsaW5nSW50ZXJ2YWwiLCJDaGFpbklkIiwidXNlV2ViM1JlYWN0IiwiY2hhaW5JZCIsIkJsb2NrTnVtYmVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImJsb2NrTnVtYmVyIiwic2V0QmxvY2tOdW1iZXIiLCJ1c2VFZmZlY3QiLCJzdGFsZSIsImdldEJsb2NrTnVtYmVyIiwidGhlbiIsInVwZGF0ZUJsb2NrTnVtYmVyIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsInVuZGVmaW5lZCIsIkFjY291bnQiLCJhY2NvdW50Iiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiQmFsYW5jZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZ2V0QmFsYW5jZSIsImZvcm1hdEV0aGVyIiwiSGVhZGVyIiwiYWN0aXZlIiwibWFyZ2luIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWF4V2lkdGgiLCJsaW5lSGVpZ2h0IiwiQXBwIiwiY29udGV4dCIsImNvbm5lY3RvciIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImFjdGl2YXRpbmdDb25uZWN0b3IiLCJzZXRBY3RpdmF0aW5nQ29ubmVjdG9yIiwidHJpZWRFYWdlciIsInVzZUVhZ2VyQ29ubmVjdCIsInVzZUluYWN0aXZlTGlzdGVuZXIiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibmFtZSIsImN1cnJlbnRDb25uZWN0b3IiLCJhY3RpdmF0aW5nIiwiY29ubmVjdGVkIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsImN1cnNvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImFsaWduSXRlbXMiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZ2V0U2lnbmVyIiwic2lnbk1lc3NhZ2UiLCJzaWduYXR1cmUiLCJ3aW5kb3ciLCJhbGVydCIsIm1lc3NhZ2UiLCJjaGFuZ2VDaGFpbklkIiwiY2xvc2UiLCJjaGFuZ2VOZXR3b3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBZUE7SUFFS0EsYzs7V0FBQUEsYztBQUFBQSxnQjtBQUFBQSxnQjtBQUFBQSxnQjtBQUFBQSxnQjtBQUFBQSxnQjtBQUFBQSxnQjtBQUFBQSxnQjtBQUFBQSxnQjtBQUFBQSxnQjtBQUFBQSxnQjtBQUFBQSxnQjtBQUFBQSxnQjtBQUFBQSxnQjtHQUFBQSxjLEtBQUFBLGM7O0FBZ0JMLElBQU1DLGdCQUE0RCx5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QUFLYSxTQUFaLElBQ0M7QUFDRSxTQUFLLEVBQUU7QUFDTHFDLFlBQU0sRUFBRSxNQURIO0FBRUxDLGtCQUFZLEVBQUUsTUFGVDtBQUdMRSxZQUFNLEVBQUU7QUFISCxLQURUO0FBTUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2I7QUFBRW5CLGVBQUQsQ0FBbUJxQyxhQUFuQixDQUFpQ3ZFLE9BQU8sS0FBSyxDQUFaLEdBQWdCLEdBQWhCLEdBQXNCLENBQXZEO0FBQ0YsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLEVBZUU7QUFDRSxTQUFLLEVBQUU7QUFDTGtELFlBQU0sRUFBRSxNQURIO0FBRUxDLGtCQUFZLEVBQUUsTUFGVDtBQUdMRSxZQUFNLEVBQUU7QUFISCxLQURUO0FBTUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2I7QUFBRW5CLGVBQUQsQ0FBbUJvQyxLQUFuQjtBQUNGLEtBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFmRixDQXRHSixFQW1JR3BDLFNBQVMsS0FBSzVFLGdCQUFnQixDQUFDRCxjQUFjLENBQUMwQixLQUFoQixDQUE5QixJQUNDO0FBQ0UsU0FBSyxFQUFFO0FBQ0xtRSxZQUFNLEVBQUUsTUFESDtBQUVMQyxrQkFBWSxFQUFFLE1BRlQ7QUFHTEUsWUFBTSxFQUFFO0FBSEgsS0FEVDtBQU1FLFdBQU8sRUFBRSxtQkFBTTtBQUNiO0FBQUVuQixlQUFELENBQW1Cb0MsS0FBbkI7QUFDRixLQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBcElKLENBakZGLENBREY7QUFzT0Q7O0lBeFBRdEMsRztVQUNTakMsNkQsRUFZR3lDLHNELEVBR25CQywwRDs7O01BaEJPVCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5OGM5Y2RhMzZlM2RkYzI0ZGZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IHtcclxuICBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcixcclxuICBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWRcclxufSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSB9IGZyb20gJ0B3ZWIzLXJlYWN0L2ZyYW1lLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJ1xyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3VuaXRzJ1xyXG5cclxuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0LCB1c2VJbmFjdGl2ZUxpc3RlbmVyIH0gZnJvbSAnLi4vaG9va3MnXHJcbmltcG9ydCB7XHJcbiAgaW5qZWN0ZWQsXHJcbiAgbmV0d29yayxcclxuICB3YWxsZXRjb25uZWN0LFxyXG4gIHdhbGxldGxpbmssXHJcbiAgbGVkZ2VyLFxyXG4gIHRyZXpvcixcclxuICBsYXR0aWNlLFxyXG4gIGZyYW1lLFxyXG4gIGF1dGhlcmV1bSxcclxuICBmb3J0bWF0aWMsXHJcbiAgbWFnaWMsXHJcbiAgcG9ydGlzLFxyXG4gIHRvcnVzXHJcbn0gZnJvbSAnLi4vY29ubmVjdG9ycydcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcclxuXHJcbmVudW0gQ29ubmVjdG9yTmFtZXMge1xyXG4gIEluamVjdGVkID0gJ0luamVjdGVkJyxcclxuICBOZXR3b3JrID0gJ05ldHdvcmsnLFxyXG4gIFdhbGxldENvbm5lY3QgPSAnV2FsbGV0Q29ubmVjdCcsXHJcbiAgV2FsbGV0TGluayA9ICdXYWxsZXRMaW5rJyxcclxuICBMZWRnZXIgPSAnTGVkZ2VyJyxcclxuICBUcmV6b3IgPSAnVHJlem9yJyxcclxuICBMYXR0aWNlID0gJ0xhdHRpY2UnLFxyXG4gIEZyYW1lID0gJ0ZyYW1lJyxcclxuICBBdXRoZXJldW0gPSAnQXV0aGVyZXVtJyxcclxuICBGb3J0bWF0aWMgPSAnRm9ydG1hdGljJyxcclxuICBNYWdpYyA9ICdNYWdpYycsXHJcbiAgUG9ydGlzID0gJ1BvcnRpcycsXHJcbiAgVG9ydXMgPSAnVG9ydXMnXHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3RvcnNCeU5hbWU6IHsgW2Nvbm5lY3Rvck5hbWUgaW4gQ29ubmVjdG9yTmFtZXNdOiBhbnkgfSA9IHtcclxuICBbQ29ubmVjdG9yTmFtZXMuSW5qZWN0ZWRdOiBpbmplY3RlZCxcclxuICBbQ29ubmVjdG9yTmFtZXMuTmV0d29ya106IG5ldHdvcmssXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLldhbGxldENvbm5lY3RdOiB3YWxsZXRjb25uZWN0LFxyXG4gIFtDb25uZWN0b3JOYW1lcy5XYWxsZXRMaW5rXTogd2FsbGV0bGluayxcclxuICBbQ29ubmVjdG9yTmFtZXMuTGVkZ2VyXTogbGVkZ2VyLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5UcmV6b3JdOiB0cmV6b3IsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkxhdHRpY2VdOiBsYXR0aWNlLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5GcmFtZV06IGZyYW1lLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5BdXRoZXJldW1dOiBhdXRoZXJldW0sXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkZvcnRtYXRpY106IGZvcnRtYXRpYyxcclxuICBbQ29ubmVjdG9yTmFtZXMuTWFnaWNdOiBtYWdpYyxcclxuICBbQ29ubmVjdG9yTmFtZXMuUG9ydGlzXTogcG9ydGlzLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5Ub3J1c106IHRvcnVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvcjogRXJyb3IpIHtcclxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcikge1xyXG4gICAgcmV0dXJuICdObyBFdGhlcmV1bSBicm93c2VyIGV4dGVuc2lvbiBkZXRlY3RlZCwgaW5zdGFsbCBNZXRhTWFzayBvbiBkZXNrdG9wIG9yIHZpc2l0IGZyb20gYSBkQXBwIGJyb3dzZXIgb24gbW9iaWxlLidcclxuICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IpIHtcclxuICAgIHJldHVybiBcIllvdSdyZSBjb25uZWN0ZWQgdG8gYW4gdW5zdXBwb3J0ZWQgbmV0d29yay5cIlxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkIHx8XHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWVcclxuICApIHtcclxuICAgIHJldHVybiAnUGxlYXNlIGF1dGhvcml6ZSB0aGlzIHdlYnNpdGUgdG8gYWNjZXNzIHlvdXIgRXRoZXJldW0gYWNjb3VudC4nXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICByZXR1cm4gJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuIENoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMuJ1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGlicmFyeShwcm92aWRlcjogYW55KTogV2ViM1Byb3ZpZGVyIHtcclxuICBjb25zdCBsaWJyYXJ5ID0gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcilcclxuICBsaWJyYXJ5LnBvbGxpbmdJbnRlcnZhbCA9IDEyMDAwXHJcbiAgcmV0dXJuIGxpYnJhcnlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXZWIzUmVhY3RQcm92aWRlciBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cclxuICAgICAgPEFwcCAvPlxyXG4gICAgPC9XZWIzUmVhY3RQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENoYWluSWQoKSB7XHJcbiAgY29uc3QgeyBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+Q2hhaW4gSWQ8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY2hhaW5cIj5cclxuICAgICAgICDim5NcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj57Y2hhaW5JZCA/PyAnJ308L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJsb2NrTnVtYmVyKCkge1xyXG4gIGNvbnN0IHsgY2hhaW5JZCwgbGlicmFyeSB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgY29uc3QgW2Jsb2NrTnVtYmVyLCBzZXRCbG9ja051bWJlcl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KClcclxuICBSZWFjdC51c2VFZmZlY3QoKCk6IGFueSA9PiB7XHJcbiAgICBpZiAoISFsaWJyYXJ5KSB7XHJcbiAgICAgIGxldCBzdGFsZSA9IGZhbHNlXHJcblxyXG4gICAgICBsaWJyYXJ5XHJcbiAgICAgICAgLmdldEJsb2NrTnVtYmVyKClcclxuICAgICAgICAudGhlbigoYmxvY2tOdW1iZXI6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCbG9ja051bWJlcihibG9ja051bWJlcilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJsb2NrTnVtYmVyKG51bGwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZUJsb2NrTnVtYmVyID0gKGJsb2NrTnVtYmVyOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRCbG9ja051bWJlcihibG9ja051bWJlcilcclxuICAgICAgfVxyXG4gICAgICBsaWJyYXJ5Lm9uKCdibG9jaycsIHVwZGF0ZUJsb2NrTnVtYmVyKVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzdGFsZSA9IHRydWVcclxuICAgICAgICBsaWJyYXJ5LnJlbW92ZUxpc3RlbmVyKCdibG9jaycsIHVwZGF0ZUJsb2NrTnVtYmVyKVxyXG4gICAgICAgIHNldEJsb2NrTnVtYmVyKHVuZGVmaW5lZClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtsaWJyYXJ5LCBjaGFpbklkXSkgLy8gZW5zdXJlcyByZWZyZXNoIGlmIHJlZmVyZW50aWFsIGlkZW50aXR5IG9mIGxpYnJhcnkgZG9lc24ndCBjaGFuZ2UgYWNyb3NzIGNoYWluSWRzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5CbG9jayBOdW1iZXI8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwibnVtYmVyc1wiPlxyXG4gICAgICAgIPCflKJcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj57YmxvY2tOdW1iZXIgPT09IG51bGwgPyAnRXJyb3InIDogYmxvY2tOdW1iZXIgPz8gJyd9PC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBY2NvdW50KCkge1xyXG4gIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkFjY291bnQ8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwicm9ib3RcIj5cclxuICAgICAgICDwn6SWXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge2FjY291bnQgPT09IG51bGxcclxuICAgICAgICAgID8gJy0nXHJcbiAgICAgICAgICA6IGFjY291bnRcclxuICAgICAgICAgID8gYCR7YWNjb3VudC5zdWJzdHJpbmcoMCwgNil9Li4uJHthY2NvdW50LnN1YnN0cmluZyhhY2NvdW50Lmxlbmd0aCAtIDQpfWBcclxuICAgICAgICAgIDogJyd9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQmFsYW5jZSgpIHtcclxuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnksIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuICBSZWFjdC51c2VFZmZlY3QoKCk6IGFueSA9PiB7XHJcbiAgICBpZiAoISFhY2NvdW50ICYmICEhbGlicmFyeSkge1xyXG4gICAgICBsZXQgc3RhbGUgPSBmYWxzZVxyXG5cclxuICAgICAgbGlicmFyeVxyXG4gICAgICAgIC5nZXRCYWxhbmNlKGFjY291bnQpXHJcbiAgICAgICAgLnRoZW4oKGJhbGFuY2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCYWxhbmNlKGJhbGFuY2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xyXG4gICAgICAgICAgICBzZXRCYWxhbmNlKG51bGwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgc3RhbGUgPSB0cnVlXHJcbiAgICAgICAgc2V0QmFsYW5jZSh1bmRlZmluZWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZF0pIC8vIGVuc3VyZXMgcmVmcmVzaCBpZiByZWZlcmVudGlhbCBpZGVudGl0eSBvZiBsaWJyYXJ5IGRvZXNuJ3QgY2hhbmdlIGFjcm9zcyBjaGFpbklkc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+QmFsYW5jZTwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJnb2xkXCI+XHJcbiAgICAgICAg8J+SsFxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntiYWxhbmNlID09PSBudWxsID8gJ0Vycm9yJyA6IGJhbGFuY2UgPyBgzp4ke2Zvcm1hdEV0aGVyKGJhbGFuY2UpfWAgOiAnJ308L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCB7IGFjdGl2ZSwgZXJyb3IgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luOiAnMXJlbScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT57YWN0aXZlID8gJ/Cfn6InIDogZXJyb3IgPyAn8J+UtCcgOiAn8J+foCd9PC9oMT5cclxuICAgICAgPGgzXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgbWluLWNvbnRlbnQgMWZyJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnMjByZW0nLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogJzJyZW0nLFxyXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENoYWluSWQgLz5cclxuICAgICAgICA8QmxvY2tOdW1iZXIgLz5cclxuICAgICAgICA8QWNjb3VudCAvPlxyXG4gICAgICAgIDxCYWxhbmNlIC8+XHJcbiAgICAgIDwvaDM+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlV2ViM1JlYWN0PFdlYjNQcm92aWRlcj4oKVxyXG4gIGNvbnN0IHsgY29ubmVjdG9yLCBsaWJyYXJ5LCBjaGFpbklkLCBhY2NvdW50LCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSwgYWN0aXZlLCBlcnJvciB9ID0gY29udGV4dFxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gcmVjb2duaXplIHRoZSBjb25uZWN0b3IgY3VycmVudGx5IGJlaW5nIGFjdGl2YXRlZFxyXG4gIGNvbnN0IFthY3RpdmF0aW5nQ29ubmVjdG9yLCBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZhdGluZ0Nvbm5lY3RvciAmJiBhY3RpdmF0aW5nQ29ubmVjdG9yID09PSBjb25uZWN0b3IpIHtcclxuICAgICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcih1bmRlZmluZWQpXHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2YXRpbmdDb25uZWN0b3IsIGNvbm5lY3Rvcl0pXHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBlYWdlcmx5IGNvbm5lY3QgdG8gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHMgYW5kIGhhcyBncmFudGVkIGFjY2VzcyBhbHJlYWR5XHJcbiAgY29uc3QgdHJpZWRFYWdlciA9IHVzZUVhZ2VyQ29ubmVjdCgpXHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBjb25uZWN0IGluIHJlYWN0aW9uIHRvIGNlcnRhaW4gZXZlbnRzIG9uIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzXHJcbiAgdXNlSW5hY3RpdmVMaXN0ZW5lcighdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnMjByZW0nLFxyXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge09iamVjdC5rZXlzKGNvbm5lY3RvcnNCeU5hbWUpLm1hcChuYW1lID0+IHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25uZWN0b3IgPSBjb25uZWN0b3JzQnlOYW1lW25hbWVdXHJcbiAgICAgICAgICBjb25zdCBhY3RpdmF0aW5nID0gY3VycmVudENvbm5lY3RvciA9PT0gYWN0aXZhdGluZ0Nvbm5lY3RvclxyXG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkID0gY3VycmVudENvbm5lY3RvciA9PT0gY29ubmVjdG9yXHJcbiAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICF0cmllZEVhZ2VyIHx8ICEhYWN0aXZhdGluZ0Nvbm5lY3RvciB8fCBjb25uZWN0ZWQgfHwgISFlcnJvclxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3RpdmF0aW5nID8gJ29yYW5nZScgOiBjb25uZWN0ZWQgPyAnZ3JlZW4nIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGlzYWJsZWQgPyAndW5zZXQnIDogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICBrZXk9e25hbWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3RvcihjdXJyZW50Q29ubmVjdG9yKVxyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGUoY29ubmVjdG9yc0J5TmFtZVtuYW1lXSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAwIDAgMXJlbSdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2FjdGl2YXRpbmcgJiYgPFNwaW5uZXIgY29sb3I9eydibGFjayd9IHN0eWxlPXt7IGhlaWdodDogJzI1JScsIG1hcmdpbkxlZnQ6ICctMXJlbScgfX0gLz59XHJcbiAgICAgICAgICAgICAgICB7Y29ubmVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIOKchVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgeyhhY3RpdmUgfHwgZXJyb3IpICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcycmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRlYWN0aXZhdGUoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWFjdGl2YXRlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7ISFlcnJvciAmJiA8aDQgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMXJlbScsIG1hcmdpbkJvdHRvbTogJzAnIH19PntnZXRFcnJvck1lc3NhZ2UoZXJyb3IpfTwvaDQ+fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7ISEobGlicmFyeSAmJiBhY2NvdW50KSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxpYnJhcnlcclxuICAgICAgICAgICAgICAgIC5nZXRTaWduZXIoYWNjb3VudClcclxuICAgICAgICAgICAgICAgIC5zaWduTWVzc2FnZSgn8J+RiycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoc2lnbmF0dXJlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KGBTdWNjZXNzIVxcblxcbiR7c2lnbmF0dXJlfWApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnRmFpbHVyZSEnICsgKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBgXFxuXFxuJHtlcnJvci5tZXNzYWdlfWAgOiAnJykpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaWduIE1lc3NhZ2VcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyEhKGNvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5OZXR3b3JrXSAmJiBjaGFpbklkKSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2hhbmdlQ2hhaW5JZChjaGFpbklkID09PSAxID8gNCA6IDEpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN3aXRjaCBOZXR3b3Jrc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLldhbGxldENvbm5lY3RdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgV2FsbGV0Q29ubmVjdCBTZXNzaW9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuV2FsbGV0TGlua10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBXYWxsZXRMaW5rIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5Gb3J0bWF0aWNdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgRm9ydG1hdGljIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5NYWdpY10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBNYWdpYyBTZXNzaW9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuUG9ydGlzXSAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y2hhaW5JZCAhPT0gdW5kZWZpbmVkICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNoYW5nZU5ldHdvcmsoY2hhaW5JZCA9PT0gMSA/IDEwMCA6IDEpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN3aXRjaCBOZXR3b3Jrc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEtpbGwgUG9ydGlzIFNlc3Npb25cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuVG9ydXNdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgVG9ydXMgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
  ConnectorNames["Bsc"] = "Injected";
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

var connectorsByName = (_connectorsByName = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Injected, _connectors__WEBPACK_IMPORTED_MODULE_10__["injected"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Bsc, _connectors__WEBPACK_IMPORTED_MODULE_10__["bscConnector"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Network, _connectors__WEBPACK_IMPORTED_MODULE_10__["network"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.WalletConnect, _connectors__WEBPACK_IMPORTED_MODULE_10__["walletconnect"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.WalletLink, _connectors__WEBPACK_IMPORTED_MODULE_10__["walletlink"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Ledger, _connectors__WEBPACK_IMPORTED_MODULE_10__["ledger"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Trezor, _connectors__WEBPACK_IMPORTED_MODULE_10__["trezor"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Lattice, _connectors__WEBPACK_IMPORTED_MODULE_10__["lattice"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Frame, _connectors__WEBPACK_IMPORTED_MODULE_10__["frame"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Authereum, _connectors__WEBPACK_IMPORTED_MODULE_10__["authereum"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Fortmatic, _connectors__WEBPACK_IMPORTED_MODULE_10__["fortmatic"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Magic, _connectors__WEBPACK_IMPORTED_MODULE_10__["magic"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Portis, _connectors__WEBPACK_IMPORTED_MODULE_10__["portis"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Torus, _connectors__WEBPACK_IMPORTED_MODULE_10__["torus"]), _connectorsByName);

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
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 101,
      columnNumber: 7
    }
  }, "Chain Id"), __jsx("span", {
    role: "img",
    "aria-label": "chain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, "\u26D3"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 146,
      columnNumber: 7
    }
  }, "Block Number"), __jsx("span", {
    role: "img",
    "aria-label": "numbers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, "\uD83D\uDD22"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
      lineNumber: 160,
      columnNumber: 7
    }
  }, "Account"), __jsx("span", {
    role: "img",
    "aria-label": "robot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, "\uD83E\uDD16"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
      lineNumber: 205,
      columnNumber: 7
    }
  }, "Balance"), __jsx("span", {
    role: "img",
    "aria-label": "gold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, "\uD83D\uDCB0"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
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
      lineNumber: 219,
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
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx(ChainId, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }), __jsx(BlockNumber, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }), __jsx(Account, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  }), __jsx(Balance, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
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
      lineNumber: 259,
      columnNumber: 7
    }
  }), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
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
      lineNumber: 261,
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
        lineNumber: 277,
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
        lineNumber: 292,
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
        lineNumber: 304,
        columnNumber: 32
      }
    }), connected && __jsx("span", {
      role: "img",
      "aria-label": "check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
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
      lineNumber: 316,
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
      lineNumber: 318,
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
      lineNumber: 334,
      columnNumber: 21
    }
  }, getErrorMessage(error))), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
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
      lineNumber: 339,
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
      lineNumber: 349,
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
      lineNumber: 371,
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
      lineNumber: 385,
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
      lineNumber: 399,
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
      lineNumber: 413,
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
      lineNumber: 427,
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
      lineNumber: 443,
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
      lineNumber: 456,
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
      lineNumber: 471,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNvbm5lY3Rvck5hbWVzIiwiY29ubmVjdG9yc0J5TmFtZSIsIkluamVjdGVkIiwiaW5qZWN0ZWQiLCJCc2MiLCJic2NDb25uZWN0b3IiLCJOZXR3b3JrIiwibmV0d29yayIsIldhbGxldENvbm5lY3QiLCJ3YWxsZXRjb25uZWN0IiwiV2FsbGV0TGluayIsIndhbGxldGxpbmsiLCJMZWRnZXIiLCJsZWRnZXIiLCJUcmV6b3IiLCJ0cmV6b3IiLCJMYXR0aWNlIiwibGF0dGljZSIsIkZyYW1lIiwiZnJhbWUiLCJBdXRoZXJldW0iLCJhdXRoZXJldW0iLCJGb3J0bWF0aWMiLCJmb3J0bWF0aWMiLCJNYWdpYyIsIm1hZ2ljIiwiUG9ydGlzIiwicG9ydGlzIiwiVG9ydXMiLCJ0b3J1cyIsImdldEVycm9yTWVzc2FnZSIsImVycm9yIiwiTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IiLCJVbnN1cHBvcnRlZENoYWluSWRFcnJvciIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkIiwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIiwiY29uc29sZSIsImdldExpYnJhcnkiLCJwcm92aWRlciIsImxpYnJhcnkiLCJXZWIzUHJvdmlkZXIiLCJwb2xsaW5nSW50ZXJ2YWwiLCJDaGFpbklkIiwidXNlV2ViM1JlYWN0IiwiY2hhaW5JZCIsIkJsb2NrTnVtYmVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImJsb2NrTnVtYmVyIiwic2V0QmxvY2tOdW1iZXIiLCJ1c2VFZmZlY3QiLCJzdGFsZSIsImdldEJsb2NrTnVtYmVyIiwidGhlbiIsInVwZGF0ZUJsb2NrTnVtYmVyIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsInVuZGVmaW5lZCIsIkFjY291bnQiLCJhY2NvdW50Iiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiQmFsYW5jZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZ2V0QmFsYW5jZSIsImZvcm1hdEV0aGVyIiwiSGVhZGVyIiwiYWN0aXZlIiwibWFyZ2luIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWF4V2lkdGgiLCJsaW5lSGVpZ2h0IiwiQXBwIiwiY29udGV4dCIsImNvbm5lY3RvciIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImFjdGl2YXRpbmdDb25uZWN0b3IiLCJzZXRBY3RpdmF0aW5nQ29ubmVjdG9yIiwidHJpZWRFYWdlciIsInVzZUVhZ2VyQ29ubmVjdCIsInVzZUluYWN0aXZlTGlzdGVuZXIiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibmFtZSIsImN1cnJlbnRDb25uZWN0b3IiLCJhY3RpdmF0aW5nIiwiY29ubmVjdGVkIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsImN1cnNvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImFsaWduSXRlbXMiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZ2V0U2lnbmVyIiwic2lnbk1lc3NhZ2UiLCJzaWduYXR1cmUiLCJ3aW5kb3ciLCJhbGVydCIsIm1lc3NhZ2UiLCJjaGFuZ2VDaGFpbklkIiwiY2xvc2UiLCJjaGFuZ2VOZXR3b3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBZ0JBO0lBRUtBLGM7O1dBQUFBLGM7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7QUFBQUEsZ0I7R0FBQUEs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dC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IHtcclxuICBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcixcclxuICBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWRcclxufSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSB9IGZyb20gJ0B3ZWIzLXJlYWN0L2ZyYW1lLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJ1xyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3VuaXRzJ1xyXG5cclxuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0LCB1c2VJbmFjdGl2ZUxpc3RlbmVyIH0gZnJvbSAnLi4vaG9va3MnXHJcbmltcG9ydCB7XHJcbiAgaW5qZWN0ZWQsXHJcbiAgYnNjQ29ubmVjdG9yLFxyXG4gIG5ldHdvcmssXHJcbiAgd2FsbGV0Y29ubmVjdCxcclxuICB3YWxsZXRsaW5rLFxyXG4gIGxlZGdlcixcclxuICB0cmV6b3IsXHJcbiAgbGF0dGljZSxcclxuICBmcmFtZSxcclxuICBhdXRoZXJldW0sXHJcbiAgZm9ydG1hdGljLFxyXG4gIG1hZ2ljLFxyXG4gIHBvcnRpcyxcclxuICB0b3J1c1xyXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMnXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInXHJcblxyXG5lbnVtIENvbm5lY3Rvck5hbWVzIHtcclxuICBJbmplY3RlZCA9ICdJbmplY3RlZCcsXHJcbiAgQnNjID0gJ0luamVjdGVkJyxcclxuICBOZXR3b3JrID0gJ05ldHdvcmsnLFxyXG4gIFdhbGxldENvbm5lY3QgPSAnV2FsbGV0Q29ubmVjdCcsXHJcbiAgV2FsbGV0TGluayA9ICdXYWxsZXRMaW5rJyxcclxuICBMZWRnZXIgPSAnTGVkZ2VyJyxcclxuICBUcmV6b3IgPSAnVHJlem9yJyxcclxuICBMYXR0aWNlID0gJ0xhdHRpY2UnLFxyXG4gIEZyYW1lID0gJ0ZyYW1lJyxcclxuICBBdXRoZXJldW0gPSAnQXV0aGVyZXVtJyxcclxuICBGb3J0bWF0aWMgPSAnRm9ydG1hdGljJyxcclxuICBNYWdpYyA9ICdNYWdpYycsXHJcbiAgUG9ydGlzID0gJ1BvcnRpcycsXHJcbiAgVG9ydXMgPSAnVG9ydXMnXHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3RvcnNCeU5hbWU6IHsgW2Nvbm5lY3Rvck5hbWUgaW4gQ29ubmVjdG9yTmFtZXNdOiBhbnkgfSA9IHtcclxuICBbQ29ubmVjdG9yTmFtZXMuSW5qZWN0ZWRdOiBpbmplY3RlZCxcclxuICBbQ29ubmVjdG9yTmFtZXMuQnNjXTogYnNjQ29ubmVjdG9yLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5OZXR3b3JrXTogbmV0d29yayxcclxuICBbQ29ubmVjdG9yTmFtZXMuV2FsbGV0Q29ubmVjdF06IHdhbGxldGNvbm5lY3QsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLldhbGxldExpbmtdOiB3YWxsZXRsaW5rLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5MZWRnZXJdOiBsZWRnZXIsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLlRyZXpvcl06IHRyZXpvcixcclxuICBbQ29ubmVjdG9yTmFtZXMuTGF0dGljZV06IGxhdHRpY2UsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkZyYW1lXTogZnJhbWUsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkF1dGhlcmV1bV06IGF1dGhlcmV1bSxcclxuICBbQ29ubmVjdG9yTmFtZXMuRm9ydG1hdGljXTogZm9ydG1hdGljLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5NYWdpY106IG1hZ2ljLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5Qb3J0aXNdOiBwb3J0aXMsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLlRvcnVzXTogdG9ydXNcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yOiBFcnJvcikge1xyXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIE5vRXRoZXJldW1Qcm92aWRlckVycm9yKSB7XHJcbiAgICByZXR1cm4gJ05vIEV0aGVyZXVtIGJyb3dzZXIgZXh0ZW5zaW9uIGRldGVjdGVkLCBpbnN0YWxsIE1ldGFNYXNrIG9uIGRlc2t0b3Agb3IgdmlzaXQgZnJvbSBhIGRBcHAgYnJvd3NlciBvbiBtb2JpbGUuJ1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBVbnN1cHBvcnRlZENoYWluSWRFcnJvcikge1xyXG4gICAgcmV0dXJuIFwiWW91J3JlIGNvbm5lY3RlZCB0byBhbiB1bnN1cHBvcnRlZCBuZXR3b3JrLlwiXHJcbiAgfSBlbHNlIGlmIChcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWQgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB8fFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZVxyXG4gICkge1xyXG4gICAgcmV0dXJuICdQbGVhc2UgYXV0aG9yaXplIHRoaXMgd2Vic2l0ZSB0byBhY2Nlc3MgeW91ciBFdGhlcmV1bSBhY2NvdW50LidcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIHJldHVybiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4gQ2hlY2sgdGhlIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlscy4nXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xyXG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxyXG4gIGxpYnJhcnkucG9sbGluZ0ludGVydmFsID0gMTIwMDBcclxuICByZXR1cm4gbGlicmFyeVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxyXG4gICAgICA8QXBwIC8+XHJcbiAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hhaW5JZCgpIHtcclxuICBjb25zdCB7IGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5DaGFpbiBJZDwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjaGFpblwiPlxyXG4gICAgICAgIOKbk1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntjaGFpbklkID8/ICcnfTwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQmxvY2tOdW1iZXIoKSB7XHJcbiAgY29uc3QgeyBjaGFpbklkLCBsaWJyYXJ5IH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICBjb25zdCBbYmxvY2tOdW1iZXIsIHNldEJsb2NrTnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKTogYW55ID0+IHtcclxuICAgIGlmICghIWxpYnJhcnkpIHtcclxuICAgICAgbGV0IHN0YWxlID0gZmFsc2VcclxuXHJcbiAgICAgIGxpYnJhcnlcclxuICAgICAgICAuZ2V0QmxvY2tOdW1iZXIoKVxyXG4gICAgICAgIC50aGVuKChibG9ja051bWJlcjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJsb2NrTnVtYmVyKGJsb2NrTnVtYmVyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmxvY2tOdW1iZXIobnVsbClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgY29uc3QgdXBkYXRlQmxvY2tOdW1iZXIgPSAoYmxvY2tOdW1iZXI6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldEJsb2NrTnVtYmVyKGJsb2NrTnVtYmVyKVxyXG4gICAgICB9XHJcbiAgICAgIGxpYnJhcnkub24oJ2Jsb2NrJywgdXBkYXRlQmxvY2tOdW1iZXIpXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHN0YWxlID0gdHJ1ZVxyXG4gICAgICAgIGxpYnJhcnkucmVtb3ZlTGlzdGVuZXIoJ2Jsb2NrJywgdXBkYXRlQmxvY2tOdW1iZXIpXHJcbiAgICAgICAgc2V0QmxvY2tOdW1iZXIodW5kZWZpbmVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2xpYnJhcnksIGNoYWluSWRdKSAvLyBlbnN1cmVzIHJlZnJlc2ggaWYgcmVmZXJlbnRpYWwgaWRlbnRpdHkgb2YgbGlicmFyeSBkb2Vzbid0IGNoYW5nZSBhY3Jvc3MgY2hhaW5JZHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkJsb2NrIE51bWJlcjwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJudW1iZXJzXCI+XHJcbiAgICAgICAg8J+UolxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntibG9ja051bWJlciA9PT0gbnVsbCA/ICdFcnJvcicgOiBibG9ja051bWJlciA/PyAnJ308L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFjY291bnQoKSB7XHJcbiAgY29uc3QgeyBhY2NvdW50IH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+QWNjb3VudDwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJyb2JvdFwiPlxyXG4gICAgICAgIPCfpJZcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICB7YWNjb3VudCA9PT0gbnVsbFxyXG4gICAgICAgICAgPyAnLSdcclxuICAgICAgICAgIDogYWNjb3VudFxyXG4gICAgICAgICAgPyBgJHthY2NvdW50LnN1YnN0cmluZygwLCA2KX0uLi4ke2FjY291bnQuc3Vic3RyaW5nKGFjY291bnQubGVuZ3RoIC0gNCl9YFxyXG4gICAgICAgICAgOiAnJ31cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBCYWxhbmNlKCkge1xyXG4gIGNvbnN0IHsgYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gUmVhY3QudXNlU3RhdGUoKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKTogYW55ID0+IHtcclxuICAgIGlmICghIWFjY291bnQgJiYgISFsaWJyYXJ5KSB7XHJcbiAgICAgIGxldCBzdGFsZSA9IGZhbHNlXHJcblxyXG4gICAgICBsaWJyYXJ5XHJcbiAgICAgICAgLmdldEJhbGFuY2UoYWNjb3VudClcclxuICAgICAgICAudGhlbigoYmFsYW5jZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJhbGFuY2UoYmFsYW5jZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJhbGFuY2UobnVsbClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzdGFsZSA9IHRydWVcclxuICAgICAgICBzZXRCYWxhbmNlKHVuZGVmaW5lZClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFthY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkXSkgLy8gZW5zdXJlcyByZWZyZXNoIGlmIHJlZmVyZW50aWFsIGlkZW50aXR5IG9mIGxpYnJhcnkgZG9lc24ndCBjaGFuZ2UgYWNyb3NzIGNoYWluSWRzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5CYWxhbmNlPC9zcGFuPlxyXG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImdvbGRcIj5cclxuICAgICAgICDwn5KwXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+e2JhbGFuY2UgPT09IG51bGwgPyAnRXJyb3InIDogYmFsYW5jZSA/IGDOniR7Zm9ybWF0RXRoZXIoYmFsYW5jZSl9YCA6ICcnfTwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46ICcxcmVtJywgdGV4dEFsaWduOiAncmlnaHQnIH19PnthY3RpdmUgPyAn8J+foicgOiBlcnJvciA/ICfwn5S0JyA6ICfwn5+gJ308L2gxPlxyXG4gICAgICA8aDNcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciBtaW4tY29udGVudCAxZnInLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMnJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q2hhaW5JZCAvPlxyXG4gICAgICAgIDxCbG9ja051bWJlciAvPlxyXG4gICAgICAgIDxBY2NvdW50IC8+XHJcbiAgICAgICAgPEJhbGFuY2UgLz5cclxuICAgICAgPC9oMz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VXZWIzUmVhY3Q8V2ViM1Byb3ZpZGVyPigpXHJcbiAgY29uc3QgeyBjb25uZWN0b3IsIGxpYnJhcnksIGNoYWluSWQsIGFjY291bnQsIGFjdGl2YXRlLCBkZWFjdGl2YXRlLCBhY3RpdmUsIGVycm9yIH0gPSBjb250ZXh0XHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byByZWNvZ25pemUgdGhlIGNvbm5lY3RvciBjdXJyZW50bHkgYmVpbmcgYWN0aXZhdGVkXHJcbiAgY29uc3QgW2FjdGl2YXRpbmdDb25uZWN0b3IsIHNldEFjdGl2YXRpbmdDb25uZWN0b3JdID0gUmVhY3QudXNlU3RhdGU8YW55PigpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3RpdmF0aW5nQ29ubmVjdG9yICYmIGFjdGl2YXRpbmdDb25uZWN0b3IgPT09IGNvbm5lY3Rvcikge1xyXG4gICAgICBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yKHVuZGVmaW5lZClcclxuICAgIH1cclxuICB9LCBbYWN0aXZhdGluZ0Nvbm5lY3RvciwgY29ubmVjdG9yXSlcclxuXHJcbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIGVhZ2VybHkgY29ubmVjdCB0byB0aGUgaW5qZWN0ZWQgZXRoZXJldW0gcHJvdmlkZXIsIGlmIGl0IGV4aXN0cyBhbmQgaGFzIGdyYW50ZWQgYWNjZXNzIGFscmVhZHlcclxuICBjb25zdCB0cmllZEVhZ2VyID0gdXNlRWFnZXJDb25uZWN0KClcclxuXHJcbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIGNvbm5lY3QgaW4gcmVhY3Rpb24gdG8gY2VydGFpbiBldmVudHMgb24gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHNcclxuICB1c2VJbmFjdGl2ZUxpc3RlbmVyKCF0cmllZEVhZ2VyIHx8ICEhYWN0aXZhdGluZ0Nvbm5lY3RvcilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7T2JqZWN0LmtleXMoY29ubmVjdG9yc0J5TmFtZSkubWFwKG5hbWUgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudENvbm5lY3RvciA9IGNvbm5lY3RvcnNCeU5hbWVbbmFtZV1cclxuICAgICAgICAgIGNvbnN0IGFjdGl2YXRpbmcgPSBjdXJyZW50Q29ubmVjdG9yID09PSBhY3RpdmF0aW5nQ29ubmVjdG9yXHJcbiAgICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBjdXJyZW50Q29ubmVjdG9yID09PSBjb25uZWN0b3JcclxuICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gIXRyaWVkRWFnZXIgfHwgISFhY3RpdmF0aW5nQ29ubmVjdG9yIHx8IGNvbm5lY3RlZCB8fCAhIWVycm9yXHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFjdGl2YXRpbmcgPyAnb3JhbmdlJyA6IGNvbm5lY3RlZCA/ICdncmVlbicgOiAndW5zZXQnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICd1bnNldCcgOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yKGN1cnJlbnRDb25uZWN0b3IpXHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZShjb25uZWN0b3JzQnlOYW1lW25hbWVdKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMCAxcmVtJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZhdGluZyAmJiA8U3Bpbm5lciBjb2xvcj17J2JsYWNrJ30gc3R5bGU9e3sgaGVpZ2h0OiAnMjUlJywgbWFyZ2luTGVmdDogJy0xcmVtJyB9fSAvPn1cclxuICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4pyFXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICB7KGFjdGl2ZSB8fCBlcnJvcikgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogJzJyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGVhY3RpdmF0ZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlYWN0aXZhdGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHshIWVycm9yICYmIDxoNCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJywgbWFyZ2luQm90dG9tOiAnMCcgfX0+e2dldEVycm9yTWVzc2FnZShlcnJvcil9PC9oND59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcclxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHshIShsaWJyYXJ5ICYmIGFjY291bnQpICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGlicmFyeVxyXG4gICAgICAgICAgICAgICAgLmdldFNpZ25lcihhY2NvdW50KVxyXG4gICAgICAgICAgICAgICAgLnNpZ25NZXNzYWdlKCfwn5GLJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChzaWduYXR1cmU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoYFN1Y2Nlc3MhXFxuXFxuJHtzaWduYXR1cmV9YClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdGYWlsdXJlIScgKyAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGBcXG5cXG4ke2Vycm9yLm1lc3NhZ2V9YCA6ICcnKSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNpZ24gTWVzc2FnZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ISEoY29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLk5ldHdvcmtdICYmIGNoYWluSWQpICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jaGFuZ2VDaGFpbklkKGNoYWluSWQgPT09IDEgPyA0IDogMSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3dpdGNoIE5ldHdvcmtzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuV2FsbGV0Q29ubmVjdF0gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBXYWxsZXRDb25uZWN0IFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5XYWxsZXRMaW5rXSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2xvc2UoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBLaWxsIFdhbGxldExpbmsgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLkZvcnRtYXRpY10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBGb3J0bWF0aWMgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLk1hZ2ljXSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2xvc2UoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBLaWxsIE1hZ2ljIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5Qb3J0aXNdICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjaGFpbklkICE9PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2hhbmdlTmV0d29yayhjaGFpbklkID09PSAxID8gMTAwIDogMSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU3dpdGNoIE5ldHdvcmtzXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgS2lsbCBQb3J0aXMgU2Vzc2lvblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5Ub3J1c10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBUb3J1cyBTZXNzaW9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
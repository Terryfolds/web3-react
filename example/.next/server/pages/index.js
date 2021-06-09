module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Spinner.tsx":
/*!********************************!*\
  !*** ./components/Spinner.tsx ***!
  \********************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\jesh\\Desktop\\000O1T\\web3-react\\example\\components\\Spinner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->

function Spinner(_ref) {
  let {
    color
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["color"]);

  return __jsx("svg", _extends({
    width: "38",
    height: "38",
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("g", {
    transform: "translate(1 1)",
    strokeWidth: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("circle", {
    strokeOpacity: ".5",
    cx: "18",
    cy: "18",
    r: "18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "1s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./connectors.ts":
/*!***********************!*\
  !*** ./connectors.ts ***!
  \***********************/
/*! exports provided: injected, bscConnector, network, walletconnect, walletlink, ledger, trezor, lattice, frame, authereum, fortmatic, magic, portis, torus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injected", function() { return injected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bscConnector", function() { return bscConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "network", function() { return network; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletconnect", function() { return walletconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletlink", function() { return walletlink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ledger", function() { return ledger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trezor", function() { return trezor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lattice", function() { return lattice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authereum", function() { return authereum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fortmatic", function() { return fortmatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magic", function() { return magic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portis", function() { return portis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "torus", function() { return torus; });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/injected-connector */ "@web3-react/injected-connector");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @binance-chain/bsc-connector */ "@binance-chain/bsc-connector");
/* harmony import */ var _binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/network-connector */ "@web3-react/network-connector");
/* harmony import */ var _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_network_connector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "@web3-react/walletconnect-connector");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/walletlink-connector */ "@web3-react/walletlink-connector");
/* harmony import */ var _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/ledger-connector */ "@web3-react/ledger-connector");
/* harmony import */ var _web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/trezor-connector */ "@web3-react/trezor-connector");
/* harmony import */ var _web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/lattice-connector */ "@web3-react/lattice-connector");
/* harmony import */ var _web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @web3-react/frame-connector */ "@web3-react/frame-connector");
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @web3-react/authereum-connector */ "@web3-react/authereum-connector");
/* harmony import */ var _web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @web3-react/fortmatic-connector */ "@web3-react/fortmatic-connector");
/* harmony import */ var _web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @web3-react/magic-connector */ "@web3-react/magic-connector");
/* harmony import */ var _web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @web3-react/portis-connector */ "@web3-react/portis-connector");
/* harmony import */ var _web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @web3-react/torus-connector */ "@web3-react/torus-connector");
/* harmony import */ var _web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_13__);














const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
  4: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213"
};
const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__["InjectedConnector"]({
  supportedChainIds: [56, 97]
});
const bscConnector = new _binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_1__["BscConnector"]({
  supportedChainIds: [56]
});
const network = new _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_2__["NetworkConnector"]({
  urls: {
    1: RPC_URLS[1],
    4: RPC_URLS[4]
  },
  defaultChainId: 1
});
const walletconnect = new _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__["WalletConnectConnector"]({
  rpc: {
    1: RPC_URLS[1]
  },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});
const walletlink = new _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_4__["WalletLinkConnector"]({
  url: RPC_URLS[1],
  appName: 'web3-react example'
});
const ledger = new _web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_5__["LedgerConnector"]({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL
});
const trezor = new _web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_6__["TrezorConnector"]({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: 'dummy@abc.xyz',
  manifestAppUrl: 'http://localhost:1234'
});
const lattice = new _web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_7__["LatticeConnector"]({
  chainId: 4,
  appName: 'web3-react',
  url: RPC_URLS[4]
});
const frame = new _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_8__["FrameConnector"]({
  supportedChainIds: [1]
});
const authereum = new _web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_9__["AuthereumConnector"]({
  chainId: 42
});
const fortmatic = new _web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_10__["FortmaticConnector"]({
  apiKey: "pk_test_A6260FCBAA2EBDFB",
  chainId: 4
});
const magic = new _web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_11__["MagicConnector"]({
  apiKey: "pk_test_398B82F5F0E88874",
  chainId: 4,
  email: 'hello@example.org'
});
const portis = new _web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_12__["PortisConnector"]({
  dAppId: "e9be171c-2b7f-4ff0-8db9-327707511ee2",
  networks: [1, 100]
});
const torus = new _web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_13__["TorusConnector"]({
  chainId: 1
});

/***/ }),

/***/ "./hooks.ts":
/*!******************!*\
  !*** ./hooks.ts ***!
  \******************/
/*! exports provided: useEagerConnect, useInactiveListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEagerConnect", function() { return useEagerConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInactiveListener", function() { return useInactiveListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectors */ "./connectors.ts");



function useEagerConnect() {
  const {
    activate,
    active
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const {
    0: tried,
    1: setTried
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _connectors__WEBPACK_IMPORTED_MODULE_2__["injected"].isAuthorized().then(isAuthorized => {
      if (isAuthorized) {
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"], undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, []); // intentionally only running on mount (make sure it's only mounted once :))
  // if the connection worked, wait until we get confirmation of that to flip the flag

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);
  return tried;
}
function useInactiveListener(suppress = false) {
  const {
    active,
    error,
    activate
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      ethereum
    } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.log("Handling 'connect' event");
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      const handleChainChanged = chainId => {
        console.log("Handling 'chainChanged' event with payload", chainId);
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      const handleAccountsChanged = accounts => {
        console.log("Handling 'accountsChanged' event with payload", accounts);

        if (accounts.length > 0) {
          activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
        }
      };

      const handleNetworkChanged = networkId => {
        console.log("Handling 'networkChanged' event with payload", networkId);
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('networkChanged', handleNetworkChanged);
      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
          ethereum.removeListener('networkChanged', handleNetworkChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/injected-connector */ "@web3-react/injected-connector");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "@web3-react/walletconnect-connector");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/frame-connector */ "@web3-react/frame-connector");
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/providers */ "@ethersproject/providers");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ "@ethersproject/units");
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks */ "./hooks.ts");
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../connectors */ "./connectors.ts");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.tsx");
var _jsxFileName = "C:\\Users\\jesh\\Desktop\\000O1T\\web3-react\\example\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var ConnectorNames;

(function (ConnectorNames) {
  ConnectorNames["Injected"] = "Connect Wallet";
})(ConnectorNames || (ConnectorNames = {}));

const connectorsByName = {
  [ConnectorNames.Injected]: _connectors__WEBPACK_IMPORTED_MODULE_8__["injected"]
};

function getErrorMessage(error) {
  if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__["NoEthereumProviderError"]) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
  } else if (error instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_1__["UnsupportedChainIdError"]) {
    return "You're connected to an unsupported network.";
  } else if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__["UserRejectedRequestError"] || error instanceof _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__["UserRejectedRequestError"] || error instanceof _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__["UserRejectedRequestError"]) {
    return 'Please authorize this website to access your Ethereum account.';
  } else {
    console.error(error);
    return 'An unknown error occurred. Check the console for more details.';
  }
}

function getLibrary(provider) {
  const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__["Web3Provider"](provider);
  library.pollingInterval = 12000;
  return library;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["Web3ReactProvider"], {
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
  const {
    chainId
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
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

function BlockNumber() {
  const {
    chainId,
    library
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const [blockNumber, setBlockNumber] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!!library) {
      let stale = false;
      library.getBlockNumber().then(blockNumber => {
        if (!stale) {
          setBlockNumber(blockNumber);
        }
      }).catch(() => {
        if (!stale) {
          setBlockNumber(null);
        }
      });

      const updateBlockNumber = blockNumber => {
        setBlockNumber(blockNumber);
      };

      library.on('block', updateBlockNumber);
      return () => {
        stale = true;
        library.removeListener('block', updateBlockNumber);
        setBlockNumber(undefined);
      };
    }
  }, [library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
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

function Account() {
  const {
    account
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
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
  }, account === null ? '-' : account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : ''));
}

function Balance() {
  const {
    account,
    library,
    chainId
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const [balance, setBalance] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!!account && !!library) {
      let stale = false;
      library.getBalance(account).then(balance => {
        if (!stale) {
          setBalance(balance);
        }
      }).catch(() => {
        if (!stale) {
          setBalance(null);
        }
      });
      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
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
  }, balance === null ? 'Error' : balance ? `Ξ${Object(_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__["formatEther"])(balance)}` : ''));
}

function Header() {
  const {
    active,
    error
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
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

function App() {
  const context = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error
  } = context; // handle logic to recognize the connector currently being activated

  const [activatingConnector, setActivatingConnector] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]); // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already

  const triedEager = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useEagerConnect"])(); // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists

  Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useInactiveListener"])(!triedEager || !!activatingConnector);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, {
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
  }, Object.keys(connectorsByName).map(name => {
    const currentConnector = connectorsByName[name];
    const activating = currentConnector === activatingConnector;
    const connected = currentConnector === connector;
    const disabled = !triedEager || !!activatingConnector || connected || !!error;
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
      onClick: () => {
        setActivatingConnector(currentConnector);
        activate(connectorsByName[name]);
      },
      __self: this,
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
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 15
      }
    }, activating && __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["Spinner"], {
      color: 'black',
      style: {
        height: '25%',
        marginLeft: '-1rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 32
      }
    }), connected && __jsx("span", {
      role: "img",
      "aria-label": "check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
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
    onClick: () => {
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

/***/ }),

/***/ "@binance-chain/bsc-connector":
/*!***********************************************!*\
  !*** external "@binance-chain/bsc-connector" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@binance-chain/bsc-connector");

/***/ }),

/***/ "@ethersproject/providers":
/*!*******************************************!*\
  !*** external "@ethersproject/providers" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/providers");

/***/ }),

/***/ "@ethersproject/units":
/*!***************************************!*\
  !*** external "@ethersproject/units" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/units");

/***/ }),

/***/ "@web3-react/authereum-connector":
/*!**************************************************!*\
  !*** external "@web3-react/authereum-connector" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/authereum-connector");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/core");

/***/ }),

/***/ "@web3-react/fortmatic-connector":
/*!**************************************************!*\
  !*** external "@web3-react/fortmatic-connector" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/fortmatic-connector");

/***/ }),

/***/ "@web3-react/frame-connector":
/*!**********************************************!*\
  !*** external "@web3-react/frame-connector" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/frame-connector");

/***/ }),

/***/ "@web3-react/injected-connector":
/*!*************************************************!*\
  !*** external "@web3-react/injected-connector" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ "@web3-react/lattice-connector":
/*!************************************************!*\
  !*** external "@web3-react/lattice-connector" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/lattice-connector");

/***/ }),

/***/ "@web3-react/ledger-connector":
/*!***********************************************!*\
  !*** external "@web3-react/ledger-connector" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/ledger-connector");

/***/ }),

/***/ "@web3-react/magic-connector":
/*!**********************************************!*\
  !*** external "@web3-react/magic-connector" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/magic-connector");

/***/ }),

/***/ "@web3-react/network-connector":
/*!************************************************!*\
  !*** external "@web3-react/network-connector" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/network-connector");

/***/ }),

/***/ "@web3-react/portis-connector":
/*!***********************************************!*\
  !*** external "@web3-react/portis-connector" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/portis-connector");

/***/ }),

/***/ "@web3-react/torus-connector":
/*!**********************************************!*\
  !*** external "@web3-react/torus-connector" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/torus-connector");

/***/ }),

/***/ "@web3-react/trezor-connector":
/*!***********************************************!*\
  !*** external "@web3-react/trezor-connector" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/trezor-connector");

/***/ }),

/***/ "@web3-react/walletconnect-connector":
/*!******************************************************!*\
  !*** external "@web3-react/walletconnect-connector" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/walletconnect-connector");

/***/ }),

/***/ "@web3-react/walletlink-connector":
/*!***************************************************!*\
  !*** external "@web3-react/walletlink-connector" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/walletlink-connector");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGlubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb25uZWN0b3JzLnRzIiwid2VicGFjazovLy8uL2hvb2tzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmluYW5jZS1jaGFpbi9ic2MtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9hdXRoZXJldW0tY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2ZvcnRtYXRpYy1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9sYXR0aWNlLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2xlZGdlci1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9tYWdpYy1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9uZXR3b3JrLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L3BvcnRpcy1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC90b3J1cy1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC90cmV6b3ItY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC93YWxsZXRsaW5rLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiU3Bpbm5lciIsImNvbG9yIiwicmVzdCIsIlBPTExJTkdfSU5URVJWQUwiLCJSUENfVVJMUyIsInByb2Nlc3MiLCJSUENfVVJMXzQiLCJpbmplY3RlZCIsIkluamVjdGVkQ29ubmVjdG9yIiwic3VwcG9ydGVkQ2hhaW5JZHMiLCJic2NDb25uZWN0b3IiLCJCc2NDb25uZWN0b3IiLCJuZXR3b3JrIiwiTmV0d29ya0Nvbm5lY3RvciIsInVybHMiLCJkZWZhdWx0Q2hhaW5JZCIsIndhbGxldGNvbm5lY3QiLCJXYWxsZXRDb25uZWN0Q29ubmVjdG9yIiwicnBjIiwicXJjb2RlIiwicG9sbGluZ0ludGVydmFsIiwid2FsbGV0bGluayIsIldhbGxldExpbmtDb25uZWN0b3IiLCJ1cmwiLCJhcHBOYW1lIiwibGVkZ2VyIiwiTGVkZ2VyQ29ubmVjdG9yIiwiY2hhaW5JZCIsInRyZXpvciIsIlRyZXpvckNvbm5lY3RvciIsIm1hbmlmZXN0RW1haWwiLCJtYW5pZmVzdEFwcFVybCIsImxhdHRpY2UiLCJMYXR0aWNlQ29ubmVjdG9yIiwiZnJhbWUiLCJGcmFtZUNvbm5lY3RvciIsImF1dGhlcmV1bSIsIkF1dGhlcmV1bUNvbm5lY3RvciIsImZvcnRtYXRpYyIsIkZvcnRtYXRpY0Nvbm5lY3RvciIsImFwaUtleSIsIm1hZ2ljIiwiTWFnaWNDb25uZWN0b3IiLCJlbWFpbCIsInBvcnRpcyIsIlBvcnRpc0Nvbm5lY3RvciIsImRBcHBJZCIsIm5ldHdvcmtzIiwidG9ydXMiLCJUb3J1c0Nvbm5lY3RvciIsInVzZUVhZ2VyQ29ubmVjdCIsImFjdGl2YXRlIiwiYWN0aXZlIiwidXNlV2ViM1JlYWN0IiwidHJpZWQiLCJzZXRUcmllZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaXNBdXRob3JpemVkIiwidGhlbiIsInVuZGVmaW5lZCIsImNhdGNoIiwidXNlSW5hY3RpdmVMaXN0ZW5lciIsInN1cHByZXNzIiwiZXJyb3IiLCJldGhlcmV1bSIsIndpbmRvdyIsIm9uIiwiaGFuZGxlQ29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFpbkNoYW5nZWQiLCJoYW5kbGVBY2NvdW50c0NoYW5nZWQiLCJhY2NvdW50cyIsImxlbmd0aCIsImhhbmRsZU5ldHdvcmtDaGFuZ2VkIiwibmV0d29ya0lkIiwicmVtb3ZlTGlzdGVuZXIiLCJDb25uZWN0b3JOYW1lcyIsImNvbm5lY3RvcnNCeU5hbWUiLCJJbmplY3RlZCIsImdldEVycm9yTWVzc2FnZSIsIk5vRXRoZXJldW1Qcm92aWRlckVycm9yIiwiVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSIsImdldExpYnJhcnkiLCJwcm92aWRlciIsImxpYnJhcnkiLCJXZWIzUHJvdmlkZXIiLCJDaGFpbklkIiwiQmxvY2tOdW1iZXIiLCJibG9ja051bWJlciIsInNldEJsb2NrTnVtYmVyIiwiUmVhY3QiLCJzdGFsZSIsImdldEJsb2NrTnVtYmVyIiwidXBkYXRlQmxvY2tOdW1iZXIiLCJBY2NvdW50IiwiYWNjb3VudCIsInN1YnN0cmluZyIsIkJhbGFuY2UiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImdldEJhbGFuY2UiLCJmb3JtYXRFdGhlciIsIkhlYWRlciIsIm1hcmdpbiIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1heFdpZHRoIiwibGluZUhlaWdodCIsIkFwcCIsImNvbnRleHQiLCJjb25uZWN0b3IiLCJkZWFjdGl2YXRlIiwiYWN0aXZhdGluZ0Nvbm5lY3RvciIsInNldEFjdGl2YXRpbmdDb25uZWN0b3IiLCJ0cmllZEVhZ2VyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm5hbWUiLCJjdXJyZW50Q29ubmVjdG9yIiwiYWN0aXZhdGluZyIsImNvbm5lY3RlZCIsImRpc2FibGVkIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJjdXJzb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0N0RkE7O0FBQ08sU0FBU0EsT0FBVCxPQUEwQztBQUFBLE1BQXpCO0FBQUVDO0FBQUYsR0FBeUI7QUFBQSxNQUFiQyxJQUFhOztBQUMvQyxTQUNFO0FBQUssU0FBSyxFQUFDLElBQVg7QUFBZ0IsVUFBTSxFQUFDLElBQXZCO0FBQTRCLFdBQU8sRUFBQyxXQUFwQztBQUFnRCxTQUFLLEVBQUMsNEJBQXREO0FBQW1GLFVBQU0sRUFBRUQ7QUFBM0YsS0FBc0dDLElBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRTtBQUFHLFFBQUksRUFBQyxNQUFSO0FBQWUsWUFBUSxFQUFDLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxnQkFBYjtBQUE4QixlQUFXLEVBQUMsR0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsaUJBQWEsRUFBQyxJQUF0QjtBQUEyQixNQUFFLEVBQUMsSUFBOUI7QUFBbUMsTUFBRSxFQUFDLElBQXRDO0FBQTJDLEtBQUMsRUFBQyxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLEtBQUMsRUFBQyw2QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxpQkFBYSxFQUFDLFdBRGhCO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFJLEVBQUMsU0FIUDtBQUlFLE1BQUUsRUFBQyxXQUpMO0FBS0UsT0FBRyxFQUFDLElBTE47QUFNRSxlQUFXLEVBQUMsWUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQURGLENBREYsQ0FERjtBQW1CRCxDOzs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsS0FBekI7QUFDQSxNQUFNQyxRQUF1QyxHQUFHO0FBQzlDLEtBQUdDLCtEQUQyQztBQUU5QyxLQUFHQSwrREFBcUJDO0FBRnNCLENBQWhEO0FBS08sTUFBTUMsUUFBUSxHQUFHLElBQUlDLGdGQUFKLENBQXNCO0FBQUVDLG1CQUFpQixFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUw7QUFBckIsQ0FBdEIsQ0FBakI7QUFFQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUMseUVBQUosQ0FBaUI7QUFBRUYsbUJBQWlCLEVBQUUsQ0FBQyxFQUFEO0FBQXJCLENBQWpCLENBQXJCO0FBRUEsTUFBTUcsT0FBTyxHQUFHLElBQUlDLDhFQUFKLENBQXFCO0FBQzFDQyxNQUFJLEVBQUU7QUFBRSxPQUFHVixRQUFRLENBQUMsQ0FBRCxDQUFiO0FBQWtCLE9BQUdBLFFBQVEsQ0FBQyxDQUFEO0FBQTdCLEdBRG9DO0FBRTFDVyxnQkFBYyxFQUFFO0FBRjBCLENBQXJCLENBQWhCO0FBS0EsTUFBTUMsYUFBYSxHQUFHLElBQUlDLDBGQUFKLENBQTJCO0FBQ3REQyxLQUFHLEVBQUU7QUFBRSxPQUFHZCxRQUFRLENBQUMsQ0FBRDtBQUFiLEdBRGlEO0FBRXREZSxRQUFNLEVBQUUsSUFGOEM7QUFHdERDLGlCQUFlLEVBQUVqQjtBQUhxQyxDQUEzQixDQUF0QjtBQU1BLE1BQU1rQixVQUFVLEdBQUcsSUFBSUMsb0ZBQUosQ0FBd0I7QUFDaERDLEtBQUcsRUFBRW5CLFFBQVEsQ0FBQyxDQUFELENBRG1DO0FBRWhEb0IsU0FBTyxFQUFFO0FBRnVDLENBQXhCLENBQW5CO0FBS0EsTUFBTUMsTUFBTSxHQUFHLElBQUlDLDRFQUFKLENBQW9CO0FBQUVDLFNBQU8sRUFBRSxDQUFYO0FBQWNKLEtBQUcsRUFBRW5CLFFBQVEsQ0FBQyxDQUFELENBQTNCO0FBQWdDZ0IsaUJBQWUsRUFBRWpCO0FBQWpELENBQXBCLENBQWY7QUFFQSxNQUFNeUIsTUFBTSxHQUFHLElBQUlDLDRFQUFKLENBQW9CO0FBQ3hDRixTQUFPLEVBQUUsQ0FEK0I7QUFFeENKLEtBQUcsRUFBRW5CLFFBQVEsQ0FBQyxDQUFELENBRjJCO0FBR3hDZ0IsaUJBQWUsRUFBRWpCLGdCQUh1QjtBQUl4QzJCLGVBQWEsRUFBRSxlQUp5QjtBQUt4Q0MsZ0JBQWMsRUFBRTtBQUx3QixDQUFwQixDQUFmO0FBUUEsTUFBTUMsT0FBTyxHQUFHLElBQUlDLDhFQUFKLENBQXFCO0FBQzFDTixTQUFPLEVBQUUsQ0FEaUM7QUFFMUNILFNBQU8sRUFBRSxZQUZpQztBQUcxQ0QsS0FBRyxFQUFFbkIsUUFBUSxDQUFDLENBQUQ7QUFINkIsQ0FBckIsQ0FBaEI7QUFNQSxNQUFNOEIsS0FBSyxHQUFHLElBQUlDLDBFQUFKLENBQW1CO0FBQUUxQixtQkFBaUIsRUFBRSxDQUFDLENBQUQ7QUFBckIsQ0FBbkIsQ0FBZDtBQUVBLE1BQU0yQixTQUFTLEdBQUcsSUFBSUMsa0ZBQUosQ0FBdUI7QUFBRVYsU0FBTyxFQUFFO0FBQVgsQ0FBdkIsQ0FBbEI7QUFFQSxNQUFNVyxTQUFTLEdBQUcsSUFBSUMsbUZBQUosQ0FBdUI7QUFBRUMsUUFBTSxFQUFFbkMsMEJBQVY7QUFBbURzQixTQUFPLEVBQUU7QUFBNUQsQ0FBdkIsQ0FBbEI7QUFFQSxNQUFNYyxLQUFLLEdBQUcsSUFBSUMsMkVBQUosQ0FBbUI7QUFDdENGLFFBQU0sRUFBRW5DLDBCQUQ4QjtBQUV0Q3NCLFNBQU8sRUFBRSxDQUY2QjtBQUd0Q2dCLE9BQUssRUFBRTtBQUgrQixDQUFuQixDQUFkO0FBTUEsTUFBTUMsTUFBTSxHQUFHLElBQUlDLDZFQUFKLENBQW9CO0FBQUVDLFFBQU0sRUFBRXpDLHNDQUFWO0FBQWdEMEMsVUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLEdBQUo7QUFBMUQsQ0FBcEIsQ0FBZjtBQUVBLE1BQU1DLEtBQUssR0FBRyxJQUFJQywyRUFBSixDQUFtQjtBQUFFdEIsU0FBTyxFQUFFO0FBQVgsQ0FBbkIsQ0FBZCxDOzs7Ozs7Ozs7Ozs7QUN2RVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVPLFNBQVN1QixlQUFULEdBQTJCO0FBQ2hDLFFBQU07QUFBRUMsWUFBRjtBQUFZQztBQUFaLE1BQXVCQyxxRUFBWSxFQUF6QztBQUVBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxLQUFELENBQWxDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkbEQsd0RBQVEsQ0FBQ21ELFlBQVQsR0FBd0JDLElBQXhCLENBQThCRCxZQUFELElBQTJCO0FBQ3RELFVBQUlBLFlBQUosRUFBa0I7QUFDaEJQLGdCQUFRLENBQUM1QyxvREFBRCxFQUFXcUQsU0FBWCxFQUFzQixJQUF0QixDQUFSLENBQW9DQyxLQUFwQyxDQUEwQyxNQUFNO0FBQzlDTixrQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELFNBRkQ7QUFHRCxPQUpELE1BSU87QUFDTEEsZ0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDtBQUNGLEtBUkQ7QUFTRCxHQVZRLEVBVU4sRUFWTSxDQUFULENBTGdDLENBZXpCO0FBRVA7O0FBQ0FFLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUksQ0FBQ0gsS0FBRCxJQUFVRixNQUFkLEVBQXNCO0FBQ3BCRyxjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0QsS0FBRCxFQUFRRixNQUFSLENBSk0sQ0FBVDtBQU1BLFNBQU9FLEtBQVA7QUFDRDtBQUVNLFNBQVNRLG1CQUFULENBQTZCQyxRQUFpQixHQUFHLEtBQWpELEVBQXdEO0FBQzdELFFBQU07QUFBRVgsVUFBRjtBQUFVWSxTQUFWO0FBQWlCYjtBQUFqQixNQUE4QkUscUVBQVksRUFBaEQ7QUFFQUkseURBQVMsQ0FBQyxNQUFXO0FBQ25CLFVBQU07QUFBRVE7QUFBRixRQUFlQyxNQUFyQjs7QUFDQSxRQUFJRCxRQUFRLElBQUlBLFFBQVEsQ0FBQ0UsRUFBckIsSUFBMkIsQ0FBQ2YsTUFBNUIsSUFBc0MsQ0FBQ1ksS0FBdkMsSUFBZ0QsQ0FBQ0QsUUFBckQsRUFBK0Q7QUFDN0QsWUFBTUssYUFBYSxHQUFHLE1BQU07QUFDMUJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0FuQixnQkFBUSxDQUFDNUMsb0RBQUQsQ0FBUjtBQUNELE9BSEQ7O0FBSUEsWUFBTWdFLGtCQUFrQixHQUFJNUMsT0FBRCxJQUE4QjtBQUN2RDBDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDRDQUFaLEVBQTBEM0MsT0FBMUQ7QUFDQXdCLGdCQUFRLENBQUM1QyxvREFBRCxDQUFSO0FBQ0QsT0FIRDs7QUFJQSxZQUFNaUUscUJBQXFCLEdBQUlDLFFBQUQsSUFBd0I7QUFDcERKLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLCtDQUFaLEVBQTZERyxRQUE3RDs7QUFDQSxZQUFJQSxRQUFRLENBQUNDLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkJ2QixrQkFBUSxDQUFDNUMsb0RBQUQsQ0FBUjtBQUNEO0FBQ0YsT0FMRDs7QUFNQSxZQUFNb0Usb0JBQW9CLEdBQUlDLFNBQUQsSUFBZ0M7QUFDM0RQLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDhDQUFaLEVBQTRETSxTQUE1RDtBQUNBekIsZ0JBQVEsQ0FBQzVDLG9EQUFELENBQVI7QUFDRCxPQUhEOztBQUtBMEQsY0FBUSxDQUFDRSxFQUFULENBQVksU0FBWixFQUF1QkMsYUFBdkI7QUFDQUgsY0FBUSxDQUFDRSxFQUFULENBQVksY0FBWixFQUE0Qkksa0JBQTVCO0FBQ0FOLGNBQVEsQ0FBQ0UsRUFBVCxDQUFZLGlCQUFaLEVBQStCSyxxQkFBL0I7QUFDQVAsY0FBUSxDQUFDRSxFQUFULENBQVksZ0JBQVosRUFBOEJRLG9CQUE5QjtBQUVBLGFBQU8sTUFBTTtBQUNYLFlBQUlWLFFBQVEsQ0FBQ1ksY0FBYixFQUE2QjtBQUMzQlosa0JBQVEsQ0FBQ1ksY0FBVCxDQUF3QixTQUF4QixFQUFtQ1QsYUFBbkM7QUFDQUgsa0JBQVEsQ0FBQ1ksY0FBVCxDQUF3QixjQUF4QixFQUF3Q04sa0JBQXhDO0FBQ0FOLGtCQUFRLENBQUNZLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDTCxxQkFBM0M7QUFDQVAsa0JBQVEsQ0FBQ1ksY0FBVCxDQUF3QixnQkFBeEIsRUFBMENGLG9CQUExQztBQUNEO0FBQ0YsT0FQRDtBQVFEO0FBQ0YsR0FwQ1EsRUFvQ04sQ0FBQ3ZCLE1BQUQsRUFBU1ksS0FBVCxFQUFnQkQsUUFBaEIsRUFBMEJaLFFBQTFCLENBcENNLENBQVQ7QUFxQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUQ7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7SUFFSzJCLGM7O1dBQUFBLGM7QUFBQUEsZ0I7R0FBQUEsYyxLQUFBQSxjOztBQUlMLE1BQU1DLGdCQUE0RCxHQUFHO0FBQ25FLEdBQUNELGNBQWMsQ0FBQ0UsUUFBaEIsR0FBMkJ6RSxvREFBUUE7QUFEZ0MsQ0FBckU7O0FBSUEsU0FBUzBFLGVBQVQsQ0FBeUJqQixLQUF6QixFQUF1QztBQUNyQyxNQUFJQSxLQUFLLFlBQVlrQixzRkFBckIsRUFBOEM7QUFDNUMsV0FBTyw2R0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJbEIsS0FBSyxZQUFZbUIsd0VBQXJCLEVBQThDO0FBQ25ELFdBQU8sNkNBQVA7QUFDRCxHQUZNLE1BRUEsSUFDTG5CLEtBQUssWUFBWW9CLHVGQUFqQixJQUNBcEIsS0FBSyxZQUFZcUIsNEZBRGpCLElBRUFyQixLQUFLLFlBQVlzQixvRkFIWixFQUlMO0FBQ0EsV0FBTyxnRUFBUDtBQUNELEdBTk0sTUFNQTtBQUNMakIsV0FBTyxDQUFDTCxLQUFSLENBQWNBLEtBQWQ7QUFDQSxXQUFPLGdFQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTdUIsVUFBVCxDQUFvQkMsUUFBcEIsRUFBaUQ7QUFDL0MsUUFBTUMsT0FBTyxHQUFHLElBQUlDLHFFQUFKLENBQWlCRixRQUFqQixDQUFoQjtBQUNBQyxTQUFPLENBQUNyRSxlQUFSLEdBQTBCLEtBQTFCO0FBQ0EsU0FBT3FFLE9BQVA7QUFDRDs7QUFFYywyRUFBVztBQUN4QixTQUNFLE1BQUMsa0VBQUQ7QUFBbUIsY0FBVSxFQUFFRixVQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0Q7O0FBRUQsU0FBU0ksT0FBVCxHQUFtQjtBQUNqQixRQUFNO0FBQUVoRTtBQUFGLE1BQWMwQixxRUFBWSxFQUFoQztBQUVBLFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQU0sUUFBSSxFQUFDLEtBQVg7QUFBaUIsa0JBQVcsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPMUIsT0FBUCxhQUFPQSxPQUFQLGNBQU9BLE9BQVAsR0FBa0IsRUFBbEIsQ0FMRixDQURGO0FBU0Q7O0FBRUQsU0FBU2lFLFdBQVQsR0FBdUI7QUFDckIsUUFBTTtBQUFFakUsV0FBRjtBQUFXOEQ7QUFBWCxNQUF1QnBDLHFFQUFZLEVBQXpDO0FBRUEsUUFBTSxDQUFDd0MsV0FBRCxFQUFjQyxjQUFkLElBQWdDQyw0Q0FBSyxDQUFDdkMsUUFBTixFQUF0QztBQUNBdUMsOENBQUssQ0FBQ3RDLFNBQU4sQ0FBZ0IsTUFBVztBQUN6QixRQUFJLENBQUMsQ0FBQ2dDLE9BQU4sRUFBZTtBQUNiLFVBQUlPLEtBQUssR0FBRyxLQUFaO0FBRUFQLGFBQU8sQ0FDSlEsY0FESCxHQUVHdEMsSUFGSCxDQUVTa0MsV0FBRCxJQUF5QjtBQUM3QixZQUFJLENBQUNHLEtBQUwsRUFBWTtBQUNWRix3QkFBYyxDQUFDRCxXQUFELENBQWQ7QUFDRDtBQUNGLE9BTkgsRUFPR2hDLEtBUEgsQ0FPUyxNQUFNO0FBQ1gsWUFBSSxDQUFDbUMsS0FBTCxFQUFZO0FBQ1ZGLHdCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0Q7QUFDRixPQVhIOztBQWFBLFlBQU1JLGlCQUFpQixHQUFJTCxXQUFELElBQXlCO0FBQ2pEQyxzQkFBYyxDQUFDRCxXQUFELENBQWQ7QUFDRCxPQUZEOztBQUdBSixhQUFPLENBQUN0QixFQUFSLENBQVcsT0FBWCxFQUFvQitCLGlCQUFwQjtBQUVBLGFBQU8sTUFBTTtBQUNYRixhQUFLLEdBQUcsSUFBUjtBQUNBUCxlQUFPLENBQUNaLGNBQVIsQ0FBdUIsT0FBdkIsRUFBZ0NxQixpQkFBaEM7QUFDQUosc0JBQWMsQ0FBQ2xDLFNBQUQsQ0FBZDtBQUNELE9BSkQ7QUFLRDtBQUNGLEdBNUJELEVBNEJHLENBQUM2QixPQUFELEVBQVU5RCxPQUFWLENBNUJILEVBSnFCLENBZ0NFOztBQUV2QixTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxLQUFYO0FBQWlCLGtCQUFXLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9rRSxXQUFXLEtBQUssSUFBaEIsR0FBdUIsT0FBdkIsR0FBaUNBLFdBQWpDLGFBQWlDQSxXQUFqQyxjQUFpQ0EsV0FBakMsR0FBZ0QsRUFBdkQsQ0FMRixDQURGO0FBU0Q7O0FBRUQsU0FBU00sT0FBVCxHQUFtQjtBQUNqQixRQUFNO0FBQUVDO0FBQUYsTUFBYy9DLHFFQUFZLEVBQWhDO0FBRUEsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxLQUFYO0FBQWlCLGtCQUFXLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0crQyxPQUFPLEtBQUssSUFBWixHQUNHLEdBREgsR0FFR0EsT0FBTyxHQUNOLEdBQUVBLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUF3QixNQUFLRCxPQUFPLENBQUNDLFNBQVIsQ0FBa0JELE9BQU8sQ0FBQzFCLE1BQVIsR0FBaUIsQ0FBbkMsQ0FBc0MsRUFEL0QsR0FFUCxFQUxOLENBTEYsQ0FERjtBQWVEOztBQUVELFNBQVM0QixPQUFULEdBQW1CO0FBQ2pCLFFBQU07QUFBRUYsV0FBRjtBQUFXWCxXQUFYO0FBQW9COUQ7QUFBcEIsTUFBZ0MwQixxRUFBWSxFQUFsRDtBQUVBLFFBQU0sQ0FBQ2tELE9BQUQsRUFBVUMsVUFBVixJQUF3QlQsNENBQUssQ0FBQ3ZDLFFBQU4sRUFBOUI7QUFDQXVDLDhDQUFLLENBQUN0QyxTQUFOLENBQWdCLE1BQVc7QUFDekIsUUFBSSxDQUFDLENBQUMyQyxPQUFGLElBQWEsQ0FBQyxDQUFDWCxPQUFuQixFQUE0QjtBQUMxQixVQUFJTyxLQUFLLEdBQUcsS0FBWjtBQUVBUCxhQUFPLENBQ0pnQixVQURILENBQ2NMLE9BRGQsRUFFR3pDLElBRkgsQ0FFUzRDLE9BQUQsSUFBa0I7QUFDdEIsWUFBSSxDQUFDUCxLQUFMLEVBQVk7QUFDVlEsb0JBQVUsQ0FBQ0QsT0FBRCxDQUFWO0FBQ0Q7QUFDRixPQU5ILEVBT0cxQyxLQVBILENBT1MsTUFBTTtBQUNYLFlBQUksQ0FBQ21DLEtBQUwsRUFBWTtBQUNWUSxvQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNEO0FBQ0YsT0FYSDtBQWFBLGFBQU8sTUFBTTtBQUNYUixhQUFLLEdBQUcsSUFBUjtBQUNBUSxrQkFBVSxDQUFDNUMsU0FBRCxDQUFWO0FBQ0QsT0FIRDtBQUlEO0FBQ0YsR0F0QkQsRUFzQkcsQ0FBQ3dDLE9BQUQsRUFBVVgsT0FBVixFQUFtQjlELE9BQW5CLENBdEJILEVBSmlCLENBMEJlOztBQUVoQyxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQU0sUUFBSSxFQUFDLEtBQVg7QUFBaUIsa0JBQVcsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTzRFLE9BQU8sS0FBSyxJQUFaLEdBQW1CLE9BQW5CLEdBQTZCQSxPQUFPLEdBQUksSUFBR0csd0VBQVcsQ0FBQ0gsT0FBRCxDQUFVLEVBQTVCLEdBQWdDLEVBQTNFLENBTEYsQ0FERjtBQVNEOztBQUVELFNBQVNJLE1BQVQsR0FBa0I7QUFDaEIsUUFBTTtBQUFFdkQsVUFBRjtBQUFVWTtBQUFWLE1BQW9CWCxxRUFBWSxFQUF0QztBQUVBLFNBQ0UsbUVBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRXVELFlBQU0sRUFBRSxNQUFWO0FBQWtCQyxlQUFTLEVBQUU7QUFBN0IsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9EekQsTUFBTSxHQUFHLElBQUgsR0FBVVksS0FBSyxHQUFHLElBQUgsR0FBVSxJQUFuRixDQURGLEVBRUU7QUFDRSxTQUFLLEVBQUU7QUFDTDhDLGFBQU8sRUFBRSxNQURKO0FBRUxDLGFBQU8sRUFBRSxNQUZKO0FBR0xDLHlCQUFtQixFQUFFLHFCQUhoQjtBQUlMQyxjQUFRLEVBQUUsT0FKTDtBQUtMQyxnQkFBVSxFQUFFLE1BTFA7QUFNTE4sWUFBTSxFQUFFO0FBTkgsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBYUUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixDQUZGLENBREY7QUFvQkQ7O0FBRUQsU0FBU08sR0FBVCxHQUFlO0FBQ2IsUUFBTUMsT0FBTyxHQUFHL0QscUVBQVksRUFBNUI7QUFDQSxRQUFNO0FBQUVnRSxhQUFGO0FBQWE1QixXQUFiO0FBQXNCOUQsV0FBdEI7QUFBK0J5RSxXQUEvQjtBQUF3Q2pELFlBQXhDO0FBQWtEbUUsY0FBbEQ7QUFBOERsRSxVQUE5RDtBQUFzRVk7QUFBdEUsTUFBZ0ZvRCxPQUF0RixDQUZhLENBSWI7O0FBQ0EsUUFBTSxDQUFDRyxtQkFBRCxFQUFzQkMsc0JBQXRCLElBQWdEekIsNENBQUssQ0FBQ3ZDLFFBQU4sRUFBdEQ7QUFDQXVDLDhDQUFLLENBQUN0QyxTQUFOLENBQWdCLE1BQU07QUFDcEIsUUFBSThELG1CQUFtQixJQUFJQSxtQkFBbUIsS0FBS0YsU0FBbkQsRUFBOEQ7QUFDNURHLDRCQUFzQixDQUFDNUQsU0FBRCxDQUF0QjtBQUNEO0FBQ0YsR0FKRCxFQUlHLENBQUMyRCxtQkFBRCxFQUFzQkYsU0FBdEIsQ0FKSCxFQU5hLENBWWI7O0FBQ0EsUUFBTUksVUFBVSxHQUFHdkUsOERBQWUsRUFBbEMsQ0FiYSxDQWViOztBQUNBWSxvRUFBbUIsQ0FBQyxDQUFDMkQsVUFBRCxJQUFlLENBQUMsQ0FBQ0YsbUJBQWxCLENBQW5CO0FBRUEsU0FDRSxtRUFDRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSSxTQUFLLEVBQUU7QUFBRVgsWUFBTSxFQUFFO0FBQVYsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUNFLFNBQUssRUFBRTtBQUNMRSxhQUFPLEVBQUUsTUFESjtBQUVMQyxhQUFPLEVBQUUsTUFGSjtBQUdMQyx5QkFBbUIsRUFBRSxTQUhoQjtBQUlMQyxjQUFRLEVBQUUsT0FKTDtBQUtMTCxZQUFNLEVBQUU7QUFMSCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTR2MsTUFBTSxDQUFDQyxJQUFQLENBQVk1QyxnQkFBWixFQUE4QjZDLEdBQTlCLENBQWtDQyxJQUFJLElBQUk7QUFDekMsVUFBTUMsZ0JBQWdCLEdBQUcvQyxnQkFBZ0IsQ0FBQzhDLElBQUQsQ0FBekM7QUFDQSxVQUFNRSxVQUFVLEdBQUdELGdCQUFnQixLQUFLUCxtQkFBeEM7QUFDQSxVQUFNUyxTQUFTLEdBQUdGLGdCQUFnQixLQUFLVCxTQUF2QztBQUNBLFVBQU1ZLFFBQVEsR0FBRyxDQUFDUixVQUFELElBQWUsQ0FBQyxDQUFDRixtQkFBakIsSUFBd0NTLFNBQXhDLElBQXFELENBQUMsQ0FBQ2hFLEtBQXhFO0FBRUEsV0FDRTtBQUNFLFdBQUssRUFBRTtBQUNMa0UsY0FBTSxFQUFFLE1BREg7QUFFTEMsb0JBQVksRUFBRSxNQUZUO0FBR0xDLG1CQUFXLEVBQUVMLFVBQVUsR0FBRyxRQUFILEdBQWNDLFNBQVMsR0FBRyxPQUFILEdBQWEsT0FIdEQ7QUFJTEssY0FBTSxFQUFFSixRQUFRLEdBQUcsT0FBSCxHQUFhLFNBSnhCO0FBS0xLLGdCQUFRLEVBQUU7QUFMTCxPQURUO0FBUUUsY0FBUSxFQUFFTCxRQVJaO0FBU0UsU0FBRyxFQUFFSixJQVRQO0FBVUUsYUFBTyxFQUFFLE1BQU07QUFDYkwsOEJBQXNCLENBQUNNLGdCQUFELENBQXRCO0FBQ0EzRSxnQkFBUSxDQUFDNEIsZ0JBQWdCLENBQUM4QyxJQUFELENBQWpCLENBQVI7QUFDRCxPQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FlRTtBQUNFLFdBQUssRUFBRTtBQUNMUyxnQkFBUSxFQUFFLFVBREw7QUFFTEMsV0FBRyxFQUFFLEdBRkE7QUFHTEMsWUFBSSxFQUFFLEdBSEQ7QUFJTE4sY0FBTSxFQUFFLE1BSkg7QUFLTHBCLGVBQU8sRUFBRSxNQUxKO0FBTUwyQixrQkFBVSxFQUFFLFFBTlA7QUFPTHhJLGFBQUssRUFBRSxPQVBGO0FBUUwyRyxjQUFNLEVBQUU7QUFSSCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FZR21CLFVBQVUsSUFBSSxNQUFDLDJEQUFEO0FBQVMsV0FBSyxFQUFFLE9BQWhCO0FBQXlCLFdBQUssRUFBRTtBQUFFRyxjQUFNLEVBQUUsS0FBVjtBQUFpQlEsa0JBQVUsRUFBRTtBQUE3QixPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWmpCLEVBYUdWLFNBQVMsSUFDUjtBQUFNLFVBQUksRUFBQyxLQUFYO0FBQWlCLG9CQUFXLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEosQ0FmRixFQWtDR0gsSUFsQ0gsQ0FERjtBQXNDRCxHQTVDQSxDQVRILEVBc0RHLENBQUN6RSxNQUFNLElBQUlZLEtBQVgsS0FDRztBQUNFLFNBQUssRUFBRTtBQUNMa0UsWUFBTSxFQUFFLE1BREg7QUFFTHRCLFlBQU0sRUFBRSxZQUZIO0FBR0x1QixrQkFBWSxFQUFFLE1BSFQ7QUFJTEMsaUJBQVcsRUFBRSxLQUpSO0FBS0xDLFlBQU0sRUFBRTtBQUxILEtBRFQ7QUFRRSxXQUFPLEVBQUUsTUFBTTtBQUNiZixnQkFBVTtBQUNYLEtBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2RE4sRUF1RUssQ0FBQyxDQUFDdEQsS0FBRixJQUFXO0FBQUksU0FBSyxFQUFFO0FBQUUyRSxlQUFTLEVBQUUsTUFBYjtBQUFxQkMsa0JBQVksRUFBRTtBQUFuQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0QzRCxlQUFlLENBQUNqQixLQUFELENBQXJFLENBdkVoQixDQUhGLEVBNkVFO0FBQUksU0FBSyxFQUFFO0FBQUU0QyxZQUFNLEVBQUU7QUFBVixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3RUYsRUErRUU7QUFDRSxTQUFLLEVBQUU7QUFDTEUsYUFBTyxFQUFFLE1BREo7QUFFTEMsYUFBTyxFQUFFLE1BRko7QUFHTEMseUJBQW1CLEVBQUUsYUFIaEI7QUFJTEMsY0FBUSxFQUFFLE9BSkw7QUFLTEwsWUFBTSxFQUFFO0FBTEgsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0VGLENBREY7QUE0RkQsQzs7Ozs7Ozs7Ozs7QUNyVEQseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbi8vIDwhLS0gQnkgU2FtIEhlcmJlcnQgKEBzaGVyYiksIGZvciBldmVyeW9uZS4gTW9yZSBAIGh0dHA6Ly9nb28uZ2wvN0FKemJMIC0tPlxyXG5leHBvcnQgZnVuY3Rpb24gU3Bpbm5lcih7IGNvbG9yLCAuLi5yZXN0IH06IGFueSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIzOFwiIHZpZXdCb3g9XCIwIDAgMzggMzhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPXtjb2xvcn0gey4uLnJlc3R9PlxyXG4gICAgICA8ZyBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDEpXCIgc3Ryb2tlV2lkdGg9XCIyXCI+XHJcbiAgICAgICAgICA8Y2lyY2xlIHN0cm9rZU9wYWNpdHk9XCIuNVwiIGN4PVwiMThcIiBjeT1cIjE4XCIgcj1cIjE4XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThcIj5cclxuICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcclxuICAgICAgICAgICAgICBmcm9tPVwiMCAxOCAxOFwiXHJcbiAgICAgICAgICAgICAgdG89XCIzNjAgMTggMThcIlxyXG4gICAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBCc2NDb25uZWN0b3IgfSBmcm9tICdAYmluYW5jZS1jaGFpbi9ic2MtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBOZXR3b3JrQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvbmV0d29yay1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2FsbGV0TGlua0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGxpbmstY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBMZWRnZXJDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9sZWRnZXItY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBUcmV6b3JDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC90cmV6b3ItY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBMYXR0aWNlQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvbGF0dGljZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IEZyYW1lQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBBdXRoZXJldW1Db25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9hdXRoZXJldW0tY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBGb3J0bWF0aWNDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9mb3J0bWF0aWMtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBNYWdpY0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L21hZ2ljLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgUG9ydGlzQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvcG9ydGlzLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVG9ydXNDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC90b3J1cy1jb25uZWN0b3InXHJcblxyXG5jb25zdCBQT0xMSU5HX0lOVEVSVkFMID0gMTIwMDBcclxuY29uc3QgUlBDX1VSTFM6IHsgW2NoYWluSWQ6IG51bWJlcl06IHN0cmluZyB9ID0ge1xyXG4gIDE6IHByb2Nlc3MuZW52LlJQQ19VUkxfMSBhcyBzdHJpbmcsXHJcbiAgNDogcHJvY2Vzcy5lbnYuUlBDX1VSTF80IGFzIHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5qZWN0ZWQgPSBuZXcgSW5qZWN0ZWRDb25uZWN0b3IoeyBzdXBwb3J0ZWRDaGFpbklkczogWzU2LCA5N10gfSlcclxuXHJcbmV4cG9ydCBjb25zdCBic2NDb25uZWN0b3IgPSBuZXcgQnNjQ29ubmVjdG9yKHsgc3VwcG9ydGVkQ2hhaW5JZHM6IFs1Nl0gfSlcclxuXHJcbmV4cG9ydCBjb25zdCBuZXR3b3JrID0gbmV3IE5ldHdvcmtDb25uZWN0b3Ioe1xyXG4gIHVybHM6IHsgMTogUlBDX1VSTFNbMV0sIDQ6IFJQQ19VUkxTWzRdIH0sXHJcbiAgZGVmYXVsdENoYWluSWQ6IDFcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB3YWxsZXRjb25uZWN0ID0gbmV3IFdhbGxldENvbm5lY3RDb25uZWN0b3Ioe1xyXG4gIHJwYzogeyAxOiBSUENfVVJMU1sxXSB9LFxyXG4gIHFyY29kZTogdHJ1ZSxcclxuICBwb2xsaW5nSW50ZXJ2YWw6IFBPTExJTkdfSU5URVJWQUxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB3YWxsZXRsaW5rID0gbmV3IFdhbGxldExpbmtDb25uZWN0b3Ioe1xyXG4gIHVybDogUlBDX1VSTFNbMV0sXHJcbiAgYXBwTmFtZTogJ3dlYjMtcmVhY3QgZXhhbXBsZSdcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsZWRnZXIgPSBuZXcgTGVkZ2VyQ29ubmVjdG9yKHsgY2hhaW5JZDogMSwgdXJsOiBSUENfVVJMU1sxXSwgcG9sbGluZ0ludGVydmFsOiBQT0xMSU5HX0lOVEVSVkFMIH0pXHJcblxyXG5leHBvcnQgY29uc3QgdHJlem9yID0gbmV3IFRyZXpvckNvbm5lY3Rvcih7XHJcbiAgY2hhaW5JZDogMSxcclxuICB1cmw6IFJQQ19VUkxTWzFdLFxyXG4gIHBvbGxpbmdJbnRlcnZhbDogUE9MTElOR19JTlRFUlZBTCxcclxuICBtYW5pZmVzdEVtYWlsOiAnZHVtbXlAYWJjLnh5eicsXHJcbiAgbWFuaWZlc3RBcHBVcmw6ICdodHRwOi8vbG9jYWxob3N0OjEyMzQnXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbGF0dGljZSA9IG5ldyBMYXR0aWNlQ29ubmVjdG9yKHtcclxuICBjaGFpbklkOiA0LFxyXG4gIGFwcE5hbWU6ICd3ZWIzLXJlYWN0JyxcclxuICB1cmw6IFJQQ19VUkxTWzRdXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWVDb25uZWN0b3IoeyBzdXBwb3J0ZWRDaGFpbklkczogWzFdIH0pXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aGVyZXVtID0gbmV3IEF1dGhlcmV1bUNvbm5lY3Rvcih7IGNoYWluSWQ6IDQyIH0pXHJcblxyXG5leHBvcnQgY29uc3QgZm9ydG1hdGljID0gbmV3IEZvcnRtYXRpY0Nvbm5lY3Rvcih7IGFwaUtleTogcHJvY2Vzcy5lbnYuRk9SVE1BVElDX0FQSV9LRVkgYXMgc3RyaW5nLCBjaGFpbklkOiA0IH0pXHJcblxyXG5leHBvcnQgY29uc3QgbWFnaWMgPSBuZXcgTWFnaWNDb25uZWN0b3Ioe1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTUFHSUNfQVBJX0tFWSBhcyBzdHJpbmcsXHJcbiAgY2hhaW5JZDogNCxcclxuICBlbWFpbDogJ2hlbGxvQGV4YW1wbGUub3JnJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvcnRpcyA9IG5ldyBQb3J0aXNDb25uZWN0b3IoeyBkQXBwSWQ6IHByb2Nlc3MuZW52LlBPUlRJU19EQVBQX0lEIGFzIHN0cmluZywgbmV0d29ya3M6IFsxLCAxMDBdIH0pXHJcblxyXG5leHBvcnQgY29uc3QgdG9ydXMgPSBuZXcgVG9ydXNDb25uZWN0b3IoeyBjaGFpbklkOiAxIH0pXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuXHJcbmltcG9ydCB7IGluamVjdGVkIH0gZnJvbSAnLi9jb25uZWN0b3JzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVhZ2VyQ29ubmVjdCgpIHtcclxuICBjb25zdCB7IGFjdGl2YXRlLCBhY3RpdmUgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIGNvbnN0IFt0cmllZCwgc2V0VHJpZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbmplY3RlZC5pc0F1dGhvcml6ZWQoKS50aGVuKChpc0F1dGhvcml6ZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgIGFjdGl2YXRlKGluamVjdGVkLCB1bmRlZmluZWQsIHRydWUpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHNldFRyaWVkKHRydWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUcmllZCh0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sIFtdKSAvLyBpbnRlbnRpb25hbGx5IG9ubHkgcnVubmluZyBvbiBtb3VudCAobWFrZSBzdXJlIGl0J3Mgb25seSBtb3VudGVkIG9uY2UgOikpXHJcblxyXG4gIC8vIGlmIHRoZSBjb25uZWN0aW9uIHdvcmtlZCwgd2FpdCB1bnRpbCB3ZSBnZXQgY29uZmlybWF0aW9uIG9mIHRoYXQgdG8gZmxpcCB0aGUgZmxhZ1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXRyaWVkICYmIGFjdGl2ZSkge1xyXG4gICAgICBzZXRUcmllZCh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFt0cmllZCwgYWN0aXZlXSlcclxuXHJcbiAgcmV0dXJuIHRyaWVkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmFjdGl2ZUxpc3RlbmVyKHN1cHByZXNzOiBib29sZWFuID0gZmFsc2UpIHtcclxuICBjb25zdCB7IGFjdGl2ZSwgZXJyb3IsIGFjdGl2YXRlIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICB1c2VFZmZlY3QoKCk6IGFueSA9PiB7XHJcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3cgYXMgYW55XHJcbiAgICBpZiAoZXRoZXJldW0gJiYgZXRoZXJldW0ub24gJiYgIWFjdGl2ZSAmJiAhZXJyb3IgJiYgIXN1cHByZXNzKSB7XHJcbiAgICAgIGNvbnN0IGhhbmRsZUNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyAnY29ubmVjdCcgZXZlbnRcIilcclxuICAgICAgICBhY3RpdmF0ZShpbmplY3RlZClcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoYW5kbGVDaGFpbkNoYW5nZWQgPSAoY2hhaW5JZDogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyAnY2hhaW5DaGFuZ2VkJyBldmVudCB3aXRoIHBheWxvYWRcIiwgY2hhaW5JZClcclxuICAgICAgICBhY3RpdmF0ZShpbmplY3RlZClcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoYW5kbGVBY2NvdW50c0NoYW5nZWQgPSAoYWNjb3VudHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyAnYWNjb3VudHNDaGFuZ2VkJyBldmVudCB3aXRoIHBheWxvYWRcIiwgYWNjb3VudHMpXHJcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGFjdGl2YXRlKGluamVjdGVkKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoYW5kbGVOZXR3b3JrQ2hhbmdlZCA9IChuZXR3b3JrSWQ6IHN0cmluZyB8IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ25ldHdvcmtDaGFuZ2VkJyBldmVudCB3aXRoIHBheWxvYWRcIiwgbmV0d29ya0lkKVxyXG4gICAgICAgIGFjdGl2YXRlKGluamVjdGVkKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBldGhlcmV1bS5vbignY29ubmVjdCcsIGhhbmRsZUNvbm5lY3QpXHJcbiAgICAgIGV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpXHJcbiAgICAgIGV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBoYW5kbGVBY2NvdW50c0NoYW5nZWQpXHJcbiAgICAgIGV0aGVyZXVtLm9uKCduZXR3b3JrQ2hhbmdlZCcsIGhhbmRsZU5ldHdvcmtDaGFuZ2VkKVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBpZiAoZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIpIHtcclxuICAgICAgICAgIGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdjb25uZWN0JywgaGFuZGxlQ29ubmVjdClcclxuICAgICAgICAgIGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpXHJcbiAgICAgICAgICBldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKVxyXG4gICAgICAgICAgZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ25ldHdvcmtDaGFuZ2VkJywgaGFuZGxlTmV0d29ya0NoYW5nZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2ZSwgZXJyb3IsIHN1cHByZXNzLCBhY3RpdmF0ZV0pXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IsXHJcbiAgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkXHJcbn0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWUgfSBmcm9tICdAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycydcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cydcclxuXHJcbmltcG9ydCB7IHVzZUVhZ2VyQ29ubmVjdCwgdXNlSW5hY3RpdmVMaXN0ZW5lciB9IGZyb20gJy4uL2hvb2tzJ1xyXG5pbXBvcnQge1xyXG4gIGluamVjdGVkXHJcbn0gZnJvbSAnLi4vY29ubmVjdG9ycydcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcclxuXHJcbmVudW0gQ29ubmVjdG9yTmFtZXMge1xyXG4gIEluamVjdGVkID0gJ0Nvbm5lY3QgV2FsbGV0J1xyXG59XHJcblxyXG5jb25zdCBjb25uZWN0b3JzQnlOYW1lOiB7IFtjb25uZWN0b3JOYW1lIGluIENvbm5lY3Rvck5hbWVzXTogYW55IH0gPSB7XHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkluamVjdGVkXTogaW5qZWN0ZWRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yOiBFcnJvcikge1xyXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIE5vRXRoZXJldW1Qcm92aWRlckVycm9yKSB7XHJcbiAgICByZXR1cm4gJ05vIEV0aGVyZXVtIGJyb3dzZXIgZXh0ZW5zaW9uIGRldGVjdGVkLCBpbnN0YWxsIE1ldGFNYXNrIG9uIGRlc2t0b3Agb3IgdmlzaXQgZnJvbSBhIGRBcHAgYnJvd3NlciBvbiBtb2JpbGUuJ1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBVbnN1cHBvcnRlZENoYWluSWRFcnJvcikge1xyXG4gICAgcmV0dXJuIFwiWW91J3JlIGNvbm5lY3RlZCB0byBhbiB1bnN1cHBvcnRlZCBuZXR3b3JrLlwiXHJcbiAgfSBlbHNlIGlmIChcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWQgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB8fFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZVxyXG4gICkge1xyXG4gICAgcmV0dXJuICdQbGVhc2UgYXV0aG9yaXplIHRoaXMgd2Vic2l0ZSB0byBhY2Nlc3MgeW91ciBFdGhlcmV1bSBhY2NvdW50LidcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIHJldHVybiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4gQ2hlY2sgdGhlIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlscy4nXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xyXG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxyXG4gIGxpYnJhcnkucG9sbGluZ0ludGVydmFsID0gMTIwMDBcclxuICByZXR1cm4gbGlicmFyeVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxyXG4gICAgICA8QXBwIC8+XHJcbiAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hhaW5JZCgpIHtcclxuICBjb25zdCB7IGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5DaGFpbiBJZDwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjaGFpblwiPlxyXG4gICAgICAgIOKbk1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntjaGFpbklkID8/ICcnfTwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQmxvY2tOdW1iZXIoKSB7XHJcbiAgY29uc3QgeyBjaGFpbklkLCBsaWJyYXJ5IH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICBjb25zdCBbYmxvY2tOdW1iZXIsIHNldEJsb2NrTnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKTogYW55ID0+IHtcclxuICAgIGlmICghIWxpYnJhcnkpIHtcclxuICAgICAgbGV0IHN0YWxlID0gZmFsc2VcclxuXHJcbiAgICAgIGxpYnJhcnlcclxuICAgICAgICAuZ2V0QmxvY2tOdW1iZXIoKVxyXG4gICAgICAgIC50aGVuKChibG9ja051bWJlcjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJsb2NrTnVtYmVyKGJsb2NrTnVtYmVyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmxvY2tOdW1iZXIobnVsbClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgY29uc3QgdXBkYXRlQmxvY2tOdW1iZXIgPSAoYmxvY2tOdW1iZXI6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldEJsb2NrTnVtYmVyKGJsb2NrTnVtYmVyKVxyXG4gICAgICB9XHJcbiAgICAgIGxpYnJhcnkub24oJ2Jsb2NrJywgdXBkYXRlQmxvY2tOdW1iZXIpXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHN0YWxlID0gdHJ1ZVxyXG4gICAgICAgIGxpYnJhcnkucmVtb3ZlTGlzdGVuZXIoJ2Jsb2NrJywgdXBkYXRlQmxvY2tOdW1iZXIpXHJcbiAgICAgICAgc2V0QmxvY2tOdW1iZXIodW5kZWZpbmVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2xpYnJhcnksIGNoYWluSWRdKSAvLyBlbnN1cmVzIHJlZnJlc2ggaWYgcmVmZXJlbnRpYWwgaWRlbnRpdHkgb2YgbGlicmFyeSBkb2Vzbid0IGNoYW5nZSBhY3Jvc3MgY2hhaW5JZHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkJsb2NrIE51bWJlcjwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJudW1iZXJzXCI+XHJcbiAgICAgICAg8J+UolxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntibG9ja051bWJlciA9PT0gbnVsbCA/ICdFcnJvcicgOiBibG9ja051bWJlciA/PyAnJ308L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFjY291bnQoKSB7XHJcbiAgY29uc3QgeyBhY2NvdW50IH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4+QWNjb3VudDwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJyb2JvdFwiPlxyXG4gICAgICAgIPCfpJZcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICB7YWNjb3VudCA9PT0gbnVsbFxyXG4gICAgICAgICAgPyAnLSdcclxuICAgICAgICAgIDogYWNjb3VudFxyXG4gICAgICAgICAgPyBgJHthY2NvdW50LnN1YnN0cmluZygwLCA2KX0uLi4ke2FjY291bnQuc3Vic3RyaW5nKGFjY291bnQubGVuZ3RoIC0gNCl9YFxyXG4gICAgICAgICAgOiAnJ31cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBCYWxhbmNlKCkge1xyXG4gIGNvbnN0IHsgYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gUmVhY3QudXNlU3RhdGUoKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKTogYW55ID0+IHtcclxuICAgIGlmICghIWFjY291bnQgJiYgISFsaWJyYXJ5KSB7XHJcbiAgICAgIGxldCBzdGFsZSA9IGZhbHNlXHJcblxyXG4gICAgICBsaWJyYXJ5XHJcbiAgICAgICAgLmdldEJhbGFuY2UoYWNjb3VudClcclxuICAgICAgICAudGhlbigoYmFsYW5jZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJhbGFuY2UoYmFsYW5jZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJhbGFuY2UobnVsbClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzdGFsZSA9IHRydWVcclxuICAgICAgICBzZXRCYWxhbmNlKHVuZGVmaW5lZClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFthY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkXSkgLy8gZW5zdXJlcyByZWZyZXNoIGlmIHJlZmVyZW50aWFsIGlkZW50aXR5IG9mIGxpYnJhcnkgZG9lc24ndCBjaGFuZ2UgYWNyb3NzIGNoYWluSWRzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5CYWxhbmNlPC9zcGFuPlxyXG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImdvbGRcIj5cclxuICAgICAgICDwn5KwXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+e2JhbGFuY2UgPT09IG51bGwgPyAnRXJyb3InIDogYmFsYW5jZSA/IGDOniR7Zm9ybWF0RXRoZXIoYmFsYW5jZSl9YCA6ICcnfTwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46ICcxcmVtJywgdGV4dEFsaWduOiAncmlnaHQnIH19PnthY3RpdmUgPyAn8J+foicgOiBlcnJvciA/ICfwn5S0JyA6ICfwn5+gJ308L2gxPlxyXG4gICAgICA8aDNcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciBtaW4tY29udGVudCAxZnInLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMnJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q2hhaW5JZCAvPlxyXG4gICAgICAgIDxCbG9ja051bWJlciAvPlxyXG4gICAgICAgIDxBY2NvdW50IC8+XHJcbiAgICAgICAgPEJhbGFuY2UgLz5cclxuICAgICAgPC9oMz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VXZWIzUmVhY3Q8V2ViM1Byb3ZpZGVyPigpXHJcbiAgY29uc3QgeyBjb25uZWN0b3IsIGxpYnJhcnksIGNoYWluSWQsIGFjY291bnQsIGFjdGl2YXRlLCBkZWFjdGl2YXRlLCBhY3RpdmUsIGVycm9yIH0gPSBjb250ZXh0XHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byByZWNvZ25pemUgdGhlIGNvbm5lY3RvciBjdXJyZW50bHkgYmVpbmcgYWN0aXZhdGVkXHJcbiAgY29uc3QgW2FjdGl2YXRpbmdDb25uZWN0b3IsIHNldEFjdGl2YXRpbmdDb25uZWN0b3JdID0gUmVhY3QudXNlU3RhdGU8YW55PigpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3RpdmF0aW5nQ29ubmVjdG9yICYmIGFjdGl2YXRpbmdDb25uZWN0b3IgPT09IGNvbm5lY3Rvcikge1xyXG4gICAgICBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yKHVuZGVmaW5lZClcclxuICAgIH1cclxuICB9LCBbYWN0aXZhdGluZ0Nvbm5lY3RvciwgY29ubmVjdG9yXSlcclxuXHJcbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIGVhZ2VybHkgY29ubmVjdCB0byB0aGUgaW5qZWN0ZWQgZXRoZXJldW0gcHJvdmlkZXIsIGlmIGl0IGV4aXN0cyBhbmQgaGFzIGdyYW50ZWQgYWNjZXNzIGFscmVhZHlcclxuICBjb25zdCB0cmllZEVhZ2VyID0gdXNlRWFnZXJDb25uZWN0KClcclxuXHJcbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIGNvbm5lY3QgaW4gcmVhY3Rpb24gdG8gY2VydGFpbiBldmVudHMgb24gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHNcclxuICB1c2VJbmFjdGl2ZUxpc3RlbmVyKCF0cmllZEVhZ2VyIHx8ICEhYWN0aXZhdGluZ0Nvbm5lY3RvcilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICczMHJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7T2JqZWN0LmtleXMoY29ubmVjdG9yc0J5TmFtZSkubWFwKG5hbWUgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudENvbm5lY3RvciA9IGNvbm5lY3RvcnNCeU5hbWVbbmFtZV1cclxuICAgICAgICAgIGNvbnN0IGFjdGl2YXRpbmcgPSBjdXJyZW50Q29ubmVjdG9yID09PSBhY3RpdmF0aW5nQ29ubmVjdG9yXHJcbiAgICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBjdXJyZW50Q29ubmVjdG9yID09PSBjb25uZWN0b3JcclxuICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gIXRyaWVkRWFnZXIgfHwgISFhY3RpdmF0aW5nQ29ubmVjdG9yIHx8IGNvbm5lY3RlZCB8fCAhIWVycm9yXHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFjdGl2YXRpbmcgPyAnb3JhbmdlJyA6IGNvbm5lY3RlZCA/ICdncmVlbicgOiAndW5zZXQnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICd1bnNldCcgOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yKGN1cnJlbnRDb25uZWN0b3IpXHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZShjb25uZWN0b3JzQnlOYW1lW25hbWVdKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMCAxcmVtJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZhdGluZyAmJiA8U3Bpbm5lciBjb2xvcj17J2JsYWNrJ30gc3R5bGU9e3sgaGVpZ2h0OiAnMjUlJywgbWFyZ2luTGVmdDogJy0xcmVtJyB9fSAvPn1cclxuICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4pyFXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIHsoYWN0aXZlIHx8IGVycm9yKSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMCAxcmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYWN0aXZhdGUoKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEaXNjb25uZWN0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7ISFlcnJvciAmJiA8aDQgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMXJlbScsIG1hcmdpbkJvdHRvbTogJzAnIH19PntnZXRFcnJvck1lc3NhZ2UoZXJyb3IpfTwvaDQ+fVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJpbmFuY2UtY2hhaW4vYnNjLWNvbm5lY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvYXV0aGVyZXVtLWNvbm5lY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2ZvcnRtYXRpYy1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9sYXR0aWNlLWNvbm5lY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9sZWRnZXItY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L21hZ2ljLWNvbm5lY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9uZXR3b3JrLWNvbm5lY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9wb3J0aXMtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3RvcnVzLWNvbm5lY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC90cmV6b3ItY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3dhbGxldGxpbmstY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
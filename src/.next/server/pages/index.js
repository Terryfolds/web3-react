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
var _jsxFileName = "C:\\Users\\jesh\\Desktop\\000O1T\\reward-checker\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var ConnectorNames;

(function (ConnectorNames) {
  ConnectorNames["Injected"] = "CONNECT";
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

function Account() {
  const {
    account
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
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
  }, balance === null ? 'Error' : balance ? `${Object(_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__["formatEther"])(balance).substring(0, 8)}` : ''));
}

function UserAccount() {
  const {
    active,
    error
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
    style: {
      display: 'grid',
      gridGap: '.5rem',
      gridTemplateColumns: '1fr 1fr',
      maxWidth: '20rem',
      lineHeight: '2rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx(Account, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), __jsx(Balance, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: '1fr',
      maxWidth: '15rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, Object.keys(connectorsByName).map(name => {
    const currentConnector = connectorsByName[name];
    const activating = currentConnector === activatingConnector;
    const connected = currentConnector === connector;
    const disabled = !triedEager || !!activatingConnector || connected || !!error;
    return __jsx("button", {
      style: {
        background: '#07c7ff',
        display: connected ? 'none' : 'unset',
        borderColor: activating ? 'orange' : connected ? '#07c7ff' : 'unset',
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
        lineNumber: 168,
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
        margin: '0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 15
      }
    }), name);
  }), (active || error) && __jsx("button", {
    style: {
      margin: '0',
      borderRadius: '1rem',
      borderColor: 'none',
      cursor: 'pointer'
    },
    onClick: () => {
      deactivate();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, "DISCONNECT"), !!error && __jsx("h4", {
    style: {
      marginTop: '1rem',
      marginBottom: '0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 23
    }
  }, getErrorMessage(error))), __jsx(UserAccount, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9ob29rcy50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJpbmFuY2UtY2hhaW4vYnNjLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvYXV0aGVyZXVtLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9mb3J0bWF0aWMtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvbGF0dGljZS1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9sZWRnZXItY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvbWFnaWMtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvbmV0d29yay1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9wb3J0aXMtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvdG9ydXMtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvdHJlem9yLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3Qvd2FsbGV0bGluay1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlBPTExJTkdfSU5URVJWQUwiLCJSUENfVVJMUyIsInByb2Nlc3MiLCJSUENfVVJMXzQiLCJpbmplY3RlZCIsIkluamVjdGVkQ29ubmVjdG9yIiwic3VwcG9ydGVkQ2hhaW5JZHMiLCJic2NDb25uZWN0b3IiLCJCc2NDb25uZWN0b3IiLCJuZXR3b3JrIiwiTmV0d29ya0Nvbm5lY3RvciIsInVybHMiLCJkZWZhdWx0Q2hhaW5JZCIsIndhbGxldGNvbm5lY3QiLCJXYWxsZXRDb25uZWN0Q29ubmVjdG9yIiwicnBjIiwicXJjb2RlIiwicG9sbGluZ0ludGVydmFsIiwid2FsbGV0bGluayIsIldhbGxldExpbmtDb25uZWN0b3IiLCJ1cmwiLCJhcHBOYW1lIiwibGVkZ2VyIiwiTGVkZ2VyQ29ubmVjdG9yIiwiY2hhaW5JZCIsInRyZXpvciIsIlRyZXpvckNvbm5lY3RvciIsIm1hbmlmZXN0RW1haWwiLCJtYW5pZmVzdEFwcFVybCIsImxhdHRpY2UiLCJMYXR0aWNlQ29ubmVjdG9yIiwiZnJhbWUiLCJGcmFtZUNvbm5lY3RvciIsImF1dGhlcmV1bSIsIkF1dGhlcmV1bUNvbm5lY3RvciIsImZvcnRtYXRpYyIsIkZvcnRtYXRpY0Nvbm5lY3RvciIsImFwaUtleSIsIm1hZ2ljIiwiTWFnaWNDb25uZWN0b3IiLCJlbWFpbCIsInBvcnRpcyIsIlBvcnRpc0Nvbm5lY3RvciIsImRBcHBJZCIsIm5ldHdvcmtzIiwidG9ydXMiLCJUb3J1c0Nvbm5lY3RvciIsInVzZUVhZ2VyQ29ubmVjdCIsImFjdGl2YXRlIiwiYWN0aXZlIiwidXNlV2ViM1JlYWN0IiwidHJpZWQiLCJzZXRUcmllZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaXNBdXRob3JpemVkIiwidGhlbiIsInVuZGVmaW5lZCIsImNhdGNoIiwidXNlSW5hY3RpdmVMaXN0ZW5lciIsInN1cHByZXNzIiwiZXJyb3IiLCJldGhlcmV1bSIsIndpbmRvdyIsIm9uIiwiaGFuZGxlQ29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFpbkNoYW5nZWQiLCJoYW5kbGVBY2NvdW50c0NoYW5nZWQiLCJhY2NvdW50cyIsImxlbmd0aCIsImhhbmRsZU5ldHdvcmtDaGFuZ2VkIiwibmV0d29ya0lkIiwicmVtb3ZlTGlzdGVuZXIiLCJDb25uZWN0b3JOYW1lcyIsImNvbm5lY3RvcnNCeU5hbWUiLCJJbmplY3RlZCIsImdldEVycm9yTWVzc2FnZSIsIk5vRXRoZXJldW1Qcm92aWRlckVycm9yIiwiVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSIsImdldExpYnJhcnkiLCJwcm92aWRlciIsImxpYnJhcnkiLCJXZWIzUHJvdmlkZXIiLCJBY2NvdW50IiwiYWNjb3VudCIsInN1YnN0cmluZyIsIkJhbGFuY2UiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsIlJlYWN0Iiwic3RhbGUiLCJnZXRCYWxhbmNlIiwiZm9ybWF0RXRoZXIiLCJVc2VyQWNjb3VudCIsImRpc3BsYXkiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1heFdpZHRoIiwibGluZUhlaWdodCIsIm1hcmdpbiIsIkFwcCIsImNvbnRleHQiLCJjb25uZWN0b3IiLCJkZWFjdGl2YXRlIiwiYWN0aXZhdGluZ0Nvbm5lY3RvciIsInNldEFjdGl2YXRpbmdDb25uZWN0b3IiLCJ0cmllZEVhZ2VyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm5hbWUiLCJjdXJyZW50Q29ubmVjdG9yIiwiYWN0aXZhdGluZyIsImNvbm5lY3RlZCIsImRpc2FibGVkIiwiYmFja2dyb3VuZCIsImJvcmRlckNvbG9yIiwiY3Vyc29yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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REY7QUErQkQsR0FyQ0EsQ0FUSCxFQStDRyxDQUFDbEUsTUFBTSxJQUFJWSxLQUFYLEtBQ0c7QUFDRSxTQUFLLEVBQUU7QUFDTDJDLFlBQU0sRUFBRSxHQURIO0FBRUx5QixrQkFBWSxFQUFFLE1BRlQ7QUFHTFIsaUJBQVcsRUFBRSxNQUhSO0FBSUxDLFlBQU0sRUFBRTtBQUpILEtBRFQ7QUFPRSxXQUFPLEVBQUUsTUFBTTtBQUNiZCxnQkFBVTtBQUNYLEtBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoRE4sRUErREssQ0FBQyxDQUFDL0MsS0FBRixJQUFXO0FBQUksU0FBSyxFQUFFO0FBQUVxRSxlQUFTLEVBQUUsTUFBYjtBQUFxQkMsa0JBQVksRUFBRTtBQUFuQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0RyRCxlQUFlLENBQUNqQixLQUFELENBQXJFLENBL0RoQixDQURGLEVBbUVFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkVGLENBREY7QUF3RUQsQzs7Ozs7Ozs7Ozs7QUM3TkQseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBCc2NDb25uZWN0b3IgfSBmcm9tICdAYmluYW5jZS1jaGFpbi9ic2MtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBOZXR3b3JrQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvbmV0d29yay1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2FsbGV0TGlua0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGxpbmstY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBMZWRnZXJDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9sZWRnZXItY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBUcmV6b3JDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC90cmV6b3ItY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBMYXR0aWNlQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvbGF0dGljZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IEZyYW1lQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBBdXRoZXJldW1Db25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9hdXRoZXJldW0tY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBGb3J0bWF0aWNDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9mb3J0bWF0aWMtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBNYWdpY0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L21hZ2ljLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgUG9ydGlzQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvcG9ydGlzLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVG9ydXNDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC90b3J1cy1jb25uZWN0b3InXHJcblxyXG5jb25zdCBQT0xMSU5HX0lOVEVSVkFMID0gMTIwMDBcclxuY29uc3QgUlBDX1VSTFM6IHsgW2NoYWluSWQ6IG51bWJlcl06IHN0cmluZyB9ID0ge1xyXG4gIDE6IHByb2Nlc3MuZW52LlJQQ19VUkxfMSBhcyBzdHJpbmcsXHJcbiAgNDogcHJvY2Vzcy5lbnYuUlBDX1VSTF80IGFzIHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5qZWN0ZWQgPSBuZXcgSW5qZWN0ZWRDb25uZWN0b3IoeyBzdXBwb3J0ZWRDaGFpbklkczogWzU2LCA5N10gfSlcclxuXHJcbmV4cG9ydCBjb25zdCBic2NDb25uZWN0b3IgPSBuZXcgQnNjQ29ubmVjdG9yKHsgc3VwcG9ydGVkQ2hhaW5JZHM6IFs1Nl0gfSlcclxuXHJcbmV4cG9ydCBjb25zdCBuZXR3b3JrID0gbmV3IE5ldHdvcmtDb25uZWN0b3Ioe1xyXG4gIHVybHM6IHsgMTogUlBDX1VSTFNbMV0sIDQ6IFJQQ19VUkxTWzRdIH0sXHJcbiAgZGVmYXVsdENoYWluSWQ6IDFcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB3YWxsZXRjb25uZWN0ID0gbmV3IFdhbGxldENvbm5lY3RDb25uZWN0b3Ioe1xyXG4gIHJwYzogeyAxOiBSUENfVVJMU1sxXSB9LFxyXG4gIHFyY29kZTogdHJ1ZSxcclxuICBwb2xsaW5nSW50ZXJ2YWw6IFBPTExJTkdfSU5URVJWQUxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB3YWxsZXRsaW5rID0gbmV3IFdhbGxldExpbmtDb25uZWN0b3Ioe1xyXG4gIHVybDogUlBDX1VSTFNbMV0sXHJcbiAgYXBwTmFtZTogJ3dlYjMtcmVhY3QgZXhhbXBsZSdcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsZWRnZXIgPSBuZXcgTGVkZ2VyQ29ubmVjdG9yKHsgY2hhaW5JZDogMSwgdXJsOiBSUENfVVJMU1sxXSwgcG9sbGluZ0ludGVydmFsOiBQT0xMSU5HX0lOVEVSVkFMIH0pXHJcblxyXG5leHBvcnQgY29uc3QgdHJlem9yID0gbmV3IFRyZXpvckNvbm5lY3Rvcih7XHJcbiAgY2hhaW5JZDogMSxcclxuICB1cmw6IFJQQ19VUkxTWzFdLFxyXG4gIHBvbGxpbmdJbnRlcnZhbDogUE9MTElOR19JTlRFUlZBTCxcclxuICBtYW5pZmVzdEVtYWlsOiAnZHVtbXlAYWJjLnh5eicsXHJcbiAgbWFuaWZlc3RBcHBVcmw6ICdodHRwOi8vbG9jYWxob3N0OjEyMzQnXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbGF0dGljZSA9IG5ldyBMYXR0aWNlQ29ubmVjdG9yKHtcclxuICBjaGFpbklkOiA0LFxyXG4gIGFwcE5hbWU6ICd3ZWIzLXJlYWN0JyxcclxuICB1cmw6IFJQQ19VUkxTWzRdXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWVDb25uZWN0b3IoeyBzdXBwb3J0ZWRDaGFpbklkczogWzFdIH0pXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aGVyZXVtID0gbmV3IEF1dGhlcmV1bUNvbm5lY3Rvcih7IGNoYWluSWQ6IDQyIH0pXHJcblxyXG5leHBvcnQgY29uc3QgZm9ydG1hdGljID0gbmV3IEZvcnRtYXRpY0Nvbm5lY3Rvcih7IGFwaUtleTogcHJvY2Vzcy5lbnYuRk9SVE1BVElDX0FQSV9LRVkgYXMgc3RyaW5nLCBjaGFpbklkOiA0IH0pXHJcblxyXG5leHBvcnQgY29uc3QgbWFnaWMgPSBuZXcgTWFnaWNDb25uZWN0b3Ioe1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTUFHSUNfQVBJX0tFWSBhcyBzdHJpbmcsXHJcbiAgY2hhaW5JZDogNCxcclxuICBlbWFpbDogJ2hlbGxvQGV4YW1wbGUub3JnJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvcnRpcyA9IG5ldyBQb3J0aXNDb25uZWN0b3IoeyBkQXBwSWQ6IHByb2Nlc3MuZW52LlBPUlRJU19EQVBQX0lEIGFzIHN0cmluZywgbmV0d29ya3M6IFsxLCAxMDBdIH0pXHJcblxyXG5leHBvcnQgY29uc3QgdG9ydXMgPSBuZXcgVG9ydXNDb25uZWN0b3IoeyBjaGFpbklkOiAxIH0pXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuXHJcbmltcG9ydCB7IGluamVjdGVkIH0gZnJvbSAnLi9jb25uZWN0b3JzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVhZ2VyQ29ubmVjdCgpIHtcclxuICBjb25zdCB7IGFjdGl2YXRlLCBhY3RpdmUgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIGNvbnN0IFt0cmllZCwgc2V0VHJpZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbmplY3RlZC5pc0F1dGhvcml6ZWQoKS50aGVuKChpc0F1dGhvcml6ZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgIGFjdGl2YXRlKGluamVjdGVkLCB1bmRlZmluZWQsIHRydWUpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHNldFRyaWVkKHRydWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUcmllZCh0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sIFtdKSAvLyBpbnRlbnRpb25hbGx5IG9ubHkgcnVubmluZyBvbiBtb3VudCAobWFrZSBzdXJlIGl0J3Mgb25seSBtb3VudGVkIG9uY2UgOikpXHJcblxyXG4gIC8vIGlmIHRoZSBjb25uZWN0aW9uIHdvcmtlZCwgd2FpdCB1bnRpbCB3ZSBnZXQgY29uZmlybWF0aW9uIG9mIHRoYXQgdG8gZmxpcCB0aGUgZmxhZ1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXRyaWVkICYmIGFjdGl2ZSkge1xyXG4gICAgICBzZXRUcmllZCh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFt0cmllZCwgYWN0aXZlXSlcclxuXHJcbiAgcmV0dXJuIHRyaWVkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmFjdGl2ZUxpc3RlbmVyKHN1cHByZXNzOiBib29sZWFuID0gZmFsc2UpIHtcclxuICBjb25zdCB7IGFjdGl2ZSwgZXJyb3IsIGFjdGl2YXRlIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICB1c2VFZmZlY3QoKCk6IGFueSA9PiB7XHJcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3cgYXMgYW55XHJcbiAgICBpZiAoZXRoZXJldW0gJiYgZXRoZXJldW0ub24gJiYgIWFjdGl2ZSAmJiAhZXJyb3IgJiYgIXN1cHByZXNzKSB7XHJcbiAgICAgIGNvbnN0IGhhbmRsZUNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyAnY29ubmVjdCcgZXZlbnRcIilcclxuICAgICAgICBhY3RpdmF0ZShpbmplY3RlZClcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoYW5kbGVDaGFpbkNoYW5nZWQgPSAoY2hhaW5JZDogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyAnY2hhaW5DaGFuZ2VkJyBldmVudCB3aXRoIHBheWxvYWRcIiwgY2hhaW5JZClcclxuICAgICAgICBhY3RpdmF0ZShpbmplY3RlZClcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoYW5kbGVBY2NvdW50c0NoYW5nZWQgPSAoYWNjb3VudHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyAnYWNjb3VudHNDaGFuZ2VkJyBldmVudCB3aXRoIHBheWxvYWRcIiwgYWNjb3VudHMpXHJcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGFjdGl2YXRlKGluamVjdGVkKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoYW5kbGVOZXR3b3JrQ2hhbmdlZCA9IChuZXR3b3JrSWQ6IHN0cmluZyB8IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ25ldHdvcmtDaGFuZ2VkJyBldmVudCB3aXRoIHBheWxvYWRcIiwgbmV0d29ya0lkKVxyXG4gICAgICAgIGFjdGl2YXRlKGluamVjdGVkKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBldGhlcmV1bS5vbignY29ubmVjdCcsIGhhbmRsZUNvbm5lY3QpXHJcbiAgICAgIGV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpXHJcbiAgICAgIGV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBoYW5kbGVBY2NvdW50c0NoYW5nZWQpXHJcbiAgICAgIGV0aGVyZXVtLm9uKCduZXR3b3JrQ2hhbmdlZCcsIGhhbmRsZU5ldHdvcmtDaGFuZ2VkKVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBpZiAoZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIpIHtcclxuICAgICAgICAgIGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdjb25uZWN0JywgaGFuZGxlQ29ubmVjdClcclxuICAgICAgICAgIGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpXHJcbiAgICAgICAgICBldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKVxyXG4gICAgICAgICAgZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ25ldHdvcmtDaGFuZ2VkJywgaGFuZGxlTmV0d29ya0NoYW5nZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2ZSwgZXJyb3IsIHN1cHByZXNzLCBhY3RpdmF0ZV0pXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IsXHJcbiAgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkXHJcbn0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWUgfSBmcm9tICdAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycydcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cydcclxuXHJcbmltcG9ydCB7IHVzZUVhZ2VyQ29ubmVjdCwgdXNlSW5hY3RpdmVMaXN0ZW5lciB9IGZyb20gJy4uL2hvb2tzJ1xyXG5pbXBvcnQge1xyXG4gIGluamVjdGVkXHJcbn0gZnJvbSAnLi4vY29ubmVjdG9ycydcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcclxuXHJcbmVudW0gQ29ubmVjdG9yTmFtZXMge1xyXG4gIEluamVjdGVkID0gJ0NPTk5FQ1QnXHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3RvcnNCeU5hbWU6IHsgW2Nvbm5lY3Rvck5hbWUgaW4gQ29ubmVjdG9yTmFtZXNdOiBhbnkgfSA9IHtcclxuICBbQ29ubmVjdG9yTmFtZXMuSW5qZWN0ZWRdOiBpbmplY3RlZFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoZXJyb3I6IEVycm9yKSB7XHJcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IpIHtcclxuICAgIHJldHVybiAnTm8gRXRoZXJldW0gYnJvd3NlciBleHRlbnNpb24gZGV0ZWN0ZWQsIGluc3RhbGwgTWV0YU1hc2sgb24gZGVza3RvcCBvciB2aXNpdCBmcm9tIGEgZEFwcCBicm93c2VyIG9uIG1vYmlsZS4nXHJcbiAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yKSB7XHJcbiAgICByZXR1cm4gXCJZb3UncmUgY29ubmVjdGVkIHRvIGFuIHVuc3VwcG9ydGVkIG5ldHdvcmsuXCJcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCB8fFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IHx8XHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gJ1BsZWFzZSBhdXRob3JpemUgdGhpcyB3ZWJzaXRlIHRvIGFjY2VzcyB5b3VyIEV0aGVyZXVtIGFjY291bnQuJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgcmV0dXJuICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLiBDaGVjayB0aGUgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzLidcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExpYnJhcnkocHJvdmlkZXI6IGFueSk6IFdlYjNQcm92aWRlciB7XHJcbiAgY29uc3QgbGlicmFyeSA9IG5ldyBXZWIzUHJvdmlkZXIocHJvdmlkZXIpXHJcbiAgbGlicmFyeS5wb2xsaW5nSW50ZXJ2YWwgPSAxMjAwMFxyXG4gIHJldHVybiBsaWJyYXJ5XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2ViM1JlYWN0UHJvdmlkZXIgZ2V0TGlicmFyeT17Z2V0TGlicmFyeX0+XHJcbiAgICAgIDxBcHAgLz5cclxuICAgIDwvV2ViM1JlYWN0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBY2NvdW50KCkge1xyXG4gIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkFjY291bnQ8L3NwYW4+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHthY2NvdW50ID09PSBudWxsXHJcbiAgICAgICAgICA/ICctJ1xyXG4gICAgICAgICAgOiBhY2NvdW50XHJcbiAgICAgICAgICA/IGAke2FjY291bnQuc3Vic3RyaW5nKDAsIDYpfS4uLiR7YWNjb3VudC5zdWJzdHJpbmcoYWNjb3VudC5sZW5ndGggLSA0KX1gXHJcbiAgICAgICAgICA6ICcnfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJhbGFuY2UoKSB7XHJcbiAgY29uc3QgeyBhY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSBSZWFjdC51c2VTdGF0ZSgpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpOiBhbnkgPT4ge1xyXG4gICAgaWYgKCEhYWNjb3VudCAmJiAhIWxpYnJhcnkpIHtcclxuICAgICAgbGV0IHN0YWxlID0gZmFsc2VcclxuXHJcbiAgICAgIGxpYnJhcnlcclxuICAgICAgICAuZ2V0QmFsYW5jZShhY2NvdW50KVxyXG4gICAgICAgIC50aGVuKChiYWxhbmNlOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmFsYW5jZShudWxsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHN0YWxlID0gdHJ1ZVxyXG4gICAgICAgIHNldEJhbGFuY2UodW5kZWZpbmVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2FjY291bnQsIGxpYnJhcnksIGNoYWluSWRdKSAvLyBlbnN1cmVzIHJlZnJlc2ggaWYgcmVmZXJlbnRpYWwgaWRlbnRpdHkgb2YgbGlicmFyeSBkb2Vzbid0IGNoYW5nZSBhY3Jvc3MgY2hhaW5JZHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkJOQiBCYWxhbmNlPC9zcGFuPlxyXG4gICAgICA8c3Bhbj57YmFsYW5jZSA9PT0gbnVsbCA/ICdFcnJvcicgOiBiYWxhbmNlID8gYCR7Zm9ybWF0RXRoZXIoYmFsYW5jZSkuc3Vic3RyaW5nKDAsIDgpfWAgOiAnJ308L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVzZXJBY2NvdW50KCkge1xyXG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoM1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkR2FwOiAnLjVyZW0nLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMnJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QWNjb3VudCAvPlxyXG4gICAgICAgIDxCYWxhbmNlIC8+XHJcbiAgICAgIDwvaDM+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlV2ViM1JlYWN0PFdlYjNQcm92aWRlcj4oKVxyXG4gIGNvbnN0IHsgY29ubmVjdG9yLCBsaWJyYXJ5LCBjaGFpbklkLCBhY2NvdW50LCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSwgYWN0aXZlLCBlcnJvciB9ID0gY29udGV4dFxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gcmVjb2duaXplIHRoZSBjb25uZWN0b3IgY3VycmVudGx5IGJlaW5nIGFjdGl2YXRlZFxyXG4gIGNvbnN0IFthY3RpdmF0aW5nQ29ubmVjdG9yLCBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZhdGluZ0Nvbm5lY3RvciAmJiBhY3RpdmF0aW5nQ29ubmVjdG9yID09PSBjb25uZWN0b3IpIHtcclxuICAgICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcih1bmRlZmluZWQpXHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2YXRpbmdDb25uZWN0b3IsIGNvbm5lY3Rvcl0pXHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBlYWdlcmx5IGNvbm5lY3QgdG8gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHMgYW5kIGhhcyBncmFudGVkIGFjY2VzcyBhbHJlYWR5XHJcbiAgY29uc3QgdHJpZWRFYWdlciA9IHVzZUVhZ2VyQ29ubmVjdCgpXHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBjb25uZWN0IGluIHJlYWN0aW9uIHRvIGNlcnRhaW4gZXZlbnRzIG9uIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzXHJcbiAgdXNlSW5hY3RpdmVMaXN0ZW5lcighdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnInLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcxNXJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7T2JqZWN0LmtleXMoY29ubmVjdG9yc0J5TmFtZSkubWFwKG5hbWUgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudENvbm5lY3RvciA9IGNvbm5lY3RvcnNCeU5hbWVbbmFtZV1cclxuICAgICAgICAgIGNvbnN0IGFjdGl2YXRpbmcgPSBjdXJyZW50Q29ubmVjdG9yID09PSBhY3RpdmF0aW5nQ29ubmVjdG9yXHJcbiAgICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBjdXJyZW50Q29ubmVjdG9yID09PSBjb25uZWN0b3JcclxuICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gIXRyaWVkRWFnZXIgfHwgISFhY3RpdmF0aW5nQ29ubmVjdG9yIHx8IGNvbm5lY3RlZCB8fCAhIWVycm9yXHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzA3YzdmZicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBjb25uZWN0ZWQgPyAnbm9uZScgOiAndW5zZXQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFjdGl2YXRpbmcgPyAnb3JhbmdlJyA6IGNvbm5lY3RlZCA/ICcjMDdjN2ZmJyA6ICd1bnNldCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRpc2FibGVkID8gJ3Vuc2V0JyA6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAga2V5PXtuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFjdGl2YXRpbmdDb25uZWN0b3IoY3VycmVudENvbm5lY3RvcilcclxuICAgICAgICAgICAgICAgIGFjdGl2YXRlKGNvbm5lY3RvcnNCeU5hbWVbbmFtZV0pXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgICB7KGFjdGl2ZSB8fCBlcnJvcikgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYWN0aXZhdGUoKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBESVNDT05ORUNUXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7ISFlcnJvciAmJiA8aDQgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMXJlbScsIG1hcmdpbkJvdHRvbTogJzAnIH19PntnZXRFcnJvck1lc3NhZ2UoZXJyb3IpfTwvaDQ+fVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxVc2VyQWNjb3VudCAvPlxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmluYW5jZS1jaGFpbi9ic2MtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZXRoZXJzcHJvamVjdC91bml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9hdXRoZXJldW0tY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvZm9ydG1hdGljLWNvbm5lY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2xhdHRpY2UtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2xlZGdlci1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvbWFnaWMtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L25ldHdvcmstY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3BvcnRpcy1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvdG9ydXMtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3RyZXpvci1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3Qvd2FsbGV0bGluay1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==